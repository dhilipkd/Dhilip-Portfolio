"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Section Label */}
            <div className="about-label">
                <span className="about-label-line" />
                GET TO KNOW ME
            </div>

            {/* Title */}
            <h2 className="about-title">
                About <span>Me</span>
            </h2>

            <div className="about-title-underline" />

            {/* Description */}
            <p className="about-description">
                I&apos;m <span>Dhilip</span>, an aspiring Mobile &
                Full Stack Developer passionate about building modern,
                scalable, and user-friendly applications.
            </p>

            <p className="about-description">
                I enjoy transforming ideas into real-world solutions
                through clean code, intuitive UI/UX, and continuous
                learning. My focus is on creating meaningful digital
                experiences that solve practical problems and deliver
                value to users.
            </p>

            <p className="about-description">
                Currently exploring advanced web and mobile
                technologies while building projects that strengthen
                my development skills and industry knowledge.
            </p>
        </motion.div>
    );
}