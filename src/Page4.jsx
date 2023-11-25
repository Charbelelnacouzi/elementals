import React, { useState, useEffect } from "react";
import "./styles/Page4.css"; // Import CSS file for component-specific styles

const Page4 = () => {
    const roleCards = [
        {
            id: 1,
            name: "Founder",
            image: "/image3.jpg",
            twitterUrl: "https://twitter.com/Zghire_",
            text: "Zghire",
            catchphrase: "The coolest guy on the chain",
        },
        {
            id: 2,
            name: "Artist",
            image: "/image2.jpg",
            twitterUrl: "https://twitter.com/thirdfvnc",
            text: "Winata",
            catchphrase: "I want to add more traits",
        },
        {
            id: 3,
            name: "Community Lead",
            image: "/image1.jpg",
            twitterUrl: "https://twitter.com/DollyXsol",
            text: "Dolly",
            catchphrase: "Stop simping on her",
        },
        {
            id: 4,
            name: "Head staff",
            image: "/image4.jpg",
            
            text: "Syed mubashir",
            catchphrase: "This was supposed to be easy",
        },
        {
            id: 5,
            name: "Staff",
            image: "/image5.jpg",
          
            text: "Carl-Skulls",
            catchphrase: "They literally talks too much",
        },
    
    ];

    const [isMobileView, setIsMobileView] = useState(false);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const goToPreviousCard = () => {
        setActiveCardIndex((prevIndex) =>
            prevIndex === 0 ? roleCards.length - 1 : prevIndex - 1
        );
    };

    const goToNextCard = () => {
        setActiveCardIndex((prevIndex) =>
            prevIndex === roleCards.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (isMobileView) {
        return (
            <div className="gallery-container">
                <h1 style={{ fontFamily: "Kanit" }}>Our team</h1>
                <div className="role-card">
                    <a
                        href={roleCards[activeCardIndex].twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={roleCards[activeCardIndex].image}
                            alt={roleCards[activeCardIndex].name}
                            className="role-photo"
                        />
                        <h2 style={{ color: "#ffffff" }}>
                            {roleCards[activeCardIndex].name}
                        </h2>
                        <p style={{ color: "#ffffff" }}>
                            {roleCards[activeCardIndex].text}
                        </p>
                        <p style={{ color: "#ffffff" }}>
                            {roleCards[activeCardIndex].catchphrase}
                        </p>
                    </a>
                </div>
                <div className="arrows-container">
                    <button
                        className="arrow left-arrow"
                        onClick={goToPreviousCard}
                        style={{ color: "white" }}
                    >
                        &lt;
                    </button>
                    <button
                        className="arrow right-arrow"
                        onClick={goToNextCard}
                        style={{ color: "white" }}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{ background: "linear-gradient(135deg, #FFA500, #FF4500)"}}
        >
            <h1
                style={{
                    textAlign: "center",
                    paddingTop: "4rem",
                    fontFamily: "Kanit",
                }}
            >
                Our Team
            </h1>
            <div className="page-container">
                {roleCards.map((role) => (
                    <div className="role-card" key={role.id} style={{height: "65vh"}}>
                        <a
                            href={role.twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={role.image}
                                alt={role.name}
                                className="role-photo"
                            />
                            <h2 style={{ color: "#ffffff" }}>{role.name}</h2>
                            <p style={{ color: "#ffffff" }}>{role.text}</p>
                            <p style={{ color: "#ffffff" }}>
                                {role.catchphrase}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page4;
