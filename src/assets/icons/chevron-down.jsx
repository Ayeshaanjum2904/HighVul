import React from "react";

const ChevronDownIcon = props => (
	<svg
	width="14" height="8" viewBox="0 0 14 8" fill="#8f9bb3"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="chevron_right_svg__feather chevron_right_svg__feather-chevron-right"
		{...props}
	>
		<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#8f9bb3"/>
	</svg>
);

export default ChevronDownIcon;
