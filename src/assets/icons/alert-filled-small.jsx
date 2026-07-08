/* eslint-disable */
import React from "react";
import colors from "assets/styles/colors";

const AlertSmallIcon = props => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0188 14C14.0454 14 14.6854 12.8866 14.1721 12L9.15211 3.32662C8.63878 2.43995 7.35878 2.43995 6.84545 3.32662L1.82545 12C1.31211 12.8866 1.95211 14 2.97878 14H13.0188ZM7.99878 9.33329C7.63211 9.33329 7.33211 9.03329 7.33211 8.66662V7.33329C7.33211 6.96662 7.63211 6.66662 7.99878 6.66662C8.36545 6.66662 8.66544 6.96662 8.66544 7.33329V8.66662C8.66544 9.03329 8.36545 9.33329 7.99878 9.33329ZM7.33211 10.6666V12H8.66544V10.6666H7.33211Z" fill={colors.error_color_300}/>
	</svg>
);

export default AlertSmallIcon;

