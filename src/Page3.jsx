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
                        padding: "1rem",
                        height: "140vh",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "Kanit",
                            fontSize: "24px",
                            margin: "1rem 0",
                            color: "white",
                        }}
                    >
                        Vision
                    </h1>
                    <div style={{ height: "50vh", overflow: "auto" }}>
                        <div
                            style={{
                                fontFamily: "Kanit",
                                fontWeight: "bolder",
                                padding: "1rem",
                            }}
                        >
                    

                            <p style={{ textAlign: "left" }}>
                            🔷Tweet to earn $ELMNT
                            </p>
                            <p style={{ textAlign: "left" }}>
                                🔹Earn $ELMNT per tweet, 1 per day for public, 2 for holders.</p>

                                <p style={{ textAlign: "left" }}>🔷Marketplace and Spin the wheel.</p>

                                <p style={{ textAlign: "left" }}>🔹Spent $ELMNT to spin the wheel for NFTs/Sol prizes, You can also win our 1/1's in the wheel.</p>

                                <p style={{ textAlign: "left" }}>🔹You will be able to buy our WL/OG spots via our marketplace using $ELMNT earned, Holders will be able to swap them for NFTs/Sol or products.</p>

                                <p style={{ textAlign: "left" }}>🔷PFP Staking.</p>

                                <p style={{ textAlign: "left" }}>🔹Stake your PFP on X and Earn $ELMNT Daily representing your favorite project.</p>

                                <p style={{ textAlign: "left" }}>🔷Casino.</p>

                                <p style={{ textAlign: "left" }}>🔹40% up to 80% will be giving out as revenue share from the casino profits.</p>

                                <p style={{ textAlign: "left" }}>🔷Mobile App.</p>

                                <p style={{ textAlign: "left" }}>🔹Build a mobile app, That's a big move to go wider and our holders can receive notifications once it's been 24 hours so they can tweet again.</p>

                                <p style={{ textAlign: "left" }}>🔷Expand to other social media like Instagram, Facebook etc...</p>
                                <p style={{ textAlign: "left" }}>🔹Post about us on Instagram or facebook etc... and earn points.</p>
                                <p style={{ textAlign: "left" }}>🔹Convert web2 people to web3.</p>

                                <p style={{ textAlign: "left" }}>🔷Paid advertisements (Tweet/Post about other projects, Companies on all social media platforms).</p>

                                <p style={{ textAlign: "left" }}>🔹Web3 projects, Web2 companies basically at this point anyone will pay us for advertisements, Our holders will receive a notification to tweet or post about them on different social media and earn $ELMNT in the process to convert into sol or NFT's and products in our marketplace.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            paddingLeft: "20px",
                            margin: "1rem 0",
                            padding: "2rem",
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

                            <p style={{ textAlign: "left" }}>
                            🔷Tweet to earn $ELMNT</p>

                            <p style={{ textAlign: "left" }}>
                                🔹Earn $ELMNT per tweet, 1 per day for public, 2 for holders.</p>

                                <p style={{ textAlign: "left" }}>🔷Marketplace and Spin the wheel.</p>

                                <p style={{ textAlign: "left" }}>🔹Spent $ELMNT to spin the wheel for NFTs/Sol prizes, You can also win our 1/1's in the wheel.</p>

                                <p style={{ textAlign: "left" }}>🔹You will be able to buy our WL/OG spots via our marketplace using $ELMNT earned, Holders will be able to swap them for NFTs/Sol or products.</p>

                                <p style={{ textAlign: "left" }}>🔷PFP Staking.</p>

                                <p style={{ textAlign: "left" }}>🔹Stake your PFP on X and Earn $ELMNT Daily representing your favorite project.</p>

                                <p style={{ textAlign: "left" }}>🔷Casino.</p>

                                <p style={{ textAlign: "left" }}>🔹40% up to 80% will be giving out as revenue share from the casino profits.</p>

                                <p style={{ textAlign: "left" }}>🔷Mobile App.</p>

                                <p style={{ textAlign: "left" }}>🔹Build a mobile app, That's a big move to go wider and our holders can receive notifications once it's been 24 hours so they can tweet again.</p>

                                <p style={{ textAlign: "left" }}>🔷Expand to other social media like Instagram, Facebook etc...</p>
                                <p style={{ textAlign: "left" }}>🔹Post about us on Instagram or facebook etc... and earn points.</p>
                                <p style={{ textAlign: "left" }}>🔹Convert web2 people to web3.</p>

                                <p style={{ textAlign: "left" }}>🔷Paid advertisements (Tweet/Post about other projects, Companies on all social media platforms).</p>

                                <p style={{ textAlign: "left" }}>🔹Web3 projects, Web2 companies basically at this point anyone will pay us for advertisements, Our holders will receive a notification to tweet or post about them on different social media and earn $ELMNT in the process to convert into sol or NFT's and products in our marketplace.
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            borderLeft: "3px solid white",
                            paddingLeft: "20px",
                            marginLeft: "20px",
                            padding: "10px",
                            marginTop: "5rem",
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
