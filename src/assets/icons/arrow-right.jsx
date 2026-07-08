import * as React from "react";

function ArrowRightIcon(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<defs>
				<filter id="arrow-right_svg__a">
					<feColorMatrix
						in="SourceGraphic"
						values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
					/>
				</filter>
			</defs>
			<g
				fill="none"
				fillRule="evenodd"
				filter="url(#arrow-right_svg__a)"
				transform="translate(-240 -24)"
			>
				<path
					fill="#0D1C2E"
					fillRule="nonzero"
					d="M245 37h11.865l-3.633 4.36a1 1 0 101.537 1.28l5-6c.039-.047.058-.102.087-.154.024-.042.053-.078.071-.124a.985.985 0 00.072-.358L260 36l-.001-.004a.985.985 0 00-.072-.358c-.018-.046-.047-.082-.071-.124-.029-.052-.048-.107-.087-.154l-5-6a1.002 1.002 0 00-1.409-.128 1 1 0 00-.128 1.408l3.633 4.36H245a1 1 0 000 2"
				/>
			</g>
		</svg>
	);
}

export default ArrowRightIcon;

