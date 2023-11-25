import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "../styles/AnimatedParagraph.css";

const AnimatedParagraph = ({ text, index }) => {
    const paragraphRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        setIsVisible(isVisible);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, index * 2000); // Delay appearance based on the paragraph index

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        document.body.style.overflow = "hidden"; // Disable scrolling initially

        return () => {
            document.body.style.overflow = "auto"; // Re-enable scrolling when component is unmounted
        };
    }, []);

    return (
        <ScrollTrigger onEnter={handleVisibilityChange}>
            <p
                ref={paragraphRef}
                className={`animated-paragraph ${
                    isVisible ? "is-visible" : ""
                }`}
            >
                {text}
            </p>
        </ScrollTrigger>
    );
};

export default AnimatedParagraph;
