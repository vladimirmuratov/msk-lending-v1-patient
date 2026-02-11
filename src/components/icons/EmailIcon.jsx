import { memo } from 'react';

export const EmailIcon = memo(({ color = '#222222', size = 30 }) => (

    /*<svg width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21 12C21 10.1195 20.411 8.28625 19.3156 6.7577C18.2203 5.22915 16.6736 4.08209 14.893 3.47763C13.1123 2.87316 11.187 2.84166 9.38744 3.38754C7.58792 3.93341 6.00459 5.02925 4.85982 6.52115C3.71505 8.01304 3.06635 9.82604 3.00482 11.7055C2.94329 13.585 3.47203 15.4366 4.51677 17.0001C5.56152 18.5637 7.06979 19.7608 8.82975 20.4232C10.5897 21.0856 12.513 21.18 14.3294 20.6933"
            stroke={color} strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke={color} />
        <path d="M16 9V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12" stroke={color}
              strokeLinecap="round" />
    </svg>*/
    <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
            stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

));
