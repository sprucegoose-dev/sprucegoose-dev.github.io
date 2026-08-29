import { Routes, Route } from 'react-router-dom';

import './style/style.scss';
import Blog from './components/Blog';
import Homepage from './components/Homepage';
import MainMenu from './components/MainMenu';

export default function App() {
    return (
        <main>
            <MainMenu />
            <header className="header">
                <div className="header-inner">
                    <p className="eyebrow">Morgan Polak <span>///</span> Senior software engineer</p>
                    <h1>Building useful things<br /><em>with a little mischief.</em></h1>
                    <p className="header-summary">Full-stack engineer, board game designer, digital adapter, and fiction writer based in the UK.</p>
                    <div className="header-actions">
                        <a className="button button-primary" href="#projects">See selected work <span aria-hidden="true">-&gt;</span></a>
                        <a className="button button-quiet" href="#contact">Start a conversation</a>
                    </div>
                    <div className="header-stamp" aria-hidden="true">Since<br />2011</div>
                </div>
            </header>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Homepage />}/>
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
            <section className="section copyright-notice">
                &copy; {new Date().getFullYear()} Morgan Polak
            </section>
        </main>
    );
}
