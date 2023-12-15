import React, { useState, useEffect } from "react";
const Page6 = () => {
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
        <div>
            {isMobile ? (
                <div
                    style={{
                        textAlign: "center",
                        padding: "1rem",
                        height: "140vh",
                        color: "white",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "Kanit",
                            fontSize: "25px",
                            margin: "1rem 0",
                            color: "white",
                        }}
                    >
                        The elements airdrop
                    </h1>
                    <div style={{ height: "90vh", overflow: "auto" }}>
                        <div
                            style={{
                                fontFamily: "Kanit",
                                fontWeight: "bolder",
                                padding: "1rem",
                            }}
                        >
                    

                    <p style={{ textAlign: "left",
                        fontSize: "21px" }}>
                            🔷About the elements </p>

                            <li style={{ textAlign: "left",
                                        fontSize: "18" }}>
                           We have 3 elements to be airdropped fire, water and earth.</li>

                                <li style={{ textAlign: "left" }}>Total supply of 666 (222 of each)</li>
                                   
                


                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷What's the benefits.</p>

                                <li style={{ textAlign: "left" }}>Fire element will boost your $ELMNT earnings by x2 meaning doubling your rewards.</li>

                                <li style={{ textAlign: "left" }}>Water element will cut your tweet time in half meaning you'll be able to tweet twice per day instead of once similar to fire but the catch you can have both and tweet twice with double rewards.</li>

                            

                                <li style={{ textAlign: "left" }}>Earth element will boost your $ELMNT staking rewards by x2.</li>

                

                                <p style={{ textAlign: "left",
                                            fontSize:"21px" }}>🔷How to receive this airdrop.</p>
                                <li style={{ textAlign: "left" }}>60% will go towards presales buyers.</li>
                                <li style={{ textAlign: "left" }}>40% for top points on our tweet to earn and discord points leaderboard.</li>
                                <li style={{ textAlign: "left" }}>The elements airdrop is 100% random you can receive any of them, Only future holders will be able to benefit from their rewards.</li>
                        
                        </div>
                        
                        </div>
                        
                      </div>
                      
                     
            

                 ) : (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        fontSize: "19px"
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <h1 style={{ color: "white" }}>THE ELEMENT AIRDROP</h1>
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

                            <li style={{ textAlign: "left",
                                        fontSize: "18" }}>
                           We have 3 elements to be airdropped fire, water and earth.</li>

                                <li style={{ textAlign: "left" }}>Total supply of 666 (222 of each)</li>
                                   
                


                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷What's the benefits.</p>

                                <li style={{ textAlign: "left" }}>Fire element will boost your $ELMNT earnings by x2 meaning doubling your rewards.</li>

                                <li style={{ textAlign: "left" }}>Water element will cut your tweet time in half meaning you'll be able to tweet twice per day instead of once similar to fire but the catch you can have both and tweet twice with double rewards.</li>

                            

                                <li style={{ textAlign: "left" }}>Earth element will boost your $ELMNT staking rewards by x2.</li>

                       

                                <p style={{ textAlign: "left",
                                            fontSize:"21px" }}>🔷How to receive this airdrop.</p>
                                <li style={{ textAlign: "left" }}>60% will go towards presales buyers.</li>
                                <li style={{ textAlign: "left" }}>40% for top points on our tweet to earn and discord points leaderboard.</li>
                                <p style={{ textAlign: "left",
                                            fontSize:"21px" }}>The elements airdrop is 100% random you can receive any of them,  Only future holders will be able to benefit from their rewards.</p>
                        
                        </div>
                    
            
                        </div>
            
        </div>
        
   
   
                    )}</div>
       );
                           };
                              export default Page6;