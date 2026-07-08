import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeading from "@/components/site/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "A placeholder privacy policy page for our website structure.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Privacy Policy"
            title="Your data and how it is handled."
            description="This page can be expanded with the final client-approved privacy policy when available."
          />
        </FadeUp>

        <FadeUp className="mt-10 rounded-[2rem] border border-border bg-white p-8 shadow-[0_15px_40px_rgba(20,20,20,0.05)]">
          <div className="space-y-5 text-sm leading-8 text-ink/68">
            <p>
              we are committed to treating submitted information with
              care and using it only for legitimate business, partnership, and
              review purposes.
            </p>
            {/* <p>
              The final privacy policy should be inserted here once client
              counsel or compliance teams provide the approved text.
            </p> */}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
