import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({
  home, feed, progress, settings,
}) => (
  <footer className="bg-footer bg-opacity-80 bottom-0 fixed w-full flex justify-between shadow-md border-t border-blue-900">
    <div className="border-r w-1/4 flex items-center justify-center py-3">
      <Link to={home}>
        <svg
          className="h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 101 101"
          fill="#fff"
        >
          {' '}
          <path d="M82.2 79.8h-61v-61c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v63.4c0 1.3 1.1 2.4 2.4 2.4h63.4c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4z" />
          <path d="M44.5 70.5V35.9c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v34.7c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.5zM32.9 70.5V35.9c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4v34.7c0 1.3 1.1 2.4 2.4 2.4 1.3-.1 2.4-1.1 2.4-2.5zM67.8 70.5V35.9c0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4v34.7c0 1.3 1.1 2.4 2.4 2.4 1.3-.1 2.4-1.1 2.4-2.5zM79.4 70.5V53.2c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v17.3c0 1.3 1.1 2.4 2.4 2.4s2.4-1 2.4-2.4zM56.1 70.5V53.2c0-1.3-1.1-2.4-2.4-2.4s-2.4 1.1-2.4 2.4v17.3c0 1.3 1.1 2.4 2.4 2.4s2.4-1 2.4-2.4z" />
        </svg>
      </Link>
    </div>
    <div className="w-1/4 flex items-center justify-center border-r">
      <Link to={feed}>
        <svg
          className="h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M21.92 6.62a1 1 0 00-.54-.54A1 1 0 0021 6h-5a1 1 0 000 2h2.59L13 13.59l-3.29-3.3a1 1 0 00-1.42 0l-6 6a1 1 0 000 1.42 1 1 0 001.42 0L9 12.41l3.29 3.3a1 1 0 001.42 0L20 9.41V12a1 1 0 002 0V7a1 1 0 00-.08-.38z" />
        </svg>
      </Link>
    </div>
    <div className="w-1/4 flex items-center justify-center border-r">
      <Link to={progress}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="h-6"
        >
          <path
            fill="#fff"
            d="M35.41 29.18l26.94.65h.03c.52 0 .95-.42.97-.94.2-7.72-2.7-14.97-8.17-20.44A27.818 27.818 0 0037.91.39c-.52-.05-1 .35-1.05.88l-2.41 26.85c-.02.26.07.53.24.73.2.2.45.32.72.33zm27.65 6.2l-26.95-.65c-.43 0-.76.22-.91.58-.16.37-.08.79.2 1.07l19.07 19.08c.18.18.43.28.69.28.25 0 .5-.1.69-.28 5.1-5.1 8-11.88 8.16-19.09 0-.53-.42-.98-.95-.99z"
          />
          <path
            fill="#0fff00"
            d="M28.94 35.33l2.36-26.4c.05-.53-.35-1-.88-1.05a27.834 27.834 0 00-22.24 8.06c-8.3 8.3-10.53 21.02-5.55 31.61 1.36 2.93 3.23 5.59 5.55 7.9 5.44 5.44 12.6 8.17 19.75 8.17s14.3-2.73 19.75-8.17c.38-.38.38-1 0-1.38L28.94 35.33z"
          />
        </svg>
      </Link>
    </div>
    <div className="w-1/4 flex items-center justify-center">
      <Link to={settings}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <g data-name="Layer 2">
            <g data-name="more-horizotnal">
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="12" r="2" />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  </footer>
);

export default Footer;

Footer.defaultProps = {
  home: '',
  feed: '',
  progress: '',
  settings: '',
};

Footer.propTypes = {
  home: PropTypes.string,
  feed: PropTypes.string,
  progress: PropTypes.string,
  settings: PropTypes.string,
};
