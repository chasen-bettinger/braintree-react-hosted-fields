import React from "react";
import logo from "./logo.svg";
import Braintree from "./components/Braintree";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Braintree />
            </header>
        </div>
    );
}

export default App;
