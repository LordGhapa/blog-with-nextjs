import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "historietas-post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title.1.value",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "historietas-author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "internationalizedArrayString",
          title: "Alternative text (Traduções)",
        }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "historietas-category" },
        }),
      ],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "historietas-tag" },
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Corpo do Post (Markdown)",
      type: "internationalizedArrayText",
    }),
  ],
  preview: {
    select: {
      title: "title.0.value",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
