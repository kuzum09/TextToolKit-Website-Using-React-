import React from "react";

export default function Alert(props) {
	const capitalize = (word) => {
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	const alertStyle = {
		color: props.color || "black", // Default to black if no color is provided
		backgroundColor: "#ffe6e6", // Soft pastel background color
		// padding: "15px", // Add padding for better spacing
		// borderRadius: "200px", // More rounded corners
		// boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
		// border: `1px solid ${props.color || "black"}`, // Border color matching the text
		marginBottom: "10px", // Space between alerts
		// fontFamily:"", // Playful font
		// display: "flex",
		// alignItems: "center",
	};

	return (
		props.alert && (
			<div
				className={`alert alert-dismissible fade show`}
				style={alertStyle}
				role="alert">
				<strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
			</div>
		)
	);
}
