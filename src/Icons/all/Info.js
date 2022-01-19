import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const Info = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>info</title>
      <path d='M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c0-5.523-4.477-10-10-10v0zM12.16 15.64c-0.52 0.2-0.94 0.36-1.24 0.48-0.31 0.102-0.668 0.161-1.039 0.161-0.022 0-0.043-0-0.065-0.001l0.003 0c-0.037 0.002-0.081 0.004-0.125 0.004-0.516 0-0.989-0.183-1.359-0.487l0.004 0.003c-0.32-0.277-0.521-0.683-0.521-1.136 0-0.015 0-0.031 0.001-0.046l-0 0.002c-0.007-0.084-0.010-0.181-0.010-0.28s0.004-0.196 0.011-0.293l-0.001 0.013c0-0.2 0.060-0.4 0.12-0.66l0.66-2.3c0.060-0.24 0.1-0.44 0.14-0.64 0.046-0.161 0.075-0.346 0.080-0.537l0-0.003c0.002-0.024 0.004-0.051 0.004-0.079 0-0.208-0.077-0.397-0.205-0.542l0.001 0.001c-0.164-0.116-0.367-0.186-0.588-0.186-0.040 0-0.079 0.002-0.117 0.007l0.005-0c-0.187 0.004-0.365 0.033-0.534 0.084l0.014-0.004-0.46 0.16 0.18-0.72c0.42-0.18 0.84-0.32 1.24-0.46 0.341-0.114 0.733-0.18 1.14-0.18 0.007 0 0.014 0 0.021 0h-0.001c0.041-0.003 0.088-0.004 0.136-0.004 0.503 0 0.965 0.175 1.328 0.468l-0.004-0.003c0.274 0.278 0.443 0.66 0.443 1.081 0 0.035-0.001 0.069-0.003 0.104l0-0.005c0 0.12 0 0.28 0 0.54-0.020 0.258-0.062 0.497-0.126 0.726l0.006-0.026-0.66 2.3q-0.060 0.28-0.14 0.64c-0.031 0.158-0.052 0.344-0.060 0.533l-0 0.007c-0.003 0.026-0.005 0.055-0.005 0.086 0 0.206 0.078 0.393 0.205 0.535l-0.001-0.001c0.184 0.114 0.408 0.182 0.647 0.182 0.026 0 0.051-0.001 0.077-0.002l-0.003 0c0.195-0.007 0.38-0.035 0.557-0.084l-0.017 0.004c0.171-0.047 0.317-0.101 0.457-0.167l-0.017 0.007zM12.040 6.26c-0.278 0.248-0.647 0.4-1.051 0.4-0.010 0-0.020-0-0.031-0l0.002 0c-0.012 0-0.025 0-0.039 0-0.417 0-0.797-0.16-1.082-0.422l0.001 0.001c-0.284-0.254-0.462-0.621-0.462-1.030s0.178-0.776 0.46-1.029l0.001-0.001c0.272-0.238 0.631-0.383 1.024-0.383 0.034 0 0.067 0.001 0.101 0.003l-0.005-0c0.001 0 0.001 0 0.002 0 0.42 0 0.8 0.168 1.078 0.44l-0-0c0.278 0.257 0.452 0.623 0.452 1.030s-0.174 0.773-0.451 1.029l-0.001 0.001z'></path>
    </Icon>
  );
};

export default Info;