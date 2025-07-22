import { client } from "@/sanity/lib/client";

import { draftMode } from "next/headers";
import { validatePreviewUrl as sanityValidatePreviewUrl } from "@sanity/preview-url-secret";
import { redirect } from "next/navigation";

const clientWithToken = client.withConfig({
  // Required, otherwise the URL preview secret can't be validated
  token: process.env.SANITY_API_TOKEN_READ,
});

export async function GET(req: Request) {
  const { isValid, redirectTo = "/" } = await sanityValidatePreviewUrl(
    clientWithToken,
    req.url,
  );
  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  (await draftMode()).enable();
  redirect(redirectTo);
}
