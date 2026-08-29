import React from 'react';
import './TransformingSun.scss';

export default function TransformingSun() {
  return (
    <div className="transforming-sun" role="img" aria-label="Animated symbol transforming between a sun, book, D20 die, and computer screen">
      <svg
        className="transforming-sun__svg"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base / Sun Circle */}
        <circle
          className="sun-shape"
          cx="100"
          cy="100"
          r="80"
          fill="#EBCB6B"
        />

        {/* Book State Details */}
        <g className="book-shape" stroke="#5A4E29" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 100 50 L 100 150" />
          <path d="M 45 60 Q 72 52 100 60 Q 128 52 155 60 L 155 140 Q 128 132 100 140 Q 72 132 45 140 Z" fill="#EBCB6B" />
          <path d="M 55 80 Q 77 74 95 80" />
          <path d="M 55 100 Q 77 94 95 100" />
          <path d="M 105 80 Q 123 74 145 80" />
          <path d="M 105 100 Q 123 94 145 100" />
        </g>

        {/* D20 State Details */}
        <g className="d20-shape" stroke="#5A4E29" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="100,35 155,65 155,135 100,165 45,135 45,65" fill="#EBCB6B" />
          <polyline points="45,65 100,95 155,65" />
          <polyline points="45,135 100,95 155,135" />
          <line x1="100" y1="95" x2="100" y2="165" />
          <text x="100" y="78" textAnchor="middle" fill="#5A4E29" fontSize="20" fontWeight="bold" fontFamily="sans-serif" stroke="none">20</text>
        </g>

        {/* Computer State Details */}
        <g className="computer-shape" stroke="#5A4E29" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="45" y="45" width="110" height="80" rx="6" fill="#EBCB6B" />
          <path d="M 80 125 L 70 150 L 130 150 L 120 125" fill="#EBCB6B" />
          <line x1="60" y1="155" x2="140" y2="155" />
          <circle className="computer-cursor" cx="70" cy="85" r="4" fill="#5A4E29" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
