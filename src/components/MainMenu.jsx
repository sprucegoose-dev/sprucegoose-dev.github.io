import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MainMenu({ isShortFictionPage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToHashTarget = (target) => {
        const normalizedTarget = target.charAt(0) === '#' ? target : `#${target}`;
        const $target = document.querySelector(`[data-anchor='${normalizedTarget}']`);

        if ($target) {
            $target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            scrollToHashTarget(location.hash);
        }, 50);

        return () => window.clearTimeout(timeoutId);
    }, [location.pathname, location.hash]);

    const handleMenuClick = (event) => {
        event.preventDefault();

        setMenuOpen(false);

        const target = event.target.getAttribute('data-target');

        if (target.startsWith('/')) {
            navigate(target);
            return;
        }

        if (target.startsWith('#')) {
            if (location.pathname !== '/') {
                navigate(`/${target}`);
                window.setTimeout(() => {
                    scrollToHashTarget(target);
                }, 100);
                return;
            }
        }

        scrollToHashTarget(target);
    };

    const handleMenuStateChange = ({ isOpen }) => {
        setMenuOpen(isOpen);
    };

    return (
        <Menu
            burgerBarClassName={isShortFictionPage ? 'short-fiction-burger-bars' : ''}
            className={isShortFictionPage ? 'short-fiction-menu' : ''}
            isOpen={menuOpen}
            onStateChange={handleMenuStateChange}
        >
            <span className="menu-item" data-target="/" onClick={(event) => handleMenuClick(event)}>Homepage</span>
            <span className="menu-item" data-target="#in-a-nutshell" onClick={(event) => handleMenuClick(event)}>In A Nutshell</span>
            <span className="menu-item" data-target="#languages-and-frameworks" onClick={(event) => handleMenuClick(event)}>Languages & Frameworks</span>
            <span className="menu-item" data-target="#education" onClick={(event) => handleMenuClick(event)}>Education</span>
            <span className="menu-item" data-target="#projects" onClick={(event) => handleMenuClick(event)}>Recent Projects</span>
            <span className="menu-item" data-target="#employment" onClick={(event) => handleMenuClick(event)}>Employment History</span>
            <span className="menu-item" data-target="#contact" onClick={(event) => handleMenuClick(event)}>Contact</span>
            <span className="menu-item" data-target="/short-fiction" onClick={(event) => handleMenuClick(event)}>Short Fiction</span>
        </Menu>
    );
}
