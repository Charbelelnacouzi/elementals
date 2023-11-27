import React, { useState, useEffect } from "react";
import "./styles/ScrollAnimation.css";

const Page1 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize(); // Check on initial render

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                minHeight: "100vh",
                background: "linear-gradient(45deg, #FFA500, #FF4500)",
            }}
        >
            {!isMobile ? (
                <>
                    <div
                        style={{
                            flex: "1 0 calc(50% - 20%)",
                            backgroundImage: 'url("/image1.png")',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "right",
                            zIndex: 1,
                        }}
                    ></div>
                    <div style={{ flex: "1 0 40%" }}></div>
                    <div
                        style={{
                            flex: "1 0 calc(50% - 20%)",
                            backgroundImage: 'url("/image6.jpg")',
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                            zIndex: 1,
                        }}
                    ></div>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                        }}
                    >
                        <img src="/banner2.png" width="600vw" />
                        <div
                            className="icon-scroll"
                            style={{ marginTop: "15rem" }}
                        ></div>
                    </div>
                </>
            ) : (
                <>
                    
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 2,
                        }}
                    >
                        <img src="/banner2.png" width="300vw" />
                        <div
                            className="icon-scroll"
                            style={{ marginTop: "15rem" }}
                        ></div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Page1;
