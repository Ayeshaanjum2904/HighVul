import React from "react";

const LoadingIcon = props => (
<svg id="Layer_1" {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130">
    <defs>
        <linearGradient id="linear-gradient" 
            x1="2" y1="65.2" x2="129.5" y2="68.8" 
            gradientTransform="translate(133.3 132.6) rotate(-179.6)" 
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="currentColor"/>
            <stop offset=".3" stopColor="currentColor" stopOpacity=".7"/>
            <stop offset=".6" stopColor="currentColor" stopOpacity=".4"/>
            <stop offset=".8" stopColor="currentColor" stopOpacity=".2"/>
            <stop offset="1" stopColor="currentColor" stopOpacity=".1"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" 
            x1="41.6" y1="30.9" x2="169" y2="34.6" 
            gradientTransform="translate(173.1 98.8) rotate(-179.5)" 
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="currentColor"/>
            <stop offset=".1" stopColor="currentColor" stopOpacity=".7"/>
            <stop offset=".3" stopColor="currentColor" stopOpacity=".4"/>
            <stop offset=".4" stopColor="currentColor" stopOpacity=".2"/>
            <stop offset=".4" stopColor="currentColor" stopOpacity=".1"/>
        </linearGradient>
    </defs>
    <path className="svg-loading-icon-1" d="M0,64.5C.3,28.6,29.6-.3,65.5,0c35.9,.3,64.8,29.6,64.5,65.5-.3,35.9-29.6,64.8-65.5,64.5C28.6,129.7-.3,100.4,0,64.5Zm118.5,.9c.2-29.6-23.6-53.7-53.2-53.9-29.6-.2-53.7,23.6-53.9,53.2-.2,29.6,23.6,53.7,53.2,53.9,29.6,.2,53.7-23.6,53.9-53.2Z"/>
    <path className="svg-loading-icon-2" d="M0,64.4C.3,28.5,29.7-.3,65.6,0s64.7,29.7,64.4,65.6c-.3,35.9-29.7,64.7-65.6,64.4C28.5,129.7-.3,100.3,0,64.4Zm118.5,1c.3-29.6-23.5-53.8-53.1-54-29.6-.3-53.8,23.5-54,53.1s23.5,53.8,53.1,54c29.6,.3,53.8-23.5,54-53.1Z"/>
</svg>
);

export default LoadingIcon;

