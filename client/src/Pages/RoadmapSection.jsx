import React from "react";

const RoadmapSection = () => {
  const roadmapData = [
    {
      id: "1",
      text: `First get consultations on requirements, timeframe, cost involvement, required key features, etc.`,
    },
    {
      id: "2",
      text: `Switch your dreams or imaginations into reality through different processes like IT languages, structure, development, quality testing, designing, etc.`,
    },
    {
      id: "3",
      text: `Feel the new world with the existence of your dreams and create a revolution.`,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-r from-cyan-500 via-sky-700 to-blue-950 border-[6px] md:border-[8px] border-cyan-300 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-light tracking-wide uppercase leading-tight">
          Road Map Of Future
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 max-w-7xl mx-auto">
        {roadmapData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center px-4 sm:px-6"
          >
            {/* Quote */}
            <div className="text-cyan-300 text-6xl md:text-7xl font-bold leading-none mb-4">
              “
            </div>

            {/* Text */}
            <p className="text-cyan-100 text-base sm:text-lg leading-relaxed font-light max-w-sm">
              {item.text}
            </p>

            {/* Number */}
            <span className="mt-8 text-cyan-300 text-3xl md:text-4xl font-semibold">
              {item.id}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapSection;