import React from 'react';

type LogoProps = {
    width: string;
    height: string;
};

const Logo: React.FC<LogoProps> = ({ width, height }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.9996 2H38.4996C35.9996 3 31.0996 6.3 31.4996 11.5C31.8996 16.7 36.333 19.6667 38.4996 20.5H51.5C53.3335 21 57.5358 23.4648 58 29.5C58.5 36 53.9999 38 51.5 38.5H31.4996" stroke="black" strokeWidth="3"/>
            <path d="M28 2H16.5C11.3333 3.33333 1.5 8.77147 1.5 20M1.5 20C1.5 32.5 13.0002 37.5 15.0002 38C16.6002 38.4 29.3333 38.5 32 38.5M1.5 20H27.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="bevel"/>
        </svg>
    );
};

export default Logo;