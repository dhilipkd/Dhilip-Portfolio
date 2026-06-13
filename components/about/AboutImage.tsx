"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import profileImage from "../../public/about-profile.png";

export default function AboutImage() {
    return (
        <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Floating Orbit */}
            <div className="about-orbit">
                <span className="orbit-dot orbit-dot-1" />
                <span className="orbit-dot orbit-dot-2" />
            </div>

            {/* Experience Card */}
            <div className="about-floating-card top-card">
                <span className="card-number">Mobile &</span>
                <span className="card-label">
                    Full Stack Developer
                </span>
            </div>

            {/* Available Card */}
            <div className="about-floating-card bottom-card">
                <div className="available-dot" />
                <div>
                    <h4>Available</h4>
                    <p>For opportunities</p>
                </div>
            </div>

            {/* Image */}
            <div className="about-image-card">
                <Image
                    src={profileImage}
                    alt="Dhilip"
                    className="about-profile-image"
                    priority
                />
            </div>
        </motion.div>
    );
}