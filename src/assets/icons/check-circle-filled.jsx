import React from "react";
import colors from "assets/styles/colors";

function CheckCircleFilledIcon(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path
				fill={props.fill ? `${props.fill}` : `${colors.success_color_300}`}
				fillRule="evenodd"
				d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 111.41-1.41L10 14.17l6.88-6.88a.996.996 0 111.41 1.41l-7.59 7.59a.996.996 0 01-1.41 0z"
			/>
		</svg>
	);
}

export default CheckCircleFilledIcon;

