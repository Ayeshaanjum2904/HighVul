import React from "react";

const FlagIcon = props => (
	<svg width="1em" height="1em" viewBox="0 0 10 12" {...props}>
		<defs>
			<path
				d="M9.267 3.667l-.16-.8a.665.665 0 00-.654-.534H3.667C3.3 2.333 3 2.633 3 3v10c0 .367.3.667.667.667.366 0 .666-.3.666-.667V9h3.734l.16.8c.06.313.333.533.653.533h3.453c.367 0 .667-.3.667-.666V4.333c0-.366-.3-.666-.667-.666H9.267z"
				id="flag_svg__a"
			/>
		</defs>
		<use
			fill="currentColor"
			fillRule="evenodd"
			xlinkHref="#flag_svg__a"
			transform="translate(-3 -2)"
		/>
	</svg>
);

export default FlagIcon;

