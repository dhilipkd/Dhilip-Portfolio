"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronDown,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import HeroButtons from "./HeroButtons";
import heroTerminalImage from "../../public/hero-terminal-image.png";
import "../../styles/Hero.css";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/dhilip",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/dhilip",
    label: "LinkedIn",
  },
  {
    icon: MdEmail,
    href: "mailto:dhilip@example.com",
    label: "Email",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"

    >
      {/* Left Glow */}
      <div className="hero-glow-left" />
      {/* Right Glow */}
      <div className="hero-glow-right" />

      <div className="hero-inner">

        {/* Hero Grid */}
        <div className="hero-grid">

          {/* Social Sidebar */}
          <div className="hero-social-col">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label={label}
              >
                <Icon size={15} />
              </Link>
            ))}
            <div className="social-divider-line" />
          </div>

          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="hero-badge">
              👋 Hi there, I&apos;m
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Dhi<span>lip</span>
              <span className="hero-title-cursor" aria-hidden="true" />
            </h1>

            {/* Role */}
            <h2 className="hero-subtitle">
              Mobile &amp; Full Stack{" "}
              <span>Developer</span>
            </h2>

            {/* Description */}
            <p className="hero-description">
              Aspiring Mobile & Full Stack Developer with a passion
              for creating modern applications. Constantly learning,
              building projects, and exploring new technologies to
              solve real-world problems.
            </p>

            {/* Buttons */}
            <HeroButtons />
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="hero-image-wrapper"
          >
            <Image
              src={heroTerminalImage}
              alt="Hero Terminal Image"
              width={650}
              height={650}
              className="hero-image"
              priority
            />
          </motion.div>

        </div>

        {/* Scroll Hint */}
        <div className="hero-scroll-hint">
          <div className="scroll-circle">
            <ChevronDown size={12} />
          </div>
          Scroll Down
        </div>

      </div>
    </section >
  );
}
