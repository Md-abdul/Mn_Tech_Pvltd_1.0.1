import React from "react";
import logo from "../assets/Plainview Marketing-4.png";

const WhyPrimeNova = () => {
  const features = [
    {
      number: "01",
      title: "Future Oriented Training & Service",
    },
    {
      number: "02",
      title: "Managed Services",
      highlight: true,
    },
    {
      number: "03",
      title: "Time Frame is More Important to us",
    },
  ];

  return (
    <section className="w-full bg-[#efefef]">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-14">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
    
    {/* Left Heading */}
    <div className="text-center md:text-left">
      <h1 className="text-[#0b1c52] text-4xl md:text-6xl font-light leading-tight uppercase tracking-wide">
        Why Prime Nova
        <br />
        Consulting
      </h1>
    </div>

    {/* Right Logo */}
    <div className="flex justify-center md:justify-end">
      <img
        src={logo}
        alt="Prime Nova Logo"
        className="w-[220px] md:w-[300px] object-contain"
      />
    </div>
  </div>
</div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className={`min-h-[220px] px-10 py-12 flex flex-col items-center justify-center text-center ${
              index === 1 ? "bg-[#000d4d]" : "bg-[#071b5c]"
            }`}
          >
            
            {/* Number Circle */}
            <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center text-[#00154d] text-xl font-medium mb-8">
              {item.number}
            </div>

            {/* Text */}
            <h3
              className={`text-lg md:text-2xl font-light leading-relaxed max-w-[240px] ${
                item.highlight ? "text-cyan-400" : "text-white"
              }`}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPrimeNova;