import React from "react";

export default function DownArrowIcon({ size, strokeWidth }) {
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
            className="feather feather-arrow-down"
            viewBox="0 0 24 24"
        >
            <path d="M12 5L12 19"></path>
            <path d="M19 12L12 19 5 12"></path>
        </svg>
    );
}
