"use client";

import { useEffect, useState } from "react";

const AstronomyCard: React.FC = () => {
  const [newsData, setNewsData] = useState<any>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_ASTRONOMY_API}`
      );
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.log("Haberler alınamadı. Hata:", error);
    }
  };

  return (
    <section className="mt-5" id="newsSection">
      {newsData && (
        <article>
          <h3 className="text-black font-semibold text-lg">{newsData.title}</h3>
          <div className="flex items-center space-x-2 text-base text-gray-500 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <p>{newsData.date}</p>
          </div>
          <div className="block overflow-hidden saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100">
            <img src={newsData.hdurl} alt={newsData.title} />
          </div>
          <p className="text-black/70 mb-5 mt-5">{newsData.explanation}</p>
        </article>
      )}
    </section>
  );
};

export default AstronomyCard;
