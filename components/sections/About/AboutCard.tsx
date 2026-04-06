"use client"

import { useRef, useState } from "react"
import type { Variants } from "motion/react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { IoCodeSlash, IoRocketOutline } from "react-icons/io5"
import { CardDataType } from "./CardData"
import { FiTarget } from "react-icons/fi"

interface AboutCardProps {
    data: CardDataType,
    variants: Variants
}

const iconMap = {
    code: IoCodeSlash,
    rocket: IoRocketOutline,
    target: FiTarget,
}

const gradientColorMap: Record<string, string> = {
    primary: "#00ff88",
    accent: "#00ffff",
}

const AboutCard = ({ data, variants }: AboutCardProps) => {
    const { icon, title, content, color } = data
    const Icon = iconMap[icon]

    const bgColorMap: Record<string, string> = {
        primary: "bg-primary/10",
        accent: "bg-accent/10",
    }
    const textColorMap: Record<string, string> = {
        primary: "text-primary",
        accent: "text-accent",
    }

    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Raw mouse position inside card
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Spring-smoothed mouse for the gradient (feels fluid, not jumpy)
    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    // Compose the border gradient string reactively
    const gradientColor = gradientColorMap[color]
    const borderGradient = useTransform(
        [springX, springY],
        ([x, y]) =>
            `radial-gradient(180px circle at ${x}px ${y}px, ${gradientColor}cc, transparent 70%)`
    )

    // Inner glow that follows cursor
    const innerGlow = useTransform(
        [springX, springY],
        ([x, y]) =>
            `radial-gradient(280px circle at ${x}px ${y}px, ${gradientColor}18, transparent 75%)`
    )

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }

    return (
        // ─── Outer wrapper: gradient border + scale ───────────────────────────
        <motion.div
            variants={variants}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative p-0.5 rounded-xl"
            style={{
                background: "rgba(255,255,255,0.08)",
            }}
        >
            {/* Cursor-follow gradient border layer */}
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{ background: borderGradient, opacity: isHovered ? 1 : 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <motion.div
                className="relative p-6 bg-[#0d0d0d] rounded-[calc(0.75rem-1px)] overflow-hidden"
                animate={{
                    boxShadow: isHovered
                        ? `0 0 28px 4px ${gradientColor}55, 0 8px 32px rgba(0,0,0,0.35)`
                        : "0 2px 12px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >

                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-[inherit]"
                    style={{ background: innerGlow }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                <div className="flex items-start gap-4 relative z-10">
                    {/* ─── Icon: springs & pops independently ─────────────── */}
                    <motion.div
                        className={`p-3 ${bgColorMap[color]} rounded-lg shrink-0`}
                        // Bouncy spring pop — independent from card scale
                        animate={
                            isHovered
                                ? { scale: 1.2, rotate: -6 }
                                : { scale: 1, rotate: 0 }
                        }
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 12,
                        }}
                        style={{
                            boxShadow: isHovered
                                ? `0 0 16px 3px ${gradientColor}66`
                                : "none",
                        }}
                    >
                        <Icon
                            className={textColorMap[color]}
                            size={28}
                            style={{
                                filter: isHovered
                                    ? `drop-shadow(0 0 6px ${gradientColor})`
                                    : "none",
                                transition: "filter 0.3s ease",
                            }}
                        />
                    </motion.div>

                    {/* Text */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-400">{content}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AboutCard