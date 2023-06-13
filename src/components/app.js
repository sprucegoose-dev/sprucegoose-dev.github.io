import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from '../containers/Main';
import Blog from '../containers/Blog';
import BlogPostPage from '../containers/BlogPostPage';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    render() {
        return (
            <Router>
                <main className="row">
                    <Menu isOpen={ this.state.menuOpen } >
                            <a className="menu-item" href="/" onClick={this.closeMenu}>Homepage</a>
                            <a className="menu-item" href="/#in-a-nutshell" onClick={this.closeMenu}>In A Nutshell</a>
                            <a className="menu-item" href="/#languages-and-frameworks" onClick={this.closeMenu}>Languages & Frameworks</a>
                            <a className="menu-item" href="/#education" onClick={this.closeMenu}>Education</a>
                            <a className="menu-item" href="/#projects" onClick={this.closeMenu}>Recent Projects</a>
                            <a className="menu-item" href="/#employment" onClick={this.closeMenu}>Employment History</a>
                            <a className="menu-item" href="/#languages" onClick={this.closeMenu}>Actual Languages</a>
                            <Link className="menu-item" onClick={this.closeMenu} to="/blog">Blog</Link>
                            <a className="menu-item" href="/#contact" onClick={this.closeMenu}>Contact</a>
                    </Menu>
                    <header className="header">
                        <img src="/airplane.png" className="header-image" />
                        <span className="tag-line">
                            Web Developer ^_^<br/>
                            Fiction Writer <span className="tag-line-emoji">o_O</span><br/>
                            Game Programmer :)
                        </span>
                    </header>
                    <div className="container">
                        <Route path="/blog/post/:id" component={BlogPostPage} />
                        <Route path="/blog" component={Blog} exact />
                        <Route path='/' component={Main} exact />
                    </div>
                    <footer className="footer">
                        <img src="/mountains.png" className="footer-image" />
                    </footer>
                </main>
            </Router>
        );
    }
}
