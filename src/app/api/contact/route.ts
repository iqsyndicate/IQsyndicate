import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

function normalizeValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const form = normalizeValue(formData.get("form")) || "contact";
    const payload: Record<string, string> = {
      form,
    };

    formData.forEach((value, key) => {
      if (key === "form") return;
      payload[key] = normalizeValue(value);
    });

    await sendContactEmail(payload as Parameters<typeof sendContactEmail>[0]);

    return NextResponse.json({
      success: true,
      message: "Message received. Thank you for reaching out.",
    });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json(
      {
        success: false,
        message: "We could not send your message right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}
