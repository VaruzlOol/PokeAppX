import loader from './loader.svg';
import { useWindowSize } from '../../hooks/UseWindowSize';

function RootLoader(){
    const windowSize = useWindowSize();

    return(
    <div className = 'flex justify-center items-center' style = {{ height: windowSize.height - 10, width: windowSize.with - 10 }}>
        <label>Outlet Loader</label>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        fill="currentColor"
        aria-labelledby="loading-aria"
        preserveAspectRatio="none"
        viewBox="0 0 500 500"
        >
        <rect
            width="100%"
            height="100%"
            fill='url("#fill")'
            clipPath="url(#clip-path)"
        ></rect>
        <defs>
            <clipPath id="clip-path">
            <rect width="0" height="0" rx="0" ry="0"></rect>
            <rect width="301" height="150" x="113" y="198" rx="2" ry="2"></rect>
            <rect width="170" height="20" x="3" y="478" rx="2" ry="2"></rect>
            <rect width="170" height="20" x="330" y="12" rx="2" ry="2"></rect>
            </clipPath>
            <linearGradient id="fill">
            <stop offset="0.6" stopColor="#999">
                <animate
                attributeName="offset"
                dur="2s"
                keyTimes="0; 0.25; 1"
                repeatCount="indefinite"
                values="-2; -2; 1"
                ></animate>
            </stop>
            <stop offset="1.6" stopColor="#2b2b2b">
                <animate
                attributeName="offset"
                dur="2s"
                keyTimes="0; 0.25; 1"
                repeatCount="indefinite"
                values="-1; -1; 2"
                ></animate>
            </stop>
            <stop offset="2.6" stopColor="#999">
                <animate
                attributeName="offset"
                dur="2s"
                keyTimes="0; 0.25; 1"
                repeatCount="indefinite"
                values="0; 0; 3"
                ></animate>
            </stop>
            </linearGradient>
        </defs>
        </svg>
    </div>
    );
}

export default RootLoader;