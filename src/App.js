import React from 'react';

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
                <img src="images/airplane.png" className="header-image" alt="Airplane" />
                <span className="tag-line">
                    Web Developer ^_^<br />
                    Fiction Writer <span className="tag-line-emoji">o_O</span><br />
                    Game Programmer :)
                </span>
            </header>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Homepage />}/>
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </main>
    );
}
