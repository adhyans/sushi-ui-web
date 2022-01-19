import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ThumbUp = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>thumb-up</title>
      <path d='M19.3 7.5c-0.389-0.51-0.996-0.837-1.679-0.84h-3.581v-2.38c0.002-0.043 0.003-0.094 0.003-0.145 0-2.11-1.71-3.82-3.82-3.82-0.071 0-0.142 0.002-0.213 0.006l0.010-0c-0.001 0-0.003-0-0.004-0-0.369 0-0.674 0.278-0.715 0.637l-0 0.003c-0.275 1.592-0.602 2.946-1.005 4.266l0.065-0.246c-0.642 1.532-2.111 2.598-3.835 2.64l-0.005 0h-3.56c-0.53 0-0.96 0.43-0.96 0.96v0 10.24c0.011 0.522 0.437 0.94 0.96 0.94 0 0 0 0 0 0h3.32c0 0 0 0 0 0 0.523 0 0.949-0.418 0.96-0.939l0-0.001v-0.9c1.38 0.78 3.6 1.84 4.76 1.84h4.52c0.092 0.010 0.198 0.016 0.306 0.016 1.36 0 2.509-0.899 2.888-2.134l0.006-0.021c0.787-1.819 1.508-3.994 2.044-6.241l0.056-0.279c0.116-0.372 0.184-0.8 0.184-1.243 0-0.877-0.263-1.693-0.713-2.373l0.010 0.016zM3.82 18.34h-2.4v-9.3h2.4v9.3zM18.44 10.78c-0.58 2.469-1.28 4.591-2.141 6.628l0.101-0.268c-0.175 0.732-0.823 1.268-1.597 1.268-0.107 0-0.212-0.010-0.313-0.030l0.010 0.002h-4.5c-0.9 0-3.48-1.28-4.76-2.060v-7.32c2.048-0.31 3.719-1.668 4.466-3.502l0.014-0.038c0.328-1.003 0.634-2.242 0.855-3.509l0.025-0.171c1.156 0.207 2.022 1.204 2.022 2.404 0 0.034-0.001 0.067-0.002 0.101l0-0.005v3.1c0 0.398 0.322 0.72 0.72 0.72v0h4.28c0.228 0 0.431 0.109 0.559 0.278l0.001 0.002c0.253 0.427 0.403 0.942 0.403 1.491 0 0.325-0.052 0.637-0.149 0.93l0.006-0.021z'></path>
    </Icon>
  );
};

export default ThumbUp;
