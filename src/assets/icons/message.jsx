import * as React from "react";

function MessageIcon(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<defs>
				<filter id="message-square-fill_svg__a">
					<feColorMatrix
						in="SourceGraphic"
						values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
					/>
				</filter>
			</defs>
			<g
				fill="none"
				fillRule="evenodd"
				filter="url(#message-square-fill_svg__a)"
				transform="translate(-1232 -752)"
			>
				<path
					fill="#0D1C2E"
					fillRule="nonzero"
					d="M1248 764a1 1 0 110-2 1 1 0 010 2m-4 0a1 1 0 110-2 1 1 0 010 2m-4 0a1 1 0 110-2 1 1 0 010 2m11-9h-14c-1.654 0-3 1.346-3 3v15a1 1 0 001.515.857l4.524-2.714a.997.997 0 01.515-.143H1251c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3"
				/>
			</g>
		</svg>
	);
}

export default MessageIcon;

