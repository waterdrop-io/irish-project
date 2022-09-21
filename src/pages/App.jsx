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
                textAlign: "center"
            }}>
                <h1>Welcome to the Irish Project</h1>
                <br />
                <h3>
                    Discover Ireland with an application

                </h3>
                <br />
                <br />
                <img src="https://img.shields.io/github/license/waterdrop-io/irish-project?style=for-the-badge" alt="licence" /> <br />
                <img src="https://img.shields.io/github/v/release/waterdrop-io/irish-project?include_prereleases&style=for-the-badge" alt="release" />
                <br />
                <h3>
                    This code is protected by the GPL-3.0 <br />licence provided by Github. <br />
                </h3>
            </div>

        </div>
    );
}

export default App;
