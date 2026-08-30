import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useLocation, useNavigate } from 'react-router-dom';

import { MENU_ITEMS } from '../siteConfig';

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

export default function MainMenu({ isShortFictionPage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const scrollFrame = window.requestAnimationFrame(() => {
            scrollToHashTarget(location.hash);
        });

        return () => window.cancelAnimationFrame(scrollFrame);
    }, [location.pathname, location.hash]);

    const handleMenuClick = (event) => {
        event.preventDefault();
        setMenuOpen(false);

        const target = event.target.getAttribute('data-target');

        if (!target) {
            return;
        }

        if (target.startsWith('/')) {
            navigate(target);
            return;
        }

        if (target.startsWith('#')) {
            if (location.pathname !== '/') {
                navigate({ pathname: '/', hash: target });
                return;
            }

            navigate({ hash: target });
            return;
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
            {MENU_ITEMS.map((item) => (
                <span
                    key={item.label}
                    className="menu-item"
                    data-target={item.target}
                    onClick={(event) => handleMenuClick(event)}
                >
                    {item.label}
                </span>
            ))}
        </Menu>
    );
}
