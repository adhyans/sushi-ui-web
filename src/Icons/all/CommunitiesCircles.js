import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const CommunitiesCircles = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <path d='M16.6875 6.6875H16.625C15.875 5.3125 14.8125 4.125 13.4375 3.4375H13.375V3.375C13.3125 1.5 11.8125 0 10 0C8.1875 0 6.6875 1.5 6.6875 3.3125V3.375C5.3125 4.125 4.1875 5.25 3.4375 6.625V6.6875H3.3125C1.5 6.6875 0 8.1875 0 10C0 11.8125 1.5 13.3125 3.3125 13.3125H3.375C4.125 14.75 5.1875 15.875 6.5625 16.5625H6.625C6.625 16.5625 6.625 16.5625 6.625 16.625C6.625 18.4375 8.125 19.9375 9.9375 19.9375C11.75 19.9375 13.25 18.4375 13.25 16.625V16.5625C14.625 15.8125 15.75 14.75 16.5 13.375V13.3125H16.5625C18.375 13.3125 19.875 11.8125 19.875 10C19.875 8.1875 18.5 6.6875 16.6875 6.6875ZM10 1.4375C11.0625 1.4375 11.875 2.3125 11.875 3.3125C11.875 4.3125 11.0625 5.25 10 5.25C8.9375 5.25 8.125 4.375 8.125 3.3125C8.125 2.25 8.9375 1.4375 10 1.4375ZM1.4375 10C1.4375 8.9375 2.3125 8.125 3.375 8.125C4.4375 8.125 5.25 8.9375 5.25 10C5.25 11.0625 4.375 11.875 3.375 11.875C2.25 11.875 1.4375 11.0625 1.4375 10ZM10 18.5625C8.9375 18.5625 8.125 17.75 8.125 16.6875C8.125 15.625 8.9375 14.8125 10 14.8125C11.0625 14.8125 11.875 15.6875 11.875 16.6875C11.875 17.75 11.0625 18.5625 10 18.5625ZM12.9375 15.125C12.375 14 11.25 13.3125 10 13.3125C8.75 13.3125 7.625 14.0625 7.0625 15.125C6.125 14.5625 5.375 13.875 4.875 12.9375C6 12.375 6.6875 11.25 6.6875 10C6.6875 8.75 5.9375 7.625 4.875 7.0625C5.4375 6.125 6.1875 5.375 7.0625 4.875C7.625 5.9375 8.75 6.6875 10 6.6875C11.25 6.6875 12.375 5.9375 12.9375 4.875C13.875 5.4375 14.625 6.125 15.125 7.0625C14.0625 7.625 13.3125 8.75 13.3125 10C13.3125 11.25 14.0625 12.375 15.125 12.9375C14.625 13.875 13.875 14.625 12.9375 15.125C12.9375 15.125 13 15.125 12.9375 15.125ZM16.6875 11.875C15.625 11.875 14.8125 11 14.8125 10C14.8125 9 15.6875 8.125 16.6875 8.125C17.75 8.125 18.625 8.9375 18.625 10C18.5625 11.0625 17.75 11.875 16.6875 11.875Z'></path>
    </Icon>
  );
};

export default CommunitiesCircles;
