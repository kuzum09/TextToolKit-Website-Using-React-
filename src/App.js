import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
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
			showAlert("Dark Mode has been enabled", "sucess");
		} else {
			document.body.classList.add("bg-light", "text-dark");
			document.body.classList.remove("bg-dark", "text-light");
			showAlert("light Mode has been enabled", "sucess");
		}
	}, [mode]);

	return (
		<>
			<Navbar title="Kusum's" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				<TextForm heading="Enter Text" showAlert={showAlert} />
			</div>
		</>
	);
}

export default App;
