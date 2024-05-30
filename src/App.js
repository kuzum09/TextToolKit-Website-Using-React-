import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	const [mode, setMode] = useState("light");

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		if (mode === "dark") {
			document.body.classList.add("bg-dark", "text-light");
			document.body.classList.remove("bg-light", "text-dark");
		} else {
			document.body.classList.add("bg-light", "text-dark");
			document.body.classList.remove("bg-dark", "text-light");
		}
	}, [mode]);

	return (
		<>
			<Navbar title="Kusum's" mode={mode} toggleMode={toggleMode} />
			<div className="container my-3">
				<TextForm heading="Enter Text" />
			</div>
		</>
	);
}

export default App;
