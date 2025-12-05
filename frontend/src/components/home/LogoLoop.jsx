import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

export default function LogoLoop({
    logos = [],
    speed = 100,
    direction = "left",
    logoHeight = 40,
    gap = 40,
    hoverSpeed = 0,
    scaleOnHover = false,
    fadeOut = false,
    fadeOutColor = "#060712",
    ariaLabel = "Logo marquee"
}) {
    const containerRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const x = useMotionValue(0);
    const controls = useAnimation();

    // Calculate total width of one set of logos
    useEffect(() => {
        if (containerRef.current) {
            // Measure roughly based on children or estimate
            // Ideally we measure the children. For now, let's just duplicate enough times to fill screen + buffer
        }
    }, [logos]);

    // Simple continuous loop using CSS or Framer
    // For robustness with "speed" prop, CSS animation is often smoother for simple marquees
    // But exact standard with props:

    const totalDuration = logos.length * 1000 / speed; // Rough estimate

    return (
        <div
            className="relative w-full overflow-hidden"
            aria-label={ariaLabel}
            role="region"
        >
            {fadeOut && (
                <>
                    <div
                        className="absolute left-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
                        style={{ background: `linear-gradient(to right, ${fadeOutColor}, transparent)` }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 z-10 w-20 pointer-events-none"
                        style={{ background: `linear-gradient(to left, ${fadeOutColor}, transparent)` }}
                    />
                </>
            )}

            <div className="flex" style={{ gap: `${gap}px` }}>
                <MarqueeContent
                    logos={logos}
                    speed={speed}
                    gap={gap}
                    direction={direction}
                    hoverSpeed={hoverSpeed}
                    scaleOnHover={scaleOnHover}
                />
                <MarqueeContent
                    logos={logos}
                    speed={speed}
                    gap={gap}
                    direction={direction}
                    hoverSpeed={hoverSpeed}
                    scaleOnHover={scaleOnHover}
                    ariaHidden
                />
                <MarqueeContent
                    logos={logos}
                    speed={speed}
                    gap={gap}
                    direction={direction}
                    hoverSpeed={hoverSpeed}
                    scaleOnHover={scaleOnHover}
                    ariaHidden
                />
            </div>
        </div>
    );
}

function MarqueeContent({ logos, speed, gap, direction, hoverSpeed, scaleOnHover, ariaHidden }) {
    // CSS-based marquee for smoothest performance
    // Speed prop: higher is faster.
    // If speed is 50, let's aim for ~30-40s duration for a typical screen?
    // Let's use a constant that gives reasonable seconds.
    const duration = 4000 / speed;

    return (
        <div
            className="flex items-center flex-shrink-0 animate-marquee-infinite"
            style={{
                gap: `${gap}px`,
                animationDuration: `${duration}s`,
                animationDirection: direction === 'right' ? 'reverse' : 'normal',
                paddingRight: `${gap}px`
            }}
            aria-hidden={ariaHidden}
        >
            {logos.map((logo, index) => (
                <a
                    key={index}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center text-slate-400 hover:text-white transition-colors ${scaleOnHover ? 'hover:scale-110 transition-transform duration-300' : ''}`}
                    title={logo.title}
                >
                    <div style={{ fontSize: '40px' }}> {/* matching typical size */}
                        {logo.node}
                    </div>
                </a>
            ))}
        </div>
    )
}
