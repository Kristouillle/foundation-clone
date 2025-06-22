"use server";

import { createTransport } from "nodemailer";
import {ContactFormSchema, ContactFormType} from "@/lib/types";

export async function postContactForm(data: ContactFormType) {

  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false };
  }

  await sendContactEmail({
    identifier: data.email,
    subject: data.subject,
    message: data.message,
  });

  return { success: true };
}

export async function subscribeForm(data: any) {

  let form = {
    email: data.get("email"),
    list: [],
  };

  if (data.get("employer-checkbox")) {
    // employers
    form.list.push("5a0fdce8-b23c-48a0-b0d6-d09833136491");
  }

  if (data.get("student-checkbox")) {
    // students
    form.list.push("63e65c95-e342-42e8-a6a1-944963afe8f9");
  }

  await subscribe(form.email, form.list);

  return { success: true };
}

async function sendContactEmail({ identifier, subject, message }) {
  const transport = createTransport(process.env.EMAIL_SERVER);
  const result = await transport.sendMail({
    to: "info@tailed.ca",
    from: process.env.EMAIL_FROM,
    subject: `Contact Form Submission from ${identifier}`,
    text: text({ identifier, subject, message }),
    html: html({ identifier, subject, message }),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
}

function html({ identifier, subject, message }) {
  const brandColor = "#346df1";
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: "#fff",
  };

  return `
<body style="background: ${color.background}; padding-top: 30px; padding-bottom: 30px">
  <table width="100%" border="0" cellspacing="0" cellpadding="0"
    style="max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="left">
        <img
            src="https://tailed.ca/tailed-512x512.png"
            alt="Company"
            style="width: 56px"
        />
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="left"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        From: ${identifier}
      </td>
    </tr>
    <tr>
      <td align="left"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Subject: ${subject}
      </td>
    </tr>
    <tr>
      <td align="left"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Message: ${message}
      </td>
    </tr>
  </table>
</body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ identifier, subject, message }) {
  return `From: ${identifier}
Subject: ${subject}
Message: ${message}
    `;
}

export async function subscribe(
  email: string,
  list: string[]
) {
  const client = require("@sendgrid/client");

  client.setApiKey(process.env.SENDGRID_API_KEY);

  const data = {
    list_ids: list,
    contacts: [
      {
        email: email
      },
    ],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
  };

  client
    .request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
    })
    .catch((error: any) => {
      console.error(error.response.body.errors);
    });
}

export async function sendEmail(to: string) {
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: to,
    from: "info@tailed.ca",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
}
