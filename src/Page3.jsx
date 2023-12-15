import React, { useState, useEffect } from "react";
import CharacterGallery from "./components/CharacterGallery";

const Page3 = () => {
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
                        padding: "8rem",
                        height: "90vh",
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
                        Vision
                    </h1>
                    <div style={{ height: "60vh", overflow: "auto" }}>
                        <div
                            style={{
                                fontFamily: "Kanit",
                                fontWeight: "bolder",
                                padding: "1rem",
                            }}
                        >
                    

                    <p style={{ textAlign: "left",
                        fontSize: "21px" }}>
                            🔷Tweet to earn </p>

                            <li style={{ textAlign: "left",
                                        fontSize: "18" }}>
                            Earn $ELMNT by tweeting once per day for public and twice for holders.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Marketplace and Spin the wheel</p>

                                <li style={{ textAlign: "left" }}>Spend $ELMNT to spin the wheel for NFTs/Sol prizes, You can also win our 1/1's in the wheel.</li>

                                <li style={{ textAlign: "left" }}>Spend $ELMNT to buy NFTs and products on our marketplace.</li>
                                   
                


                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷PFP Staking.</p>

                                <li style={{ textAlign: "left" }}>Stake your PFP on X and Earn $ELMNT Daily representing your favorite project.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Casino.</p>

                                <li style={{ textAlign: "left" }}>40% up to 80% will be giving out as revenue share from the casino profits.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Mobile App.</p>

                                <li style={{ textAlign: "left" }}>Build a mobile app, That's a big move to go wider and our holders can receive notifications once it's been 24 hours so they can tweet again.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Expand to other social media like Instagram, Facebook etc...</p>
                                <li style={{ textAlign: "left" }}>Post about us on Instagram or facebook etc... and earn points.</li>
                                <li style={{ textAlign: "left" }}>Convert web2 people to web3.</li>

                                <p style={{ textAlign: "left",
                                            fontSize:"21px" }}>🔷Paid advertisements (Tweet/Post about other projects, Companies on all social media platforms).</p>

                                <li style={{ textAlign: "left" }}>Web3 projects, Web2 companies basically at this point anyone will pay us for advertisements, Our holders will receive a notification to tweet or post about them on different social media and earn $ELMNT in the process to convert into sol or NFT's and products in our marketplace.
                            </li>
                        </div>
                    </div>
                    <div
                        style={{
                            paddingLeft: "20px",
                            margin: "1rem 0",
                            padding: "5rem",
                        }}
                    >
                        <CharacterGallery style={{ width: "100px" }} />
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
                        <h1 style={{ color: "white" }}>Vision</h1>
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
                            🔷Tweet to earn </p>

                            <li style={{ textAlign: "left" }}>
                            Earn $ELMNT by tweeting once per day for public and twice for holders.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Marketplace and Spin the wheel</p>

                                <li style={{ textAlign: "left" }}>Spend $ELMNT to spin the wheel for NFTs/Sol prizes, You can also win our 1/1's in the wheel.</li>

                                <li style={{ textAlign: "left" }}>Spend $ELMNT to buy NFTs and products on our marketplace.</li>
                                   
                


                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷PFP Staking.</p>

                                <li style={{ textAlign: "left" }}>Stake your PFP on X and Earn $ELMNT Daily representing your favorite project.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Casino.</p>

                                <li style={{ textAlign: "left" }}>40% up to 80% will be giving out as revenue share from the casino profits.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Mobile App.</p>

                                <li style={{ textAlign: "left" }}>Build a mobile app, That's a big move to go wider and our holders can receive notifications once it's been 24 hours so they can tweet again.</li>

                                <p style={{ textAlign: "left",
                                            fontSize: "21px" }}>🔷Expand to other social media like Instagram, Facebook etc...</p>
                                <li style={{ textAlign: "left" }}>Post about us on Instagram or facebook etc... and earn points.</li>
                                <li style={{ textAlign: "left" }}>Convert web2 people to web3.</li>

                                <p style={{ textAlign: "left",
                                            fontSize:"21px" }}>🔷Paid advertisements (Tweet/Post about other projects, Companies on all social media platforms).</p>

                                <li style={{ textAlign: "left" }}>Web3 projects, Web2 companies basically at this point anyone will pay us for advertisements, Our holders will receive a notification to tweet or post about them on different social media and earn $ELMNT in the process to convert into sol or NFT's and products in our marketplace.
                            </li>
                        </div>
                    </div>
                    <div
                        style={{
                            borderLeft: "3px solid white",
                            paddingLeft: "20px",
                            marginLeft: "20px",
                            padding: "10px",
                            marginTop: "8rem",
                        }}
                    >
                        <CharacterGallery />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page3;
