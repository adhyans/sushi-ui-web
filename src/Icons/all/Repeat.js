import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Repeat = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>repeat</title>
      <path d='M18.34 10c-0.016 4.075-3.323 7.373-7.4 7.373-1.892 0-3.619-0.71-4.927-1.879l0.007 0.006c-0.137-0.131-0.223-0.316-0.223-0.521 0-0.184 0.069-0.353 0.183-0.48l-0.001 0.001c0.132-0.144 0.321-0.234 0.531-0.234 0.18 0 0.344 0.066 0.47 0.175l-0.001-0.001c1.051 0.948 2.45 1.528 3.985 1.528 3.292 0 5.96-2.668 5.96-5.96s-2.668-5.96-5.96-5.96c-2.397 0-4.463 1.415-5.41 3.455l-0.015 0.037h0.82c0.295 0.001 0.548 0.18 0.658 0.435l0.002 0.005c0.031 0.079 0.049 0.169 0.049 0.265 0 0.2-0.080 0.382-0.209 0.516l-1.9 1.9c-0.135 0.124-0.315 0.2-0.514 0.2-0.002 0-0.004 0-0.006-0h0c-0.001 0-0.001 0-0.002 0-0.193 0-0.369-0.076-0.498-0.2l0 0-0.12-0.14v-0.040l-1.78-1.72c-0.125-0.129-0.202-0.306-0.202-0.5 0-0.391 0.312-0.71 0.701-0.72l0.001-0h1.48c1.086-2.81 3.765-4.766 6.902-4.766 4.022 0 7.292 3.217 7.378 7.218l0 0.008z'></path>
    </Icon>
  );
};

export default Repeat;