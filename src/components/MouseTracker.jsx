import React, { useState, useEffect } from "react";

const MouseTracker = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleButtonClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h2>
                Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}
            </h2>
            <h2>Button Clicks: {clickCount}</h2>
            <button
                className="w-28 p-2 rounded bg-slate-600 text-white"
                onClick={handleButtonClick}
            >
                Click Me!
            </button>
        </div>
    );
};

export default MouseTracker;
