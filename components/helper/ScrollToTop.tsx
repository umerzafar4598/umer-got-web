
"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            if (height <= 0) {
                setScroll(0);
                return;
            }
            const progress = (scrollTop / height) * 100;
            setScroll(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const radius = 24;
    const safeScroll = isNaN(scroll) ? 0 : scroll;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (safeScroll / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-primary shadow-lg cursor-pointer hover:scale-110 backdrop-blur-md bg-white/10 transition-all duration-300 ${scroll < 5 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            {/* SVG Progress Ring */}
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 60 60"
            >
                <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="gray"
                    strokeWidth="4"
                    fill="transparent"
                    opacity="0.2"
                />
                <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="#00ff88"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>

            {/* Arrow */}
            <span className="text-lg z-10 hover:-translate-y-1 transition-all duration-150">
                <FaArrowUp size={16} />
            </span>
        </button>
    );
}