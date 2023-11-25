import React from "react";

const Page = () => {
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
                            fontSize: "200px",
                            marginBottom: "20px",
                            fontFamily: "Kanit",
                            color: "white",
                            textAlign: "center",
                            
                        }}
                    >
                         tokenomics soon.
                    </h1>
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
                        fontSize: "200px",
                        marginBottom: "20px",
                        fontFamily: "Kanit",
                        color: "white",
                    }}
                >
                    tokenomics soon.
                </h1>
                  </div>
          
        );
    };

    // Check if the viewport width is less than or equal to 768px (mobile view)
    const isMobileView = window.innerWidth <= 768;

    return isMobileView ? renderMobileView() : renderDesktopView();
};

export default Page;
