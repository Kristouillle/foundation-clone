"use client";

import {useEffect} from "react";

export default function Crisp() {

    useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "360825ff-f0f7-4247-a1de-920e7794852d";
        (function () {
            let d = document;
            let s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();

    }, []);

    return null;
}