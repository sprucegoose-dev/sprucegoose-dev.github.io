import { Routes, Route, useLocation } from 'react-router-dom';

import './style/style.scss';
import ShortFiction from './components/ShortFiction';
import Homepage from './components/Homepage';
import MainMenu from './components/MainMenu';

export default function App() {
    const location = useLocation();
    const isShortFictionPage = location.pathname === '/short-fiction';

    return (
        <main>
            <MainMenu />
            <header className={`header${isShortFictionPage ? ' short-fiction' : ''}`}>
                <div className={`header-inner${isShortFictionPage ? ' short-fiction' : ''}`}>
                    <p className="eyebrow">Morgan Polak <span>///</span> Senior software engineer</p>
                    {isShortFictionPage ? (
                        <>
                            <h1>Stories with a little<br /><em>magic in the margins.</em></h1>
                            <p className="header-summary">Short fiction, poetry, and odd little worlds.</p>
                        </>
                    ) : (
                        <>
                            <h1>Building useful things<br /><em>with a little mischief.</em></h1>
                            <p className="header-summary">Full-stack engineer, board game designer, creator of digital game adaptations, and fiction writer based in the UK.</p>
                            <div className="header-actions">
                                <a className="button button-primary" href="#projects">See selected work <span aria-hidden="true">-&gt;</span></a>
                                <a className="button button-quiet" href="#contact">Start a conversation</a>
                            </div>
                        </>
                    )}
                </div>
            </header>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Homepage />}/>
                    <Route path="/short-fiction" element={<ShortFiction />} />
                </Routes>
            </div>
            <section className="section copyright-notice">
                &copy; {new Date().getFullYear()} Morgan Polak
            </section>
        </main>
    );
}
