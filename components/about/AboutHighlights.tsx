"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Rocket,
    UserRound,
} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "I write clean, maintainable and scalable code following best practices.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Focused on building fast, optimized and responsive applications.",
    },
    {
        icon: UserRound,
        title: "User Focused",
        description:
            "Creating intuitive UI/UX experiences that users enjoy using.",
    },
];

export default function AboutHighlights() {
    return (
        <div className="about-highlights">
            {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={item.title}
                        className="about-highlight-card"
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15,
                        }}
                    >
                        <div className="about-highlight-icon">
                            <Icon size={28} />
                        </div>

                        <h4 className="about-highlight-title">
                            {item.title}
                        </h4>

                        <p className="about-highlight-description">
                            {item.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}   