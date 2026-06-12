"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "primereact/button";

import {
  Download,
  Menu,
} from "lucide-react";

import profile from "../../public/profile.png"

import "../../styles/Navbar.css";

const navLinks = [
  {
    label: "Hero",
    href: "#hero",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-2 md:top-4 left-0 right-0 z-50 px-4">
      <div className="section-container">
        <nav className="navbar h-16 lg:h-20 rounded-2xl lg:rounded-[28px] px-4 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={profile}
              alt="Profile"
              width={42}
              height={42}
              className="logo-image rounded-full object-cover"
            />

            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
              Dhilip
            </h3>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`nav-link text-md font-medium ${activeSection === item.href.replace("#", "") ? "active-link" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Button className="resume-button">
              <span className="flex items-center">
                <span className="hidden sm:inline">
                  Resume
                </span>

                <Download size={16} className="sm:ml-2" />
              </span>
            </Button>

            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="mobile-menu-btn"
            >
              <Menu size={20} />
            </button>
          </div>

        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 navbar rounded-2xl p-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={`block py-2 nav-link ${activeSection === item.href.replace("#", "") ? "active-link" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}