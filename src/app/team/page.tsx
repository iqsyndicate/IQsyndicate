import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import TeamBioDialog from "@/components/ui/TeamBioDialog";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind IQ Syndicate — expertise in climate finance, platform engineering, private credit, market intelligence, and business development.",
  keywords: [
    "climate finance team",
    "impact investment experts",
    "African founders",
    "market intelligence leaders",
    "technical assistance specialists",
  ],
  alternates: {
    canonical: "https://iqsyndicate.org/team",
  },
};

export const dynamic = "force-static";

const team = [
  { name: "Gift Adaugo", role: "Partner", focus: "Development Impact", tone: "photo-duotone-forest", bio: "Gift Adaugo Nwamadu is a public policy researcher and climate finance advocate focused on gender-responsive climate policy in sub-Saharan Africa. She is completing an MPhil in Public Policy at the University of Cambridge as a Mastercard Foundation Scholar, and recently served as a Climate Finance Analyst with the Climate Policy Initiative, tracking climate finance flows for its Africa Landscape of Climate Finance report. Over four years, she has combined executive-level operational leadership, most recently as Chief of Staff to the CEO of Clean Technology Hub, where she helped secure more than $1 million in grant funding, with substantive research on climate finance, gender equity, and institutional design. She is the founder of Policies Vault, an independent think tank, and writes widely on climate finance and women's economic participation." },
  { name: "Ghenzini Edet", role: "Partner", focus: "Capital Mobilization", tone: "photo-duotone-forest", bio: "Ghenzini Edet is an economist with deep expertise in originating, structuring, and mobilising capital for clean energy infrastructure and climate ventures across Africa. He has co-led the structuring of a $10 million green bond instrument aligned with ICMA Green Bond Principles and SEC regulations, and contributed to the review of a $275 million Green Climate Fund concept note for the Development Bank of Nigeria. He has provided investment risk screening and commercialisation support to 11 climate ventures in Nigeria and Uganda under the Carbon Trust's ZE-Gen Local Innovation Facility, and co-developed a successful $6 million project facility under the Mastercard Foundation TANDEM programme to expand energy infrastructure for MSMEs across Nigeria's solar value chain. He has led partnerships and coordinated projects with the Africa Finance Corporation and the Nigeria Sovereign Investment Authority. He provided investment readiness and risk advisory support to more than 300 climate ventures through donor-funded programmes, including the Climate Gender Equity Fund, 2X Global, and ClimateWorks Foundation, and contributed to national carbon market regulatory dialogues with the European Commission on Article 6 framework implementation in Nigeria. His expertise spans the full investment value chain: deal origination and screening, financial analysis, ESG risk integration, fund structuring, blended finance instrument design, and investor relations. He holds professional certifications in Financial Modelling & Valuation, ESG Risk Management, Climate Finance, Project Finance, and Private Equity from institutions including CFI, Bocconi University, and the University of Pennsylvania." },
  { name: "Anietie Udoaka", role: "Head", focus: "Platform & Product Development", tone: "photo-duotone-gold", bio: "Anietie Udoaka is a mobile platform engineer with close to seven years in production software, five of them leading Android and Flutter development for regulated financial services in Nigeria. As Team Lead for Mobile Development at Mintyn Online Bank, a licensed digital bank, he owns the core mobile architecture and the engineering standards, multi-module design, automated testing, CI/CD, and release governance that the wider team builds against. His work has standardised development across the mobile team, cut new-feature build time by roughly 30%, and reduced post-release bug reports by 43%. He has shipped core banking products to a customer base in the tens of thousands and contributes to native Android and Flutter applications for Gopaddi Technologies. He holds a B.Sc. in Genetics and Biotechnology from the University of Calabar and is now focused on leading the technical function of an African energy data venture from first commit through platform maturity." },
  { name: "Francis Nwalibe", role: "Head", focus: "Risk & Private Credit", tone: "photo-duotone-burgundy", bio: "Francis is a dynamic investment professional with extensive experience spanning Corporate Finance, Venture Capital, Project Finance, Investment Management, and Capital Markets. He has executed private debt and equity raises with combined value exceeding $25M in the Financial Services, Agriculture, Renewable Energy, Technology, Infrastructure, and Power sectors. He currently serves as Head of Capital Markets at BAS Capital Limited, where he provides coverage for growth and scale-stage MSMEs in business advisory, mergers and acquisitions, project finance, and debt and equity capital markets. In addition, he is a Venture Fellow with Dream VC, where he conducts market sizing, preliminary screening and due diligence, memo building, and valuation for Agtech, Climate Tech, Fintech, and Food Tech startups. Previously, he was Team Lead, Investments and Trade at Welcome2Africa, where he spearheaded deal sourcing, LP relations, and fundraising for the $100M Sustainable Agriculture Fund, focused on building the climate resilience of smallholders. In addition to leading origination, structuring, and execution of private debt and equity deals, he led consultancy engagements with USAID, UNDP, 2SCALE, IFDC, GIZ, and others." },
  { name: "Regina Godwin", role: "Lead", focus: "Insights, Market Research & AI Intelligence", tone: "photo-duotone-forest", bio: "Regina Oluchi Godwin is an AI Engineer and Data Scientist who designs and deploys enterprise-scale artificial intelligence, machine learning, and analytics solutions across cybersecurity, customer analytics, and cloud platforms. She specializes in building production-ready AI applications using Azure OpenAI, FastAPI, Oracle technologies, and Azure data services to solve complex business challenges. Currently a Data Scientist and AI Engineer at Access Bank PLC, Regina has delivered AI-powered automation that has compressed operational processes from weeks to minutes, accelerated enterprise decision-making, and enabled data-driven business and security operations. Among her signature achievements, she architected a production-grade AI Vulnerability Management Agent, built on Azure OpenAI GPT-4o, FastAPI, and React, that reduced vulnerability ownership identification across roughly 6,500 technology assets from as long as two weeks to under two minutes. At Access Bank Plc, she also developed an XGBoost customer churn model leveraging approximately 43 million records with over 90% precision, recall, and accuracy, and a Commercial Banking Pareto prediction framework that achieved around 97% accuracy in identifying the bank's highest-value customers. She holds a BSc in Economics from the University of Calabar and an extensive portfolio of professional certifications, including Microsoft Certified: Fabric Data Engineer Associate, Azure Data Scientist Associate, and multiple Azure and AWS AI credentials." },
  { name: "James Nwefuru", role: "Lead", focus: "Renewable Energy Business Development", tone: "photo-duotone-gold", bio: "James Nwefuru is an infrastructure finance and sustainable development professional whose career bridges technical engineering with transaction advisory, connecting infrastructure design to financial structuring and project delivery. He currently supports a $300 million pipeline of infrastructure development and financing initiatives across Nigeria and Africa, working across government, development finance institutions, private investors, and technical partners on feasibility studies, financial models, transaction documentation, and implementation strategy for complex infrastructure programmes. His portfolio spans flagship national and continental programmes, including Nigeria's Special Agro-Industrial Processing Zones initiative, renewable energy and rural electrification under the UK PACT Run-of-River Small Hydropower Programme, and climate-focused urban development delivered in collaboration with C40 Cities across selected African countries. Before transitioning into infrastructure advisory, he built over four years of experience as a Green Structural Engineer, contributing to the design and delivery of more than twenty sustainable buildings, transport, and public-sector projects grounded in resource-efficient engineering and low-carbon construction. James is driven by mobilizing private capital towards bankable, climate-resilient infrastructure and accelerating Africa's clean energy transition. He holds a bachelor's degree in Structural Engineering and is completing the Financial Modeling & Valuation Analyst certification with the Financial Modeling Institute." },
];

const advisoryBoard = [
  {
    name: "Koye Alaba",
    role: "Advisor",
    focus: "Clean Energy Transactions",
    image: "/images/advisory/koye Alaba.png",
    bio: "Koye Alaba is the Director of Off-Grid Transaction Advisory at GreenMax Capital Group. Koye has a decade of experience in the clean energy and energy access sectors, specializing in project finance and development, transaction advisory, investment readiness support, financial modeling, market research and analysis, fund design, and financial due diligence. Koye is a licensed Project Management Professional, and he holds an M.Sc. in Technical Entrepreneurship and Management from the University of Rochester in New York and a Certificate in Climate and Renewable Energy Finance from the Frankfurt School of Finance and Management.",
  },
  {
    name: "Esemi Sunday",
    role: "Advisor",
    focus: "Financial Management & Regulatory Compliance",
    image: "/images/advisory/Esemi Sunday.png",
    bio: "Esemi Sunday is a Chartered Accountant and Finance Management Specialist with over 15 years of experience in financial management, audit, donor-funded programmes, grants management, and institutional capacity strengthening. He has held finance leadership and consulting roles with UNICEF Nigeria, Knowsoft Consulting Ltd., the Bank of Industry's BRAVE Women Programme, United Purpose, Concern Universal, and Okolo Okeji & Co., leading financial management system strengthening, donor assurance, financial reporting, procurement oversight, and compliance initiatives for projects funded by UNICEF, the European Union, USAID, UNOPS, We-Fi, and other development partners. He is recognized for developing innovative financial management solutions that enhance transparency, strengthen internal controls, improve donor compliance, and support sustainable organizational performance.",
  },
  {
    name: "Miguel Scholass",
    role: "Advisor",
    focus: "Institutional Strategy, Governance & Global Partnerships",
    image: "/images/advisory/Miguel Scholass.png",
    bio: "Miguel Scholass is President of Surinvest Ltda., a member of the Bretton Woods Committee for the World Bank and IMF, and a Trustee of the Global Legal Information Network Foundation. He was a former Executive Director of Transparency International and Director of Corporate and Budget Planning at the World Bank. He was also a member of the Steering Committee of the Caspian Sea Revenue Board, an Expert Advisory Board member of Dalberg Global Development Advisors, and CEO of their Latin America office in Chile. He has also served as Managing Partner of DamConsult Ltd. and External Reviewer of the World Bank Quality Assurance Panel.",
  },
];

const roleStyle: Record<string, { chip: string; ring: string }> = {
  Partner: { chip: "bg-primary text-white",   ring: "ring-primary/30"   },
  Head:    { chip: "bg-forest text-white",    ring: "ring-forest/30"    },
  Lead:    { chip: "bg-gold-dark text-white", ring: "ring-gold-dark/30" },
  Advisor: { chip: "bg-primary-deep text-white", ring: "ring-primary-deep/30" },
};

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cream pb-8 pt-20 md:pb-10 md:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-gold-light/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/6 blur-3xl" aria-hidden />
        <Container className="relative z-10">
          <Reveal direction="up">
            <p className="institutional-eyebrow">IQ Syndicate · The Team</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-charcoal">The People Behind IQ Syndicate</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-ink/72">
              A founding group united by a shared conviction, bringing together
              expertise in climate finance, platform engineering, private credit,
              market intelligence, and business development.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── Circle grid ── */}
      <section className="bg-white py-10 md:py-14">
        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {team.map((member, i) => {
              const { chip, ring } = roleStyle[member.role];
              const dirs = ["left","up","right","left","up","right"] as const;
              return (
                <Reveal key={member.name} direction={dirs[i]} delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    {/* Circle photo */}
                    <div className={`card-float relative h-44 w-44 overflow-hidden rounded-full ring-4 shadow-xl shadow-black/12 ${ring} md:h-52 md:w-52`}>
                      <Image
                        src={`/images/team/${member.name}.png`}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width:640px) 176px, 208px"
                      />
                    </div>

                    {/* Role chip */}
                    <span className={`mt-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${chip}`}>
                      {member.role}
                    </span>

                    {/* Name */}
                    <h3 className="mt-3 font-heading text-xl leading-tight text-charcoal md:text-2xl">
                      {member.name}
                    </h3>

                    {/* Focus */}
                    {member.focus && (
                      <p className="mt-1.5 max-w-[18ch] text-[12px] leading-5 text-ink/55">
                        {member.focus}
                      </p>
                    )}

                    <TeamBioDialog
                      name={member.name}
                      role={member.role}
                      focus={member.focus}
                      bio={member.bio}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Advisory board ── */}
      <section className="bg-cream py-12 md:py-16">
        <Container>
          <Reveal>
            <div className="mb-10 max-w-2xl md:mb-14">
              <p className="institutional-eyebrow">IQ Syndicate · Advisory Board</p>
              <h2 className="mt-4 max-w-xl text-charcoal">Experience that extends our reach</h2>
              <p className="mt-4 text-[15px] leading-7 text-ink/68">
                Trusted advisors bringing specialist insight across clean energy,
                financial management, governance, and global partnerships.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {advisoryBoard.map((member, i) => {
              const { chip, ring } = roleStyle[member.role];
              const dirs = ["left", "up", "right"] as const;
              return (
                <Reveal key={member.name} direction={dirs[i]} delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`card-float relative h-44 w-44 overflow-hidden rounded-full ring-4 shadow-xl shadow-black/12 ${ring} md:h-52 md:w-52`}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width:640px) 176px, 208px"
                      />
                    </div>

                    <span className={`mt-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${chip}`}>
                      {member.role}
                    </span>

                    <h3 className="mt-3 font-heading text-xl leading-tight text-charcoal md:text-2xl">
                      {member.name}
                    </h3>

                    <p className="mt-1.5 max-w-[18ch] text-[12px] leading-5 text-ink/55">
                      {member.focus}
                    </p>

                    <TeamBioDialog
                      name={member.name}
                      role={member.role}
                      focus={member.focus}
                      bio={member.bio}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream py-8 md:py-12">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Want to work with us?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  We are always open to conversations with climate founders,
                  institutional investors, and partner organisations.
                </p>
              </div>
              <Link href="/apply" className="group inline-flex shrink-0 items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light">
                Get in Touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}