import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const FramerMotion = ({
    shrink,
    children,
    type,
    overflowHidden,
    delay,
    width,
    yAxis = 75,
    xAxis = 75,
    animateOnces = true,
    duration = 0.5,
    className = "false",
    ...styling
}) => {
    const [ref, inView] = useInView({
        triggerOnce: animateOnces,
        threshold: 0.5, // Adjust the threshold as needed
    });

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        } else if (!animateOnces) {
            mainControls.start("hidden");
        }
    }, [inView, mainControls, animateOnces]);

    const topToBottom = {
        hidden: { opacity: 0, y: -yAxis },
        visible: { opacity: 1, y: 0 },
    };

    const bottomToTop = {
        hidden: { opacity: 0, y: yAxis },
        visible: { opacity: 1, y: 0 },
    };

    const rightToLeft = {
        hidden: { opacity: 0, x: xAxis },
        visible: { opacity: 1, x: 0 },
    };

    const leftToRight = {
        hidden: { opacity: 0, x: -xAxis },
        visible: { opacity: 1, x: 0 },
    };

    const popUp = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    const variants =
        type === "topToBottom"
            ? topToBottom
            : type === "bottomToTop"
                ? bottomToTop
                : type === "rightToLeft"
                    ? rightToLeft
                    : type === "leftToRight"
                        ? leftToRight
                        : type === "popup" ? popUp : {};

    return (
        <div
            className={className}
            ref={ref}
            style={{
                flexShrink: shrink ? "1" : "0",
                margin: "0 !important",
                padding: "0 !important",
                overflow: overflowHidden ? "hidden" : "none",
                width: width ? width : "auto",
                ...styling
            }}
        >
            <motion.div
                className={className}
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay ? delay : 0 }}
                style={{ display: "flex", width: width ? width : "auto", ...styling }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default FramerMotion;
