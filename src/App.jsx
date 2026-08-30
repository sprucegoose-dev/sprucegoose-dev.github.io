import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './style/style.scss';
import MainMenu from './components/MainMenu';
import { ROUTES } from './siteConfig';

export default function App() {
    const location = useLocation();
    const currentRoute = ROUTES.find((route) => route.path === location.pathname) ?? ROUTES[0];
    const isShortFictionPage = location.pathname === '/short-fiction';
    const { header } = currentRoute;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <main>
            <MainMenu isShortFictionPage={isShortFictionPage} />
            <header className={`header${isShortFictionPage ? ' short-fiction' : ''}`}>
                <div className={`header-inner${isShortFictionPage ? ' short-fiction' : ''}`}>
                    <p className="eyebrow">Morgan Polak <span>///</span> Senior software engineer</p>
                    <h1>
                        {header.title}
                        {header.emphasis ? <><br /><em>{header.emphasis}</em></> : null}
                    </h1>
                    <p className="header-summary">{header.summary}</p>
                    {header.actions ? (
                        <div className="header-actions">
                            {header.actions.map((action, index) => (
                                <a
                                    key={action.href}
                                    className={index === 0 ? 'button button-primary' : 'button button-quiet'}
                                    href={action.href}
                                >
                                    {action.label}
                                    {index === 0 ? <span aria-hidden="true"> -&gt;</span> : null}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </div>
            </header>
            <div className="container">
                <Routes>
                    {ROUTES.map((route) => {
                        const RouteComponent = route.page;
                        return <Route key={route.path} path={route.path} element={<RouteComponent />} />;
                    })}
                </Routes>
            </div>
            <section className="section copyright-notice">
                &copy; {new Date().getFullYear()} Morgan Polak
            </section>
        </main>
    );
}
