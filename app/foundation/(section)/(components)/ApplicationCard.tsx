import React, { useState, useRef } from 'react';

interface ApplicationCardProps {
    number: string;
    title: string;
    content: any;
    svgTopLeft?: React.ReactNode;
    svgTopRight?: React.ReactNode;
    svgBottomLeft?: React.ReactNode;
    svgBottomRight?: React.ReactNode;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({
    number,
    title,
    content,
    svgTopLeft,
    svgTopRight,
    svgBottomLeft,
    svgBottomRight,
}) => {
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const smoothTilt = (newTiltX: number, newTiltY: number) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            setTiltX((prevTiltX) => prevTiltX + (newTiltX - prevTiltX) * 0.1);
            setTiltY((prevTiltY) => prevTiltY + (newTiltY - prevTiltY) * 0.1);
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const { left, top, width, height } = card.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Adding some padding around the card to detect mouse near the edges
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const sensitivity = 0.8; // You can tweak the sensitivity

        const tiltX = (deltaY / (height * sensitivity)) * 20; // Number at the end equals maximum tilt degree, when sensitivity == 1
        const tiltY = (deltaX / (width * sensitivity)) * -20; // ^

        smoothTilt(tiltX*-1, tiltY*-1);
    };

    const handleMouseLeave = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        setTiltX(0);
        setTiltY(0);
    };

    return (
        <div
            ref={cardRef}
            className="bg-white p-6 rounded-lg shadow-lg max-w-[300px] min-h-[310px] max-h-[310px] mt-8 mb-auto relative z-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                transition: 'transform 0.1s ease-out', // Adjust transition duration
            }}
        >
            {/* Wrapper for the number with overflow hidden */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <span className="absolute top-0 left-[-20px] text-black opacity-20 text-9xl font-bold">
                    {number}
                </span>
            </div>

            <h2 className="text-xl font-bold mt-12 mb-4">{title}</h2>
            <p>{content}</p>

            {/* Optional SVGs */}
            {svgTopLeft && (
                <div className="absolute top-[-30px] left-[-30px] z-20">
                    {svgTopLeft}
                </div>
            )}
            {svgTopRight && (
                <div className="absolute top-[-30px] right-[-30px] z-20">
                    {svgTopRight}
                </div>
            )}
            {svgBottomLeft && (
                <div className="absolute bottom-[-50px] left-[-50px] z-20">
                    {svgBottomLeft}
                </div>
            )}
            {svgBottomRight && (
                <div className="absolute bottom-[-30px] right-[-30px] z-20">
                    {svgBottomRight}
                </div>
            )}
        </div>
    );
};

export default ApplicationCard;
