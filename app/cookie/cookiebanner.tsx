"use client";

import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelpers";
import Link from "next/link";
import {Button} from "@/components/ui/button";

import * as m from "@/paraglide/messages.js";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState("init");

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", "not_set");
    console.log("Cookie Consent from local storage: ", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    if (cookieConsent === "init" || cookieConsent === "not_set") {
      return;
    }

    const newValue = cookieConsent === "true" ? "granted" : "denied";

    // @ts-ignore
    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`${cookieConsent === "init" || cookieConsent !== "not_set" ? "hidden" : "flex"}
          bg-white my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 rounded-lg shadow bg-primary-100 z-50`}
    >
      <div className="text-center">
        <p>
          {m.we_use()}{" "}
          <Link href="/privacy">
            <span className={`text-primary font-bold`}>
              {m.cookies()}
            </span>
          </Link>{" "}
            {m.on_our_site()}
        </p>
      </div>

      <div className="flex gap-2">
        <Button
            variant={"outline"}
          onClick={() => setCookieConsent("false")}
        >
          {m.decline()}
        </Button>
        <Button
          onClick={() => setCookieConsent("true")}
        >
          {m.allow_cookies()}
        </Button>
      </div>
    </div>
  );
}
