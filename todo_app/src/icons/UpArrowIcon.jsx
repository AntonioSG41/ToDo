import React from "react";

export default function UpArrowIcon({ size, strokeWidth }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
            className="feather feather-arrow-up"
            viewBox="0 0 24 24"
        >
            <path d="M12 19L12 5"></path>
            <path d="M5 12L12 5 19 12"></path>
        </svg>
    );
}
