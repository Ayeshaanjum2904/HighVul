import React, { useState } from "react";

const PlusIcon = ({ baseColor }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <g clipPath="url(#clip0_2427_57806)">
        <rect
          width="40"
          height="40"
          rx="4"
          fill='#D2D9F3'
          fillOpacity={isHovered ? '0.48' : '0.24'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.6635 15.2559C20.625 14.9244 20.3432 14.667 20.0013 14.667C19.6331 14.667 19.3346 14.9655 19.3346 15.3337V19.3337H15.3346L15.2569 19.3381C14.9253 19.3767 14.668 19.6584 14.668 20.0003C14.668 20.3685 14.9664 20.667 15.3346 20.667H19.3346V24.667L19.3391 24.7447C19.3776 25.0763 19.6594 25.3337 20.0013 25.3337C20.3695 25.3337 20.668 25.0352 20.668 24.667V20.667H24.668L24.7457 20.6625C25.0773 20.624 25.3346 20.3422 25.3346 20.0003C25.3346 19.6321 25.0362 19.3337 24.668 19.3337H20.668V15.3337L20.6635 15.2559Z"
          fill={baseColor}
        />
      </g>
      <rect x="0.5" y="0.5" width="39" height="39" rx="2.5" stroke={baseColor} />
      <defs>
        <clipPath id="clip0_2427_57806">
          <rect width="40" height="40" rx="3" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;