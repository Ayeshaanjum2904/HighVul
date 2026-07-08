import React from 'react';
import PropTypes from 'prop-types';
import colors from 'assets/styles/colors';
function CancelIcon({ color }) {
	return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="1.25" stroke={color} strokeWidth="1.4"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.96114 4.81996C5.66831 4.51762 5.16554 4.48697 4.83815 4.7515C4.51076 5.01603 4.48275 5.47556 4.77557 5.7779L6.92659 7.99881L4.77647 10.1938C4.48208 10.4943 4.50751 10.9537 4.83326 11.2199C5.15901 11.4861 5.66173 11.4583 5.95611 11.1578L7.98255 9.08909L10.0079 11.1802C10.3007 11.4826 10.8035 11.5132 11.1309 11.2487C11.4583 10.9842 11.4863 10.5246 11.1935 10.2223L9.04522 8.00426L11.2227 5.78135C11.5171 5.48082 11.4917 5.02139 11.1659 4.75519C10.8402 4.48898 10.3375 4.5168 10.0431 4.81733L7.98926 6.91398L5.96114 4.81996Z" fill={color}/>
    </svg>
	);
}

CancelIcon.propTypes = {
  color: PropTypes.string,
};
  
CancelIcon.defaultProps = {
  color: colors.error_color_300,
};

export default CancelIcon;
