import React from "react";
// import img from "next/img";
import img1 from "../assets/scr1.png";
import img2 from "../assets/scr2.png";
import RoadmapSection from "./RoadmapSection";

const ServicesLandingPage = () => {
  return (
    <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Trade Services Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            INNOVATION
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Empowering Businesses Through Technology & Innovation
          </h2>
        </div>

        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>

      {/* <PassiveIncomePoster/> */}
    </section>
  );
};

export default ServicesLandingPage;
