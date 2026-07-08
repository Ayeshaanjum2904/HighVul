import React from "react";
import colors from "assets/styles/colors";

const ClearIcon = props => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="x_svg__feather x_svg__feather-x"
        {...props}
        style={{
            cursor: "pointer",
            backgroundColor: "transparent"
        }}
        onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = `${colors.secundary_color_100}`;
            e.currentTarget.style.fillOpacity = "0.24";
            e.currentTarget.style.fill = `${colors.icon_color}`;
        }}
        onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "transparent";
        }}
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
);

export default ClearIcon;