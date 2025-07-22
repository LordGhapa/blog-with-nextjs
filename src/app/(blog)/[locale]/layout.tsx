import type { Metadata } from "next";
import "../../globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import { handleError } from "@/lib/client-utils";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";


 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "ia-historietas",
  description: "Pagina feita com next js e informações vinda de uma api",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}

        <NextIntlClientProvider>{children}</NextIntlClientProvider>

        <SanityLive onError={handleError} />
      </body>
    </html>
  );
}
