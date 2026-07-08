/* eslint-disable */
import React from "react";

const CheckmarkIcon = props => (
	<svg width="1em" height="1em" viewBox="0 0 14 14" {...props}>
		<defs>
			<path
				d="M9.803 5.596L7.28 8.91l-1.088-1.39a.666.666 0 10-1.05.82l1.62 2.072c.127.161.32.255.526.255h.004c.206 0 .401-.098.526-.262l3.046-4a.666.666 0 10-1.06-.808M8 13.333A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333m0-12a6.667 6.667 0 100 13.334A6.667 6.667 0 008 1.333"
				id="checkmark_svg__a"
			/>
		</defs>
		<use
			fill="#3A3D42"
			xlinkHref="#checkmark_svg__a"
			transform="translate(-1 -1)"
			fillRule="evenodd"
			opacity={0.6}
		/>
	</svg>
);

export default CheckmarkIcon;

