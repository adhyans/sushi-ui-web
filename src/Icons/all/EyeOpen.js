import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const EyeOpen = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <g clipPath='url(#clip0)'>
        <path d='M10 2.5C5.31668 2.5 0.833349 5.83333 1.51765e-05 9.83333C-0.0249888 9.94304 -0.0249888 10.057 1.51765e-05 10.1667C0.833349 14.2083 5.31668 17.5 10 17.5C14.6833 17.5 19.1667 14.2083 20 10.1667C20.025 10.057 20.025 9.94304 20 9.83333C19.1667 5.83333 14.6833 2.5 10 2.5ZM10 15.8333C6.13335 15.8333 2.45002 13.2333 1.66668 10C2.43335 6.76667 6.11668 4.16667 10 4.16667C13.8833 4.16667 17.55 6.76667 18.3333 10C17.55 13.2333 13.8667 15.8333 10 15.8333Z'></path>
        <path d='M10 6.04163C9.21714 6.04163 8.45183 6.27378 7.80089 6.70873C7.14995 7.14367 6.6426 7.76188 6.343 8.48517C6.0434 9.20846 5.96501 10.0043 6.11775 10.7722C6.27048 11.54 6.64748 12.2453 7.20106 12.7989C7.75464 13.3525 8.45995 13.7295 9.22779 13.8822C9.99563 14.035 10.7915 13.9566 11.5148 13.657C12.2381 13.3574 12.8563 12.85 13.2913 12.1991C13.7262 11.5481 13.9584 10.7828 13.9584 9.99996C13.9584 8.95014 13.5413 7.94333 12.799 7.201C12.0567 6.45866 11.0498 6.04163 10 6.04163V6.04163ZM10 12.2916C9.54677 12.2916 9.1037 12.1572 8.72684 11.9054C8.34998 11.6536 8.05625 11.2957 7.8828 10.8769C7.70935 10.4582 7.66396 9.99742 7.75239 9.55288C7.84081 9.10834 8.05907 8.7 8.37957 8.37951C8.70006 8.05901 9.1084 7.84075 9.55294 7.75233C9.99748 7.6639 10.4583 7.70928 10.877 7.88274C11.2958 8.05619 11.6537 8.34992 11.9055 8.72678C12.1573 9.10364 12.2917 9.54671 12.2917 9.99996C12.2917 10.6077 12.0502 11.1906 11.6205 11.6204C11.1907 12.0502 10.6078 12.2916 10 12.2916Z'></path>
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20'></rect>
        </clipPath>
      </defs>
    </Icon>
  );
};

export default EyeOpen;