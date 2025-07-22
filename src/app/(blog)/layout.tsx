import type { Metadata } from "next";
import "../globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import { handleError } from "@/lib/client-utils";

export const metadata: Metadata = {
  title: "ia-historietas",
  description: "Pagina feita com next js e informações vinda de uma api",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}

        <div>{children}</div>

        <SanityLive onError={handleError} />
      </body>
    </html>
  );
}
