"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.95)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50 cursor-pointer block w-full h-full",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "#"}
    >
      {/* 3D Container - Reduced interference */}
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0)",
        }}
        className="absolute inset-0"
      >
        <div
          style={{ transform }}
          className="absolute inset-0 transition-transform duration-700"
        >
          {children}
        </div>
      </div>

      {/* Original Aceternity PinPerspective (glowing rings + lines) */}
      <PinPerspective title={title} />
    </a>
  );
};

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="relative w-full h-full -mt-10">
        {/* Floating Title */}
        {title && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="relative flex items-center justify-center rounded-full bg-zinc-950 px-5 py-1.5 text-xs font-bold ring-1 ring-white/10">
              {title}
              <span className="absolute -bottom-px left-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            </div>
          </div>
        )}

        {/* Glowing Rings */}
        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6, 0], scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay: 0 }}
            className="absolute left-1/2 top-1/2 h-44 w-44 rounded-full bg-sky-500/[0.12] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6, 0], scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute left-1/2 top-1/2 h-44 w-44 rounded-full bg-sky-500/[0.12] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.6, 0], scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, delay: 4 }}
            className="absolute left-1/2 top-1/2 h-44 w-44 rounded-full bg-sky-500/[0.12] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>

        {/* Glow Lines */}
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-3 w-px h-16 group-hover/pin:h-40 blur-sm" />
        <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-3 w-px h-16 group-hover/pin:h-40" />
        <motion.div className="absolute right-1/2 translate-x-1.5 bottom-1/2 bg-cyan-400 w-1 h-1 rounded-full blur-sm" />
        <motion.div className="absolute right-1/2 bottom-1/2 bg-cyan-300 w-0.5 h-0.5 rounded-full" />
      </div>
    </motion.div>
  );
};