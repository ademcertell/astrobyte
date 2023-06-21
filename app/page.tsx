import { Metadata } from "next";

import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "AstroByte",
  description: "AstroByte is a platform that provides access to NASA news and is designed to combat environmental pollution. By offering up-to-date information on space exploration, observations, discoveries, cosmic events, and space research, Astro",
};


export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
