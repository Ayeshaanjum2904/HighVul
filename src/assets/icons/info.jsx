import React from "react";

const InfoIcon = props => (
	<svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
		<defs>
			<path
				d="M13 12.837V14a1 1 0 11-2 0v-2a1 1 0 011-1c.827 0 1.5-.673 1.5-1.5S12.827 8 12 8s-1.5.673-1.5 1.5a1 1 0 11-2 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5c0 1.58-1.06 2.903-2.5 3.337M12 18a1 1 0 110-2 1 1 0 110 2m0-16C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2"
				id="info_svg__a"
			/>
		</defs>
		<use
			fill="#FFF"
			xlinkHref="#info_svg__a"
			transform="translate(-2 -2)"
			fillRule="evenodd"
		/>
	</svg>
);

export default InfoIcon;

