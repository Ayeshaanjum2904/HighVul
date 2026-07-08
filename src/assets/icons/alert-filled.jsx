/* eslint-disable */
import React from "react";
import PropTypes from 'prop-types';
import colors from "assets/styles/colors";

const AlertFilledIcon = ({color}) => (
	<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M17.1634 17.4572C18.7034 17.4572 19.6634 15.7872 18.8934 14.4572L11.3634 1.44721C10.5934 0.117207 8.67342 0.117207 7.90342 1.44721L0.373422 14.4572C-0.396578 15.7872 0.563422 17.4572 2.10342 17.4572H17.1634ZM9.63342 10.4572C9.08342 10.4572 8.63342 10.0072 8.63342 9.45721V7.45721C8.63342 6.90721 9.08342 6.45721 9.63342 6.45721C10.1834 6.45721 10.6334 6.90721 10.6334 7.45721V9.45721C10.6334 10.0072 10.1834 10.4572 9.63342 10.4572ZM8.63342 12.4572V14.4572H10.6334V12.4572H8.63342Z" fill={color} />
	</svg>
);

AlertFilledIcon.propTypes = {
	color: PropTypes.string,
};
	
AlertFilledIcon.defaultProps = {
	color: colors.error_color_300,
};

export default AlertFilledIcon;

