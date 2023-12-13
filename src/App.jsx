import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Page from "./Page";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Mp3Player from "./components/Mp3Player";


const App = () => {
    return (
        <div id="root">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap"
                rel="stylesheet"
            ></link>
            <Navbar />
            <Mp3Player></Mp3Player>
            <div className="scroll-container">
                <section
                    className="page"
                    style={{ borderBottom: "2px solid white" }}
                >
                    <Page1 />
                </section>
                <section
                    className="page"
                    style={{ borderBottom: "2px solid white" }}
                >
                    <Page2 />
                </section>
                <section
                    className="page-long"
                    style={{ borderBottom: "2px solid white" }}
                >
                       <Page3 />
                </section>
                <section
                    className="page"
                    style={{ borderBottom: "2px solid white" }}
                >
                    <Page6 />
                </section> 
                <section
                    className="page"
                    style={{ borderBottom: "2px solid white" }}
                >
                    <Page />
                </section> 
              
                <section
                    className="page-long"
                    style={{ borderBottom: "2px solid white" }}
                >
                    <Page4 />
                </section>
                <section
                    className="page"
                    style={{ borderTop: "2px solid white" }}
                >
                    <Page5 />
                </section>
            </div>
        </div>
    );
};

export default App;
