import { backendClient } from "@/sanity/lib/backendClient";
import { findOrCreateDocument } from "@/sanity/lib/mutation/mutation";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postPayloadSchema = z.object({
  title: z.object({
    "pt-BR": z.string().min(1).max(200),
    en: z.string().min(1).max(200),
    es: z.string().min(1).max(200),
  }),
  body: z.object({
    "pt-BR": z.string().min(1).max(50000),
    en: z.string().min(1).max(50000),
    es: z.string().min(1).max(50000),
  }),
  authorId: z.string(),
  categories: z.array(
    z.object({ "pt-BR": z.string(), en: z.string(), es: z.string() }),
  ),
  tags: z.array(
    z.object({ "pt-BR": z.string(), en: z.string(), es: z.string() }),
  ),

  mainImage: z.object({
    base64: z.string().max(5500000),
    alt: z.object({
      "pt-BR": z.string().max(500),
      en: z.string().max(500),
      es: z.string().max(500),
    }),
  }),
});

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.MY_SECRET_API_KEY}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let payload;

  try {
    const json = await request.json();
    payload = postPayloadSchema.parse(json);
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid request payload", error },
      { status: 400 },
    );
  }

  const { title, body, authorId, categories, tags, mainImage } = payload;
  const client = backendClient;

  try {
    const categoryDocs = await Promise.all(
      categories.map((cat) =>
        findOrCreateDocument("historietas-category", cat),
      ),
    );
    const tagDocs = await Promise.all(
      tags.map((tag) => findOrCreateDocument("historietas-tag", tag)),
    );

    const categoryReferences = categoryDocs.map((doc) => ({
      _type: "reference",
      _ref: doc._id,
      _key: doc._id,
    }));
    const tagReferences = tagDocs.map((doc) => ({
      _type: "reference",
      _ref: doc._id,
      _key: doc._id,
    }));

    let imageAssetReference;
    if (mainImage && mainImage.base64) {
      const base64Data = mainImage.base64.split(";base64,").pop();

      //@ts-ignore
      const imageBuffer = Buffer.from(base64Data, "base64");

      const imageAsset = await client.assets.upload("image", imageBuffer);

      imageAssetReference = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },

        alt: Object.entries(mainImage.alt).map(([key, value]) => ({
          _key: key,
          value,
        })),
      };
    }

    const titleForCreate = Object.entries(title).map(([key, value]) => ({
      _key: key,
      value,
    }));
    const bodyForCreate = Object.entries(body).map(([key, value]) => ({
      _key: key,
      value,
    }));
    const slugSource = title["en"] || Object.values(title)[0];

    const postToCreate = {
      _type: "historietas-post",
      title: titleForCreate,
      body: bodyForCreate,
      slug: {
        _type: "slug",
        current: slugSource.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      author: {
        _type: "reference",
        _ref: authorId,
      },
      categories: categoryReferences,
      tags: tagReferences,

      ...(imageAssetReference && { mainImage: imageAssetReference }),
    };

    const createdPost = await client.create(postToCreate);

    return NextResponse.json(createdPost, { status: 201 });
  } catch (error) {
    console.error("Error creating the post:", error);
    return NextResponse.json(
      { message: "A server error occurred.", error },
      { status: 500 },
    );
  }
}
