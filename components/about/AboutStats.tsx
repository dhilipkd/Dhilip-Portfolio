"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "10+",
        label: "Projects",
    },
    {
        value: "15+",
        label: "Technologies",
    },
    {
        value: "100%",
        label: "Dedication",
    },
    {
        value: "24/7",
        label: "Learning",
    },
];

export default function AboutStats() {
    return (
        <motion.div
            className="about-stats-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            {stats.map((item) => (
                <div
                    key={item.label}
                    className="about-stat-item"
                >
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                </div>
            ))}
        </motion.div>
    );
}