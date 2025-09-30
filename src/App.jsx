import { useState } from "react";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Cars } from "./components/Cars";
import { Gameplay } from "./components/Gameplay";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Inicio />
            <Cars />
            <Gameplay />
            <Footer />
        </>
    );
}

export default App;
