import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useNavigate } from 'react-router-dom';

export default function MainMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = (event) => {
        event.preventDefault();

        setMenuOpen(false);

        const target = event.target.getAttribute('data-target');

        if (target.charAt(0) === '/') {
            navigate(target);
            return;
        }

        const $target = document.querySelector(`[data-anchor='${target}']`);

        if ($target) {
            $target.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const handleMenuStateChange = ({ isOpen }) => {
        setMenuOpen(isOpen);
    };

    return (
        <Menu isOpen={menuOpen} onStateChange={handleMenuStateChange}>
            <span className="menu-item" data-target="/" onClick={(event) => handleMenuClick(event)}>Homepage</span>
            <span className="menu-item" data-target="#in-a-nutshell" onClick={(event) => handleMenuClick(event)}>In A Nutshell</span>
            <span className="menu-item" data-target="#languages-and-frameworks" onClick={(event) => handleMenuClick(event)}>Languages & Frameworks</span>
            <span className="menu-item" data-target="#education" onClick={(event) => handleMenuClick(event)}>Education</span>
            <span className="menu-item" data-target="#projects" onClick={(event) => handleMenuClick(event)}>Recent Projects</span>
            <span className="menu-item" data-target="#employment" onClick={(event) => handleMenuClick(event)}>Employment History</span>
            <span className="menu-item" data-target="#languages" onClick={(event) => handleMenuClick(event)}>Actual Languages</span>
            <span className="menu-item" data-target="#contact" onClick={(event) => handleMenuClick(event)}>Contact</span>
            <span className="menu-item" data-target="/blog" onClick={(event) => handleMenuClick(event)}>Blog</span>
        </Menu>
    );
}
