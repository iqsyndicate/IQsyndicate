import nodemailer from "nodemailer";

export type ContactPayload = {
  form: string;
  email?: string;
  [key: string]: string | undefined;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "iqsyndicate.ng@gmail.com",
    pass: process.env.SMTP_PASS || "",
  },
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toDisplayLabel(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getFormMeta(form: string) {
  switch (form) {
    case "founders":
      return {
        title: "Founder Application",
        heading: "A new founder application has arrived",
        body: "Thank you for reaching out to IQ Syndicate. We have received your application and will review it shortly.",
      };
    case "investors":
      return {
        title: "Investor Enquiry",
        heading: "A new investor enquiry has arrived",
        body: "Thank you for requesting the Mobilist Facility information pack. We will send the materials to you shortly.",
      };
    case "partners":
      return {
        title: "Partner Enquiry",
        heading: "A new partner enquiry has arrived",
        body: "Thank you for partnering with IQ Syndicate. Our team will review your enquiry and respond shortly.",
      };
    case "subscribe":
      return {
        title: "Newsletter Subscription",
        heading: "A new subscription request has arrived",
        body: "Thank you for subscribing to updates from IQ Syndicate. We will share launch updates and platform news with you.",
      };
    default:
      return {
        title: "New Enquiry",
        heading: "A new contact form submission has arrived",
        body: "Thank you for reaching out to IQ Syndicate. We will get back to you shortly.",
      };
  }
}

function buildTableRows(payload: ContactPayload) {
  return Object.entries(payload)
    .filter(([key]) => key !== "form" && key !== "email")
    .map(([key, value]) => {
      const displayValue = value?.trim() ? value.trim() : "—";
      return `
        <tr>
          <td style="padding: 10px 0; font-size: 13px; color: #5f5a4f; font-weight: 600; width: 40%; vertical-align: top;">${escapeHtml(toDisplayLabel(key))}</td>
          <td style="padding: 10px 0; font-size: 13px; color: #1f2a24; vertical-align: top;">${escapeHtml(displayValue)}</td>
        </tr>`;
    })
    .join("");
}

function buildEmailHtml(payload: ContactPayload, recipient: "team" | "sender") {
  const { title, heading, body } = getFormMeta(payload.form);
  const isSender = recipient === "sender";
  const intro = isSender
    ? "Thank you for reaching out to IQ Syndicate. We have received your message and a member of our team will follow up shortly."
    : body;

  const rows = buildTableRows(payload);
  const subjectLine = `${title}${payload.email ? ` • ${payload.email}` : ""}`;

  return `
    <div style="font-family: Inter, Arial, sans-serif; background-color: #f7f1e8; padding: 32px 16px; color: #1f2a24;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 22px; overflow: hidden; box-shadow: 0 20px 45px rgba(46, 38, 28, 0.08);">
        <div style="background: linear-gradient(135deg, #6f1c28 0%, #8a6a45 100%); padding: 28px 32px;">
          <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #f4e2c7;">IQ Syndicate</p>
          <h1 style="margin: 0; font-size: 24px; line-height: 1.2; color: #ffffff;">${escapeHtml(heading)}</h1>
        </div>
        <div style="padding: 28px 32px 24px;">
          <p style="margin: 0 0 12px; font-size: 15px; line-height: 1.8; color: #403b33;">${escapeHtml(intro)}</p>
          <p style="margin: 0 0 18px; font-size: 15px; line-height: 1.8; color: #403b33;">Please find the details below.</p>
          <div style="background: #fcf7ef; border: 1px solid #ece0c9; border-radius: 16px; padding: 16px 18px; margin-bottom: 18px;">
            <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #8a6a45;">Reference</p>
            <p style="margin: 0; font-size: 16px; font-weight: 700; color: #1f2a24;">${escapeHtml(subjectLine)}</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
        <div style="padding: 0 32px 32px;">
          <div style="border-top: 1px solid #e9dfcd; padding-top: 16px; font-size: 13px; line-height: 1.7; color: #6b6258;">
            <p style="margin: 0;">This message was sent by the IQ Syndicate website contact flow.</p>
            <p style="margin: 6px 0 0;">If you would like to reach out directly, please contact <a href="mailto:hello@iqsyndicate.org" style="color: #6f1c28; text-decoration: none;">hello@iqsyndicate.org</a>.</p>
            <p style="margin: 6px 0 0;">Kind regards,<br />IQ Syndicate</p>
          </div>
        </div>
      </div>
    </div>`;
}

function buildTextBody(payload: ContactPayload, recipient: "team" | "sender") {
  const { title } = getFormMeta(payload.form);
  const intro = recipient === "sender"
    ? "Thank you for reaching out to IQ Syndicate. We have received your message and will follow up shortly."
    : `${title} received from ${payload.email || "an anonymous sender"}.`;

  return [
    intro,
    "",
    ...Object.entries(payload)
      .filter(([key]) => key !== "form" && key !== "email")
      .map(([key, value]) => `${toDisplayLabel(key)}: ${value || "—"}`),
  ].join("\n");
}

export async function sendContactEmail(payload: ContactPayload) {
  const recipientEmail = process.env.MAIL_TO || process.env.SMTP_USER || "iqsyndicate.ng@gmail.com";
  const senderEmail = process.env.MAIL_FROM || process.env.SMTP_USER || "noreply@iqsyndicate.org";
  const senderName = process.env.MAIL_FROM_NAME || "IQ Syndicate";
  const from = `${senderName} <${senderEmail}>`;
  const subject = `${getFormMeta(payload.form).title}${payload.email ? ` | ${payload.email}` : ""}`;

  const teamMail = {
    from,
    to: recipientEmail,
    replyTo: payload.email || senderEmail,
    subject: `New ${subject}`,
    html: buildEmailHtml(payload, "team"),
    text: buildTextBody(payload, "team"),
  };

  await transporter.sendMail(teamMail);

  if (payload.email) {
    const senderMail = {
      from,
      to: payload.email,
      subject: `We received your ${getFormMeta(payload.form).title.toLowerCase()} request`,
      html: buildEmailHtml(payload, "sender"),
      text: buildTextBody(payload, "sender"),
    };

    await transporter.sendMail(senderMail);
  }
}
