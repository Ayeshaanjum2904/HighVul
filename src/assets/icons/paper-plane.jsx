import * as React from "react";

function PaperPlaneIcon(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<defs>
				<filter id="paper-plane_svg__a">
					<feColorMatrix
						in="SourceGraphic"
						values="0 0 0 0 0.000000 0 0 0 0 0.686275 0 0 0 0 0.678431 0 0 0 1.000000 0"
					/>
				</filter>
			</defs>
			<g
				fill="none"
				fillRule="evenodd"
				filter="url(#paper-plane_svg__a)"
				transform="translate(-1232 -704)"
			>
				<path
					fill="#8F93A1"
					d="M1247 721.838l-1.856-5.567 5.568-5.57-3.712 11.137zm2.298-12.55l-5.568 5.568-5.568-1.856 11.136-3.712zm4.692-2.34a.951.951 0 00-.088-.361.967.967 0 00-.195-.294.96.96 0 00-.384-.23.952.952 0 00-.275-.054c-.022-.001-.042-.006-.065-.006-.1.002-.201.016-.299.048l-18 6a1 1 0 000 1.898l8.525 2.842 2.843 8.526a.998.998 0 001.896 0l6-18c.032-.1.047-.2.048-.3.001-.023-.005-.045-.006-.07z"
				/>
			</g>
		</svg>
	);
}

export default PaperPlaneIcon;

