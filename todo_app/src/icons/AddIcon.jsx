import React from "react";

export default function AddIcon({ size, strokeWidth }) {
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
            className="feather feather-plus"
            viewBox="0 0 24 24"
        >
            <path d="M12 5L12 19"></path>
            <path d="M5 12L19 12"></path>
        </svg>
    );
}