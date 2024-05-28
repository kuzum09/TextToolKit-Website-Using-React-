import React, { useState, useEffect } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("Enter Text Here");
	const [voices, setVoices] = useState([]);

	useEffect(() => {
		const fetchVoices = () => {
			const voices = window.speechSynthesis.getVoices();
			setVoices(voices);
		};

		window.speechSynthesis.onvoiceschanged = fetchVoices;
		fetchVoices();
	}, []);

	const handleUpClick = () => {
		console.log("Upper Case was Clicked" + text);
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleLowClick = () => {
		console.log("Lower Case was Clicked" + text);
		let newText = text.toLowerCase();
		setText(newText);
	};

	const handleClearClick = () => {
		let newText = "";
		setText(newText);
	};

	const handleOnChange = (event) => {
		console.log("On change");
		setText(event.target.value);
	};

	const handleSpeakClick = () => {
		if ("speechSynthesis" in window) {
			const utterance = new SpeechSynthesisUtterance(text);
			// Select a female-sounding voice if available
			const femaleVoice =
				voices.find(
					(voice) =>
						voice.name.includes("Female") ||
						voice.name.includes("woman") ||
						(voice.lang.includes("en-US") && voice.name.includes("Zira")) // Common English female voice
				) || voices[0];
			if (femaleVoice) {
				utterance.voice = femaleVoice;
			}
			window.speechSynthesis.speak(utterance);
		} else {
			alert("Sorry, your browser does not support text-to-speech.");
		}
	};

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
				<button className="btn btn-primary mx-2" onClick={handleClearClick}>
					Clear Text
				</button>
				<button className="btn btn-primary mx-2" onClick={handleSpeakClick}>
					Convert to Speech
				</button>
			</div>
			<div className="container my-3">
				<h2>Your Text Counts</h2>
				<p>
					{text.split(/\s+/).filter((word) => word.length !== 0).length} Words
					and {text.length} characters
				</p>
				<p>
					{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length}{" "}
					Minutes to Read
				</p>
				<h2>Preview</h2>
				<p>{text}</p>
			</div>
		</>
	);
}
