import React from "react";

const CircleAlertIcon = props => (
	<svg width="1em" height="1em" viewBox="0 0 18 18" {...props}>
		<defs>
			<path
				d="M10 12.5a.834.834 0 110 1.667.834.834 0 010-1.667zm0-6.667c.46 0 .833.374.833.834v4.166a.834.834 0 01-1.666 0V6.667c0-.46.373-.834.833-.834zm0 10.834A6.674 6.674 0 013.333 10 6.674 6.674 0 0110 3.333 6.674 6.674 0 0116.667 10 6.674 6.674 0 0110 16.667m0-15a8.333 8.333 0 100 16.666 8.333 8.333 0 100-16.666"
				id="checked-circle_svg__a"
			/>
		</defs>
		<use
			fill="#ED5C6F"
			xlinkHref="#checked-circle_svg__a"
			transform="translate(-1 -1)"
			fillRule="evenodd"
		/>
	</svg>
);

export default CircleAlertIcon;

