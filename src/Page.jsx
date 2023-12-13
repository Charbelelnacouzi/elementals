import React from "react";

const Page = () => {
    const renderDesktopView = () => {
        return (
            <div
                style={{
                    position:"relative",
                   
                    justifyContent:"center",
                    alignContent:"center",
                  
                    background: "linear-gradient(135deg, #FFA500, #FF4500)",
                    
                }}
            >
                <div style={{ flex: "1" }}>
                <img src="/Production.png"
                    alt="background"
                    width="1530px"
                    display="flex"
                 />
                    </div>
            </div>
        );
    };

    const renderMobileView = () => {
        return (
            <div
            style={{
                position:"relative",
               
                justifyContent:"center",
                alignContent:"center",
              
                background: "linear-gradient(135deg, #FFA500, #FF4500)",
                
            }}
        >
            <div style={{ flex: "1" }}>
            <img src="/Production.png"
                alt="background"
                width="380px"
                display="flex"
             />
                </div>
                  </div>
          
        );
    };

    // Check if the viewport width is less than or equal to 768px (mobile view)
    const isMobileView = window.innerWidth <= 768;

    return isMobileView ? renderMobileView() : renderDesktopView();
};

export default Page;
