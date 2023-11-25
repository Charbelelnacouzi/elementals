import React from "react";

const ImageGallery = () => {
    const imagePaths = [
        "/traits/image1.jpeg",
        "/traits/image2.jpeg",
        "/traits/image3.jpeg",
        "/traits/image4.jpeg",
        "/traits/image5.jpeg",
        "/traits/image6.jpeg",
        "/traits/image7.jpeg",
        "/traits/image8.jpeg",
        "/traits/image9.jpeg",
        "/traits/image10.jpeg",
        "/traits/image11.jpeg",
        "/traits/image12.jpeg",
    ];

    return (
        <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
            {imagePaths.map((imagePath, index) => (
                <div
                    key={index}
                    style={{
                        display: "inline-block",
                        width: "300px",
                        marginRight: "10px",
                        borderRadius: "10px",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={imagePath}
                        alt={`Image ${index + 1}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
