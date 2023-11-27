import React from "react";

const Page6 = () => {
    const renderDesktopView = () => {
        return (
            <div
                    style={{
                        textAlign: "center",
                        padding: "1rem",
                         height: "140vh",
                        fontSize: "21px"
                    }}
                >
                <div style={{ flex: "1", padding: "40px" }}>
                    <h1
                        style={{
                            fontSize: "40px",
                            fontFamily: "Kanit",
                            color: "white",
                            textAlign: "center",
                            
                        }}
                    >
                         THE ELEMENT AIRDROP.
                    </h1>
                    </div>
                    <div
                            style={{
                                fontFamily: "Kanit",
                                fontWeight: "bolder",
                                padding: "1rem",
                                color: "white",
                            }}
                        >
                    

                    <p style={{ textAlign: "left",
                        fontSize: "21px" }}>
                        🔷About the elements </p>

                            <li style={{ textAlign: "left" }}>
                            We have 3 elements to be airdropped fire, water and earth.</li>
                            <li style={{ textAlign: "left" }}>Total supply of 666 (222 of each)</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷What's the benefits.</p>

                                <li style={{ textAlign: "left" }}>Fire element will boost your $ELMNT earnings by x2 meaning doubling your rewards.</li>

                                <li style={{ textAlign: "left" }}>Water element will cut your tweet time in half meaning you'll be able to tweet twice per day instead of once similar to fire but the catch you can have both and tweet twice with double rewards.</li>
                                
                                <li style={{ textAlign: "left" }}>Earth element will boost your $ELMNT staking rewards by x2.</li>
                


                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷How to receive this airdrop.</p>
                                      <li style={{ textAlign: "left" }}>60% will go towards presales buyers.</li>
                                      <li style={{ textAlign: "left" }}>40% for top points on our tweet to earn and discord points leaderboard.</li>
                                      <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>
                            The elements airdrop is 100% random you can receive any of them, Only future holders will be able to benefit from their rewards.
                            </p>
                        </div>
            </div>
        );
    };

    const renderMobileView = () => {
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
                        textAlign: "center",
                        padding: "1rem",
                        height: "140vh",
                    }}
                >
                <div style={{ flex: "1", padding: "40px" }}>
                    <h1
                        style={{
                            fontSize: "40px",
                            fontFamily: "Kanit",
                            color: "white",
                            textAlign: "center",
                            
                        }}
                    >
                         THE ELEMENT AIRDROP.
                    </h1>
                    </div>
                    <div
                            style={{
                                fontFamily: "Kanit",
                                fontWeight: "bolder",
                                padding: "1rem",
                                color: "white",
                            }}
                        >
                    

                    <p style={{ textAlign: "left",
                        fontSize: "21px" }}>
                           🔷About the elements </p>

                            <li style={{ textAlign: "left" }}>
                            We have 3 elements to be airdropped fire, water and earth.</li>
                            <li style={{ textAlign: "left" }}>Total supply of 666 (222 of each)</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷What's the benefits.</p>

                                <li style={{ textAlign: "left" }}>Fire element will boost your $ELMNT earnings by x2 meaning doubling your rewards.</li>

                                <li style={{ textAlign: "left" }}>Water element will cut your tweet time in half meaning you'll be able to tweet twice per day instead of once similar to fire but the catch you can have both and tweet twice with double rewards.</li>
                                
                                <li style={{ textAlign: "left" }}>Earth element will boost your $ELMNT staking rewards by x2.</li>
                


                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷How to receive this airdrop.</p>
                                      <li style={{ textAlign: "left" }}>60% will go towards presales buyers.</li>
                                      <li style={{ textAlign: "left" }}>40% for top points on our tweet to earn and discord points leaderboard.</li>
                                      <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>
                            The elements airdrop is 100% random you can receive any of them, Only future holders will be able to benefit from their rewards.
                            </p>
                        </div>
            </div>
        );
    };

    // Check if the viewport width is less than or equal to 768px (mobile view)
    const isMobileView = window.innerWidth <= 768;

    return isMobileView ? renderMobileView() : renderDesktopView();
};

export default Page6;
