import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SplashScreen.css";

const SplashScreen = () => {
    const [text, setText] = useState(""); // Initialize text as empty
    const fullText = "FoodPath®"; // The text to animate
    const [animationComplete, setAnimationComplete] = useState(false); // Track animation state

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval); // Stop the interval when done
                setAnimationComplete(true); // Mark animation as complete
            }
        }, 150); // Adjust speed as needed

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [fullText]);

    return (
        <motion.div
            className="splash-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="splash-text"
                initial={{ scale: 1, opacity: 1, x: 0, y: 0 }} // Start with large scale and original position
                animate={{
                    scale: animationComplete ? 0.5 : 1, // Shrink after animation completes
                    // opacity: animationComplete ? 0 : 1, // Fade out after animation completes
                    x: animationComplete ? -610 : 0, // Move towards top-left corner position
                    y: animationComplete ? -310 : 0,  // Move vertically to the header position
                    fontSize: animationComplete ? "48px" : "120px",
                }}
                transition={{
                    type: "tween",
                    stiffness: 100,
                    damping: 25,
                    duration: 1,
                }}
            >
                {text.slice(0, -1)}<sup className="superscript">®</sup>
            </motion.h1>
        </motion.div>
    );
};

export default SplashScreen;
