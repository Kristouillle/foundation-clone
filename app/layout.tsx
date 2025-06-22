import "@/styles/globals.css";
import { LanguageProvider } from "@inlang/paraglide-next";

import { Metadata, Viewport } from "next";
import React from "react";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
// import * as m from "@/paraglide/messages";
import { AvailableLanguageTag, languageTag } from "@/paraglide/runtime.js";
import { GTM_ID } from "@/lib/gtm";
import GoogleAnalytics from "@/lib/analytics";
import CookieBanner from "@/app/cookie/cookiebanner";
import Crisp from "@/lib/crisp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: true,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tail'ed",
    // description: m.the_career_that_suits_you(),
    description: "Description",
    icons: {
      icon: "/favicon.ico",
    },
    manifest: "/manifest.json",
  };
}

const direction: Record<AvailableLanguageTag, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html
        lang={languageTag()}
        dir={direction[languageTag()]}
        suppressHydrationWarning
      >
        <GoogleAnalytics GTM_ID={GTM_ID} />
        <body>
          <Navigation />
          {children}
          <Footer />
          <Crisp/>
          <CookieBanner/>
        </body>
      </html>
    </LanguageProvider>
  );
}
