import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
	return (
		<>
			<Navbar title="Kusum's" about="About" />

			{/* <div className="container my-3">
				<TextForm heading="Enter Text" />
			</div> */}
			<About />
		</>
	);
}
export default App;
