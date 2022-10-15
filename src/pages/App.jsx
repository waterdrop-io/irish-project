import React from "react";
import Navbar from "../components/Sidebar";

const App = () => {
    return (
        <div
            style={{
                top: 0,
                width: '100vw',
                height: '100vw'
            }}
        >
            <Navbar />
            <div style={{
                color: 'black',
                textAlign: "center",
            }}>
                <h1>Welcome to the Irish Project</h1>
                <br />
                <h3>
                    Discover Ireland with an application

                </h3>
                <br />
                <br />
                <br />
                <br />
                <br />

                <p>
                    <img src="/map.png" width={250} height={300} alt="map" />
                </p>
            </div>

        </div>
    );
}

export default App;
