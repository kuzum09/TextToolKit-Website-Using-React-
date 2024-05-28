import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		console.log("Upper Case was Clicked" + text);
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLowClick = () => {
		console.log("Upper Case was Clicked" + text);
		let newText = text.toLowerCase();
		setText(newText);
	};
	const handleOnChange = (event) => {
		console.log(" On change");
		// setText()
		setText(event.target.value);
	};
	const [text, setText] = useState("Enter Text Here");
	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
						value={text}
						id="myBox"
						rows="8"
						onChange={handleOnChange}></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
					Convert to UpperCase
				</button>
				<button className="btn btn-primary mx-2" onClick={handleLowClick}>
					Convert to LowerCase
				</button>
			</div>
			<div className="container my-3">
				<h2>Your Text Counts</h2>
				<p>
					{text.split(" ").length} Words and {text.length} chracters
				</p>
				<p>{0.008 * text.split(" ").length} Minutes to Read</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
