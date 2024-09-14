import React, { useState, useEffect } from "react";

const WidthTracker = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(`Window Width: ${windowWidth}px`);
    }, [windowWidth]);

    return <></>;
};

export default WidthTracker;
