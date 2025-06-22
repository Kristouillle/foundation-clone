"use client";

import * as m from "@/paraglide/messages";

import { InlineWidget } from "react-calendly";
import React from "react";

export default function AppointmentForm() {
  return (
    <>
      <h2 className={"scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 px-6 sm:px-0 ease-in-out duration-500 mb-6"}>
          {m.book_a_meeting()}
      </h2>
      <InlineWidget
        styles={{
          height: "1000px",
        }}
        url="https://calendly.com/tailed/30min"
      />
    </>
  );
}
