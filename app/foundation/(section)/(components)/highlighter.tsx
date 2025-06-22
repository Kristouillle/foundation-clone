import { motion } from "framer-motion";
import React from "react";
import {cn} from "@/lib/utils";

interface HighlighterProps {
    text: string;
    color: 'blue' | 'green' | 'orange';
    animate: boolean;
}

const Highlighter: React.FC<HighlighterProps> = ({ text, color, animate }) => {
    // Dynamic background gradient based on color prop
    // Add colors if needed
    const gradientClasses = {
        blue: "bg-highlight-blue",
        green: "bg-highlight-green",
        orange: "bg-highlight-orange",
    };
    

    return (
        <span className="relative inline-block overflow-hidden">
            {/* Background highlight animation */}
            <motion.span
                className={cn("absolute inset-0", gradientClasses[color])}
                initial={{ left: '-100%' }} // Starts hidden to the left
                animate={animate ? { left: 0 } : { left: '-100%' }} // Animate when `animate` is true
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Visible text */}
            <span className="relative z-10 px-1">
                {text}
            </span>
        </span>
    );
};

export default Highlighter;