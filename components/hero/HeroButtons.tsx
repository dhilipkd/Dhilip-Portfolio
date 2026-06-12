"use client";

import { Button } from "primereact/button";
import { ArrowRight, Send } from "lucide-react";

export default function HeroButtons() {
    return (
        <div className="hero-btn-group">

            {/* Primary Button */}
            <Button className="hero-primary-btn">
                <span className="flex items-center gap-2">
                    View My Work
                    <ArrowRight size={18} />
                </span>
            </Button>

            {/* Secondary Button */}
            <Button outlined className="hero-secondary-btn">
                <span className="flex items-center gap-2">
                    Hiring Me
                    <Send size={18} />
                </span>
            </Button>

        </div>
    );
}
