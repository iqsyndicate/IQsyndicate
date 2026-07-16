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

type FormMeta = {
  title: string;
  internalHeading: string;
  internalIntro: string;
  internalSubjectPrefix: string;
  publicHeading: string;
  publicIntro: string;
  publicClosing: string;
};

function getFormMeta(form: string): FormMeta {
  switch (form) {
    case "founders":
      return {
        title: "Founder Application",
        internalHeading: "New founder application received",
        internalIntro: "A founder has submitted a technical assistance application through the IQ Syndicate website. Review the details below and follow up directly if needed.",
        internalSubjectPrefix: "New founder application",
        publicHeading: "We received your founder application",
        publicIntro: "Thank you for submitting your application to IQ Syndicate. We have received your details and our team will review them shortly.",
        publicClosing: "We will be in touch if we need any further information.",
      };
    case "investors":
      return {
        title: "Investor Enquiry",
        internalHeading: "New investor enquiry received",
        internalIntro: "An investor or partner has requested the Mobilist Facility information pack. Review the details below and follow up directly if needed.",
        internalSubjectPrefix: "New investor enquiry",
        publicHeading: "We received your investor enquiry",
        publicIntro: "Thank you for requesting the Mobilist Facility information pack. We have received your enquiry and our team will review it shortly.",
        publicClosing: "We will be in touch with the requested materials as soon as possible.",
      };
    case "partners":
      return {
        title: "Partner Enquiry",
        internalHeading: "New partner enquiry received",
        internalIntro: "A prospective partner has submitted an enquiry through the IQ Syndicate website. Review the request details below and follow up directly if needed.",
        internalSubjectPrefix: "New partner enquiry",
        publicHeading: "We received your partner enquiry",
        publicIntro: "Thank you for reaching out to IQ Syndicate about a potential partnership. Our team has received your enquiry and will review it shortly.",
        publicClosing: "We will be in touch if we need any further information.",
      };
    case "subscribe":
      return {
        title: "Newsletter Subscription",
        internalHeading: "New newsletter subscription request",
        internalIntro: "A new newsletter subscription request has arrived through the IQ Syndicate website. Review the contact details below and follow up if needed.",
        internalSubjectPrefix: "New newsletter subscription",
        publicHeading: "We received your newsletter subscription request",
        publicIntro: "Thank you for subscribing to updates from IQ Syndicate. We have received your request and will keep you informed about future platform updates.",
        publicClosing: "If you do not see this message in your inbox, please check your spam folder.",
      };
    default:
      return {
        title: "New Enquiry",
        internalHeading: "New enquiry received",
        internalIntro: "A new enquiry has arrived through the IQ Syndicate website. Review the details below and follow up directly if needed.",
        internalSubjectPrefix: "New enquiry",
        publicHeading: "We received your message",
        publicIntro: "Thank you for reaching out to IQ Syndicate. We have received your message and our team will review it shortly.",
        publicClosing: "If you do not see this message in your inbox, please check your spam folder.",
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
  const meta = getFormMeta(payload.form);
  const isTeam = recipient === "team";
  const heading = isTeam ? meta.internalHeading : meta.publicHeading;
  const intro = isTeam ? meta.internalIntro : meta.publicIntro;
  const closing = isTeam ? "Please review the submission details and respond directly if needed." : meta.publicClosing;

  const rows = buildTableRows(payload);
  const subjectLine = `${meta.title}${payload.email ? ` • ${payload.email}` : ""}`;

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
            <p style="margin: 0;">${escapeHtml(closing)}</p>
            <p style="margin: 6px 0 0;">If you would like to reach out directly, please contact <a href="mailto:hello@iqsyndicate.org" style="color: #6f1c28; text-decoration: none;">hello@iqsyndicate.org</a>.</p>
            <p style="margin: 6px 0 0;">Kind regards,<br />IQ Syndicate</p>
          </div>
        </div>
      </div>
    </div>`;
}

function buildTextBody(payload: ContactPayload, recipient: "team" | "sender") {
  const meta = getFormMeta(payload.form);
  const intro = recipient === "sender"
    ? meta.publicIntro
    : meta.internalIntro;

  return [
    intro,
    "",
    ...Object.entries(payload)
      .filter(([key]) => key !== "form" && key !== "email")
      .map(([key, value]) => `${toDisplayLabel(key)}: ${value || "—"}`),
  ].join("\n");
}

function getMailHeaders() {
  return {
    "List-Unsubscribe": "<mailto:hello@iqsyndicate.org?subject=Unsubscribe>",
    "Auto-Submitted": "auto-generated",
    "X-Auto-Response-Suppress": "OOF, AutoReply",
    "X-Priority": "3",
    Priority: "normal",
  };
}

export async function sendContactEmail(payload: ContactPayload) {
  const recipientEmail = process.env.MAIL_TO || process.env.SMTP_USER || "iqsyndicate.ng@gmail.com";
  const senderEmail = process.env.MAIL_FROM || process.env.SMTP_USER || "noreply@iqsyndicate.org";
  const senderName = process.env.MAIL_FROM_NAME || "IQ Syndicate";
  const from = `${senderName} <${senderEmail}>`;
  const meta = getFormMeta(payload.form);

  const teamMail = {
    from,
    to: recipientEmail,
    replyTo: payload.email || senderEmail,
    subject: `${meta.internalSubjectPrefix}${payload.email ? ` from ${payload.email}` : ""}`,
    headers: getMailHeaders(),
    html: buildEmailHtml(payload, "team"),
    text: buildTextBody(payload, "team"),
  };

  await transporter.sendMail(teamMail);

  if (payload.email) {
    const senderMail = {
      from,
      to: payload.email,
      replyTo: recipientEmail,
      subject: `We received your ${meta.title.toLowerCase()} request`,
      headers: getMailHeaders(),
      html: buildEmailHtml(payload, "sender"),
      text: buildTextBody(payload, "sender"),
    };

    await transporter.sendMail(senderMail);
  }
}
