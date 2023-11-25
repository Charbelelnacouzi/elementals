import React from "react";

const Page5 = () => {
    const renderDesktopView = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(45deg, #FFA500, #FF4500)",
                    padding: "20px",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/banner3.jpeg"
                        alt="Background"
                        style={{
                            borderRadius: "10px",
                            width: "60%",
                            borderColor: "white",
                            borderWidth: "2px",
                            borderStyle: "solid",
                        }}
                    />
                </div>
                <div style={{ padding: "40px" }}>
                    <h1
                        style={{
                            fontSize: "2rem",
                            marginBottom: "20px",
                            color: "white",
                            textAlign: "center",
                            fontFamily: "Kanit",
                        }}
                    >
                        be part of the best community on solana
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href="https://discord.com/invite/elementals"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "5rem" }}
                        >
                            <img
                                src="/icons/discord.png"
                                width="40px"
                                alt="Discord"
                            />
                        </a>
                        <a
                            href="https://twitter.com/Elementals_NFT_"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "4rem" }}
                        >
                            <img
                                src="/icons/twitter.png"
                                width="40px"
                                alt="Twitter"
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    const renderMobileView = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    background: "linear-gradient(45deg, #FFA500, #FF4500)",
                    padding: "20px",
                }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        marginBottom: "20px",
                        fontFamily: "Kanit",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    be part of the best community on solana
                </h1>
                <div style={{ paddingBottom: "2rem" }}>
                    {" "}
                    <a
                        href="https://discord.com/invite/elementals"
                        target="_blank"
                        style={{ paddingRight: "2rem" }}
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/icons/discord.png"
                            width="40px"
                            alt="Discord"
                        />
                    </a>
                    <a
                        href="https://twitter.com/Elementals_NFT_"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ paddingLeft: "2rem" }}
                    >
                        <img
                            src="/icons/twitter.png"
                            width="40px"
                            alt="Twitter"
                        />
                    </a>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/background.png"
                        alt="Background"
                        style={{
                            borderRadius: "10px",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                            borderColor: "white",
                            borderWidth: "2px",
                            borderStyle: "solid",
                        }}
                    />
                </div>
            </div>
        );
    };

    // Check if the viewport width is less than or equal to 768px (mobile view)
    const isMobileView = window.innerWidth <= 768;

    return isMobileView ? renderMobileView() : renderDesktopView();
};

export default Page5;
