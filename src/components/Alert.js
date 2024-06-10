import React from "react";

export default function Alert(props) {
	const capitalize = (word) => {
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	const alertStyle = {
		color: props.color || "black", // Default to black if no color is provided
		backgroundColor: "#ffe6e6", // Soft pastel background color
		padding: "15px", // Add padding for better spacing
		// borderRadius: "5px", // Rounded corners
		// boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
		// border: `1px solid ${props.color || "black"}`, // Border color matching the text
		// marginBottom: "10px", // Space between alerts
		fontFamily: "Arial", // A more playful font
		// display: "flex",
		// alignItems: "center",
		visibility: props.alert ? "visible" : "hidden", // Show/hide the alert
		// opacity: props.alert ? 1 : 0, // Fade in/out effect
		// transition: "opacity 0.5s ease", // Smooth transition for fading
		// height: "auto", // Adjust height based on content
	};

	return (
		<div style={{ height: "50px" }}>
			{" "}
			{/* Fixed height for the alert container */}
			<div
				className={`alert alert-dismissible fade show`}
				style={alertStyle}
				role="alert">
				{props.alert && (
					<>
						<strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
					</>
				)}
			</div>
		</div>
	);
}
