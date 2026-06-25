"use client";

import { motion } from "framer-motion";
import { Laptop2, Trophy, Code2 } from "lucide-react";

const stats = [
    {
        icon: Laptop2,
        value: "4+",
        label: "Projects",
    },
    {
        icon: Code2,
        value: "10+",
        label: "Technologies",
    },
    {
        icon: Trophy,
        value: "100%",
        label: "Dedication",
    },
];

export default function AboutStats() {
    return (
        <motion.div
            className="about-stats-card mt-15 py-6 px-5 rounded-[28px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            {stats.map((item) => {
                const Icon = item.icon;
                return(
                <div
                    key={item.label}
                    className="about-stat-item"
                >
                    <div className="about-stat-icon">
                        <Icon size={38} />
                    </div>
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                </div>
                )}
            )}
        </motion.div>
    );
}