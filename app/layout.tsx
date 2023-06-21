import "./globals.css";

import { Metadata } from "next";

import Header from "@/components/Header";


export const metadata: Metadata = {
  title: {
    default: "AstroByte",
    template: "%s | AstroByte",
  },
  description: "AstroByte is a platform that provides access to NASA news and is designed to combat environmental pollution. By offering up-to-date information on space exploration, observations, discoveries, cosmic events, and space research, Astro",
  openGraph: {
    title: "AstroByte",
    description: "AstroByte is a platform that provides access to NASA news and is designed to combat environmental pollution. By offering up-to-date information on space exploration, observations, discoveries, cosmic events, and space research, Astro",
    url: "",
    siteName: "AstroByte",
    images: [
      {
        url: "/favicon.png",
        alt: "AstroByte",
      },
    ],
    locale: "tr-TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
