import React, { useState, useEffect } from "react";
import "../styles/CharacterDevelopment.css"; // Assuming you have a CSS file for styling

const CharacterGallery = () => {
    const roleCards = [
        {
            id: 1,
            name: "Rock",
            image: "/traits/image1.jpeg",
        },
        {
            id: 2,
            name: "Water",
            image: "/traits/image2.jpeg",
        },
        {
            id: 3,
            name: "Fire",
            image: "/traits/image3.jpeg",
        },
        {
            id: 4,
            name: "Space",
            image: "/traits/image4.jpeg",
        },
        {
            id: 5,
            name: "Wind",
            image: "/traits/image5.jpeg",
        },
        {
            id: 6,
            name: "Metal",
            image: "/traits/image6.jpeg",
        },
        {
            id: 7,
            name: "Ice",
            image: "/traits/image7.jpeg",
        },
        {
            id: 8,
            name: "Mummy",
            image: "/traits/image8.jpeg",
        },
        {
            id: 9,
            name: "Infection",
            image: "/traits/image9.jpeg",
        },
        {
            id: 10,
            name: "Gold",
            image: "/traits/image10.jpeg",
        },
        {
            id: 11,
            name: "Glass",
            image: "/traits/image11.jpeg",
        },
        {
            id: 12,
            name: "Mud",
            image: "/traits/image12.jpeg",
            text: "fire",
        },
        {
            id: 12,
            name: "Glass Skeleton",
            image: "/traits/image13.jpg",
            text: "fire",
        },
    ];

    const [activeCardIndex, setActiveCardIndex] = useState(0);

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

    return (
        <div className="gallery-container">
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
                </a>
            </div>
            <div className="arrows-container">
                <button
                    className="arrow left-arrow"
                    style={{ color: "white" }}
                    onClick={goToPreviousCard}
                >
                    &lt;
                </button>
                <button
                    className="arrow right-arrow"
                    style={{ color: "white" }}
                    onClick={goToNextCard}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CharacterGallery;
