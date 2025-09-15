import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import VoiceflowChatbot from "@/components/ui/Voiceflowchatbot";
import Footer from "@/components/ui/Footer";
import { NavBar } from "@/components/ui/Navbar";

// LocalBusiness Schema
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LaunchLabs",
  "url": "https://launchlabs.no",
  "telephone": "+47 930 69 091",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Niels Juels gate 70b",
    "addressLocality": "Oslo",
    "addressCountry": "NO"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};

// Website Schema med søkefunksjon
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://launchlabs.no",
  "name": "LaunchLabs",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://launchlabs.no/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Organization Schema med sosiale lenker
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LaunchLabs",
  "url": "https://launchlabs.no",
  "logo": "https://launchlabs.no/logo.png",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://launchlabs.no"),
  title: "LaunchLabs – Startup Builder og Fundraising-partner i Norge",
  description:
    "LaunchLabs er en startup builder og fundraising-partner i Oslo, Norge. Vi hjelper gründere med å vokse gjennom venture building, innovasjon og tilgang til investorer.",
  keywords: [
    "launchlab",
    "startup builder",
    "launchlabs",
    "fundraising i Norge",
    "venture builder Oslo",
    "startup akselerator Norge"
  ],
  openGraph: {
    title: "LaunchLabs – Startup Builder og Fundraising-partner i Norge",
    description:
      "Vi hjelper startups i Norge med fundraising, venture building og innovasjonsstrategier.",
    url: "https://launchlabs.no",
    siteName: "LaunchLabs",
    locale: "no_NO",
    type: "website",
    images: [
      {
        url: "https://launchlabs.no/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LaunchLabs – Startup Builder og Fundraising-partner i Norge"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchLabs – Startup Builder og Fundraising-partner i Norge",
    description:
      "LaunchLabs hjelper startups i Oslo og resten av Norge med kapitalinnhenting og vekst gjennom innovasjon.",
    images: ["https://launchlabs.no/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="geo.region" content="NO" />
        <meta name="geo.placename" content="Oslo" />
        <link rel="canonical" href="https://launchlabs.no" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFA500" />

        {/* Strukturert data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
      >
        <NavBar />
        {children}
        <VoiceflowChatbot />
        <Footer />
      </body>
    </html>
  );
}
