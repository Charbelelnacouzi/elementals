import React from "react";

const Page2 = () => {
    const renderDesktopView = () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #FFA500, #FF4500)",
                    padding: "20px",
                }}
            >
                <div style={{ flex: "1", padding: "40px" }}>
                    <h1
                        style={{
                            fontSize: "2rem",
                            marginBottom: "20px",
                            fontFamily: "Kanit",
                            color: "white",
                            textAlign: "center",
                            borderRight: "3px solid white",
                        }}
                    >
                        The World, Reborn
                    </h1>

                    <div
                        style={{
                            fontSize: "1.2rem",
                            lineHeight: "1.6",
                            color: "white",
                            fontFamily: "Kanit",
                            borderRight: "3px solid white",
                            paddingRight: "1rem",
                        }}
                    >
                        <p>
                            After the Great Unraveling, Cryptoria experienced
                            utter destruction. But hope was restored with the
                            appearance of the Elementals, who represented the
                            elements of fire, air, stone, water, wind, gold,
                            glass, and the galaxy.
                        </p>
                        <p>
                            They supervised the rebuilding operations, fostered
                            resiliency, and safeguarded the surviving thanks to
                            their abilities. People found comfort and used their
                            own elemental talents in the sanctuaries that the
                            Elementals created after forming a relationship and
                            establishing themselves.
                        </p>
                        <p>
                            Together, they transformed Cryptoria into a vibrant
                            haven of invention and creativity, serving as an
                            inspiration for other realms to do the same.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        flex: "1",
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

    const renderMobileView = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, #FFA500, #FF4500)",
                    padding: "20px",
                }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        marginBottom: "20px",
                        fontFamily: "Kanit",
                        color: "white",
                    }}
                >
                    The World, Reborn
                </h1>
                <div
                    style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.6",
                        color: "white",
                        fontFamily: "Kanit",
                        paddingRight: "1rem",
                        height: "70vh",
                        overflowY: "auto",
                        marginBottom: "3rem",
                    }}
                >
                    <p>
                        After the Great Unraveling, Cryptoria experienced utter
                        destruction. But hope was restored with the appearance
                        of the Elementals, who represented the elements of fire,
                        air, stone, water, wind, gold, glass, and the galaxy.
                    </p>
                    <p>
                        They supervised the rebuilding operations, fostered
                        resiliency, and safeguarded the surviving thanks to
                        their abilities. People found comfort and used their own
                        elemental talents in the sanctuaries that the Elementals
                        created after forming a relationship and establishing
                        themselves.
                    </p>
                    <p>
                        Together, they transformed Cryptoria into a vibrant
                        haven of invention and creativity, serving as an
                        inspiration for other realms to do the same.
                    </p>
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

export default Page2;
