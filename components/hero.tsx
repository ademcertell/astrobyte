import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <h1 className="font-bold"></h1>
      <section className="mt-10">
        <h1 className="text-black font-bold text-xl">AstroByte</h1>
        <p className="text-black/80 mb-1.5">
          AstroByte is a structure that provides access to space news and is
          designed to combat environmental pollution. Recognizing the limited
          natural resources of our planet and the global issue of environmental
          pollution, AstroByte offers an innovative approach to both promoting
          information sharing and preserving the sustainability of our planet.
          AstroByte provides users with access to space news, offering them
          up-to-date information on space exploration, observations, discovered
          planets, cosmic events, and space research. Current and comprehensive
          information about discoveries and scientific advancements in space is
          shared with users through original content provided by AstroByte. In
          this way, it increases interest in space exploration and supports
          scientific awareness in this field. AstroByte also focuses on
          combating environmental pollution by embracing sustainability
          principles. It draws attention to environmental issues on Earth and
          provides solution-oriented suggestions using its capabilities for
          space observation and data collection. The data obtained from space
          enables the sharing of scientifically-based information on topics such
          as climate change, deforestation, water pollution, and environmental
          impacts. AstroByte offers information to its users on steps that can
          be taken and innovative solutions to protect the sustainability of our
          planet.
        </p>
        <div className="mt-5">
          <Image
            src="/milky-way.gif"
            width={500}
            height={500}
            alt="Milky Way Galaxy"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-black font-bold text-xl">Contact</h1>
          <div className="flex space-x-4 mt-1.5">
            <Link href="https://github.com/maahess" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8 w-8 text-black"
              >
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                  className="text-black"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
