import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
	return (
		<>
			<Navbar title="Kusum's" about="About Us" />

			<div className="container my-3">
				<TextForm  heading="Enter Text" />
			</div>
		</>
	);
}
export default App;
