"use client";

import AboutImageCard from "../about/AboutImage";
import AboutContent from "../about/AboutContent";
import AboutHighlights from "../about/AboutHighlights";
import AboutStats from "../about/AboutStats";

import "../../styles/About.css";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="section-container">

        {/* Top Section */}
        <div className="about-grid">

          {/* Left Side */}
          <AboutImageCard />

          {/* Right Side */}
          <div className="about-right">
            <AboutContent />
            <AboutHighlights />
          </div>

        </div>

        {/* Bottom Stats */}
        <AboutStats />

      </div>
    </section>
  );
}