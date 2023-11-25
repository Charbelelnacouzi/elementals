import React, { useState, useRef, useEffect } from "react";
import "../styles/Mp3Player.css"; // Import the CSS file

const Mp3Player = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef(null);
    const songName = "The elements"; // Replace with your song name
    const totalTime = 276; // Replace with your song duration in seconds

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = (e) => {
        setCurrentTime(e.target.currentTime);
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        if (isPlaying) {
            audioElement.play().catch((error) => {
                console.log("Failed to play audio:", error);
            });
        } else {
            audioElement.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const handleInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
            }
        };

        document.addEventListener("click", handleInteraction);

        return () => {
            document.removeEventListener("click", handleInteraction);
        };
    }, [hasInteracted]);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (isExpanded && hasInteracted && audioElement.paused) {
            setIsPlaying(false);
        }
    }, [isExpanded, hasInteracted]);

    return (
        <div className={`mp3-player ${isExpanded ? "expanded" : "collapsed"}`}>
            <button onClick={toggleExpansion} style={{ color: "#ffffff" }}>
                {isExpanded ? "<" : ">"}
            </button>
            {isExpanded && (
                <>
                    <button
                        onClick={togglePlayPause}
                        style={{ backgroundColor: "#fff" }}
                    >
                        {isPlaying ? (
                            <img src="/icons/pause.png" width="30px" />
                        ) : (
                            <img src="/icons/play.png" width="30px" />
                        )}
                    </button>
                    <div
                        style={{
                            textAlign: "center",
                            fontFamily: "Kanit",
                            color: "#242424",
                        }}
                    >
                        {songName}
                    </div>
                    <div>
                        <audio
                            ref={audioRef}
                            src="/song.mp3" // Replace with your song file path
                            onTimeUpdate={handleTimeUpdate}
                            loop
                            autoPlay
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Mp3Player;
