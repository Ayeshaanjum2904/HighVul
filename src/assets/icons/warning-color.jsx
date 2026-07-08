/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import colors from 'assets/styles/colors';

function WarningColorIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 56 56" {...props}>
      <path
        fill={props.fill ? `${props.fill}` : colors.alert_color_300}
        fillRule="evenodd"
        d="M10.43 47.842h35.14c3.593 0 5.833-3.897 4.037-7l-17.57-30.357c-1.797-3.103-6.277-3.103-8.074 0L6.393 40.842c-1.796 3.103.444 7 4.037 7zM28 31.51a2.34 2.34 0 01-2.333-2.334V24.51A2.34 2.34 0 0128 22.176a2.34 2.34 0 012.333 2.334v4.666A2.34 2.34 0 0128 31.51zm2.333 9.333h-4.666v-4.667h4.666v4.667z"
      />
    </svg>
  );
}

export default WarningColorIcon;
