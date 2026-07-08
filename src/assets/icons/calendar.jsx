/* eslint-disable */

import React from "react";

const CalendarIcon = props => (
	<svg width="1em" height="1em" viewBox="0 0 18 20" {...props}>
		<defs>
			<path
				d="M8 15c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 0c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h4zm2 5H6c-.551 0-1-.449-1-1v-6h14v6c0 .551-.449 1-1 1M6 6h1v1c0 .55.45 1 1 1s1-.45 1-1V6h6v1c0 .55.45 1 1 1s1-.45 1-1V6h1c.551 0 1 .449 1 1v4H5V7c0-.551.449-1 1-1m12-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H9V3c0-.55-.45-1-1-1s-1 .45-1 1v1H6C4.346 4 3 5.346 3 7v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3"
				id="calendar_svg__a"
			/>
		</defs>
		<use
			fill="currentColor"
			xlinkHref="#calendar_svg__a"
			transform="translate(-3 -2)"
			fillRule="evenodd"
		/>
	</svg>
);

export default CalendarIcon;

