import { Metadata } from "next";

import AstronomyCard from "@/components/Card/Astronomy";

export const metadata: Metadata = {
  title: "Astronomy",
  description: "daily space photos",
};

const Astronomy = () => {
  return (
    <>
      <div>
        <AstronomyCard />
      </div>
    </>
  );
};

export default Astronomy;
