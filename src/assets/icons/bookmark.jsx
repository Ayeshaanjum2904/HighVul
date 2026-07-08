import React from "react";

const BookmarkIcon = props => (
	<svg width="1em" height="1em" viewBox="0 0 10 12" {...props}>
		<defs>
			<path
				d="M8 0H1.333C.6 0 0 .6 0 1.333V12l4.667-2 4.666 2V1.333C9.333.6 8.733 0 8 0z"
				id="bookmark_svg__a"
			/>
		</defs>
		<use
			fill="currentColor"
			xlinkHref="#bookmark_svg__a"
			transform="translate(.333)"
			fillRule="evenodd"
		/>
	</svg>
);

export default BookmarkIcon;

