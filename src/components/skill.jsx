import React from 'react';

export default function Skill({ name, image, level, color }) {
    return (
        <li className="skill" style={{ '--skill-color': color, '--skill-level': `${level * 10}%` }}>
            <div className="progress-circle" aria-label={`${name}: ${level} out of 10`}>
                <span>
                    <img className="logo" src={`images/${image}`} alt="" title={name} />
                </span>
            </div>
            <span className="skill-name">{name}</span>
        </li>
    );
}
