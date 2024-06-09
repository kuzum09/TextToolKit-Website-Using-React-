import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		if (mode === "dark") {
			document.body.classList.add("bg-dark", "text-light");
			document.body.classList.remove("bg-light", "text-dark");
			showAlert("Dark Mode has been enabled", "success");
			setInterval(() => {
				document.title = "TextToolKit- Dark Mode";
			}, 10000);
			setInterval(() => {
				document.title = "Install TextToolKit now";
			}, 5000);
		} else {
			document.body.classList.add("bg-light", "text-dark");
			document.body.classList.remove("bg-dark", "text-light");
			showAlert("Light Mode has been enabled", "success");
			setInterval(() => {
				document.title = "TextToolKit- Light Mode";
			}, 10000);
			setInterval(() => {
				document.title = "Install TextToolKit now";
			}, 5000);
		}
	}, [mode]);

	return (
		<>
			<Router>
				<Navbar
					title="TextToolKit"
					mode={mode}
					toggleMode={toggleMode}
					aboutText="About"
				/>
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route exact path="/about" element={<About />} />
						<Route
							exact
							path="/"
							element={<TextForm heading="Enter Text" showAlert={showAlert} />}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
