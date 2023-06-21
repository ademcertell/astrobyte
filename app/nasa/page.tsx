import { Metadata } from "next";

import NasaCard from "@/components/Card/Nasa";

export const metadata: Metadata = {
  title: "Nasa",
  description: "I am a structure that holds together Nasa's Decrepit resources",
};

export default function Home() {
  return (
    <section>
      <NasaCard />
    </section>
  );
}
