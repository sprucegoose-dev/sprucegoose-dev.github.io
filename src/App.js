import React, { Component } from 'react';
import SkillSet from './components/skill-set';
import TimelineEvent from './components/timeline-event';
import Project from './components/project';
import ContactForm from './components/contact-form';
import Separator from './components/separator';
import { slide as Menu } from 'react-burger-menu';
import './style/style.scss';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }

    onMenuClick(event) {
        event.preventDefault();

        this.setState({
            menuOpen: false
        });

        const $target = document.querySelector(`[data-anchor='${event.target.getAttribute('href')}']`);

        $target.scrollTo({
            behavior: "smooth",
        });
    }

    render() {
        return (
            <main className="row">
                {/* <Menu isOpen={this.state.menuOpen}>
                    <a className="menu-item" href="#in-a-nutshell" onClick={(event) => this.onMenuClick(event)}>In A Nutshell</a>
                    <a className="menu-item" href="#languages-and-frameworks" onClick={(event) => this.onMenuClick(event)}>Languages & Frameworks</a>
                    <a className="menu-item" href="#education" onClick={this.closeMenu}>Education</a>
                    <a className="menu-item" href="#projects" onClick={(event) => this.onMenuClick(event)}>Recent Projects</a>
                    <a className="menu-item" href="#employment" onClick={(event) => this.onMenuClick(event)}>Employment History</a>
                    <a className="menu-item" href="#languages" onClick={(event) => this.onMenuClick(event)}>Actual Languages</a>
                    <a className="menu-item" href="#contact" onClick={(event) => this.onMenuClick(event)}>Contact</a>
                </Menu> */}
                <header className="header">
                    <img src="airplane.png" className="header-image" />
                    <span className="tag-line">
                        Web Developer ^_^<br/>
                        Fiction Writer <span className="tag-line-emoji">o_O</span><br/>
                        Game Programmer :)
                    </span>
                </header>
                <div className="main col-md-12">
                    <span className="title" data-anchor="#in-a-nutshell">In A Nutshell</span>
                    <section className="intro clearfix">
                        <div className="aside aside-right short">
                            <img src="walnut.png" className="image" />
                        </div>
                        <div className="content">
                            <p>
                                Welcome!
                            </p>
                            <p>
                                My name is Morgan Polak and I'm a full-stack web developer specializing in front-end applications written in React, Vue,
                                and Angular (in that order). I started out working in PHP (Laravel 5+), and NodeJs, but have
                                since transitioned to doing primarily front-end work.
                            </p>
                            <p>
                                I graduated from Hunter College, New York, back in 2011 with a degree in English Literature.
                            </p>
                            <p>
                                In 2015, after I'd been dabbling with programming for a few years, I started working
                                in the field, and it's been my profession ever since.
                            </p>
                            <p>
                                In 2020, during lockdown, I created a digital adaptation of one of my favourite board games, War Chest.
                                You can check it out on <a href="https://warchestonline.com/" target="_blank">warchestonline.com</a>.
                                There are over 30,000 registered users, and over 450,000 games have been played.
                            </p>
                            <p>
                                In 2021, I self-published my first fantasy novel, <a href="https://www.amazon.co.uk/Dimsdales-Fire-M-Polak/dp/1739911504" target="_blank">
                                Dimsdale's Fire</a>. It's about a protagonist who develops a mysterious skin rash that releases magic at random.
                                He must go on a quest to find a cure and try not to get in his own way.
                            </p>
                        </div>
                    </section>
                    <span className="title" data-anchor="#languages-and-frameworks">Languages & Frameworks</span>
                    <section className="languages-and-frameworks">
                        <SkillSet />
                    </section>
                    <span className="title" data-anchor="#projects">Recent Projects</span>
                    <section className="projects">
                        <div className="content clearfix">
                            <Project
                                thumbnail="warchest-screenshot.png"
                                title="warchestonline.com"
                                link="https://warchestonline.com"
                                logo="warchest-logo.png"
                                description="War Chest is a war-themed abstract strategy game where two or four players
                                    compete to control bases on a board using military units with unique abilities. This
                                    digital adaptation of the game is a personal project that I developed over a 3-4 month
                                    period. The project is written in VueJs for the front-end and NodeJs for the backend,
                                    and utilizes web sockets for real time updates of the game state."
                                technologies={['Vue.js', 'Node.js', 'Socket.io', 'MySQL']}
                            />
                            <Separator />
                            <Project
                                thumbnail="tr-word-add-in-screenshot.png"
                                title="Word Add-in"
                                link="https://appsource.microsoft.com/en-us/product/office/WA200000668"
                                logo="tr-logo.svg"
                                description="The ThoughtRiver Prescreen Word add-in helps lawyers remediate contracts
                                    right in MS Word,  providing a risk analysis, advice, and suggested wording. I've
                                    been the project lead from its early stages, developing the application in React and
                                    integrating it with the Word JavaScript API."
                                technologies={['React/Redux', 'Word JavaScript API']}
                            />
                            <Project
                                thumbnail="pizzahut-screenshot.png"
                                title="pizzahut.co.il"
                                link="https://www.pizzahut.co.il"
                                logo="pizzahut-logo.gif"
                                description="PizzaHut needs no introduction. No pizza boasts a crust quite as thick (or greasy),
                                    which is why it's my personal favorite. I worked on PizzaHut Israel's website,
                                    admin panel, and API, as well as created an automated service for pulling
                                    orders from external websites."
                                technologies={['Laravel 5.2', 'AngularJs/Redux', 'Node.js', 'MySQL']}
                            />
                            <Separator />
                            <Project
                                thumbnail="boom25-screenshot.png"
                                title="boom25.com"
                                link="https://www.boom25.com"
                                logo="boom25-logo.jpg"
                                description="Boom25 took the United Kingdom by storm, offering full cashback
                                    on purchases of any amount for every 25th buyer. I developed Boom's
                                    admin panel, created an automatic service for pulling transactions from its
                                    affiliates' APIs, and added features to the front-end."
                                technologies={['Laravel 5.2', 'React/Redux', 'Node.js', 'MongoDB']}
                            />
                            <Separator />
                            <Project
                                thumbnail="nickname-screenshot.png"
                                title="nickname.co.il"
                                link="https://www.nickname.co.il"
                                logo="nickname-logo.svg"
                                description="Nickname offers personalized products such as books, lunchboxes, stickers, etc.,
                                    for children and adults.
                                    I developed their new back-end system, which includes a CMS, CRM,
                                    and operations management, as well as worked on the API and front-end."
                                technologies={['Laravel 5.1', 'React/Redux', 'MySQL']}
                            />
                            <Separator />
                            <Project
                                thumbnail='burger-new.png'
                                title="app.burgeranch.co.il"
                                link="https://app.burgeranch.co.il"
                                logo="burgeranch-logo.png"
                                description="Burgeranch is one of the leading hamburger fast-food chains in Israel. I worked on their
                                    back-end system, as well as maintained and added features to their mobile site."
                                technologies={['Codeigniter 3.0', 'AngularJs', 'MySQL']}
                            />
                        </div>
                    </section>
                    <span className="title" data-anchor="#employment">Employment History</span>
                    <section className="employment timeline">
                    <TimelineEvent date="Jan 2019 - Present"
                                    side="right"
                                    title="Applications Engineer at ThoughtRiver, Ltd."
                                    subtitle="Cambridge, United Kingdom"
                                    description="Senior front-end developer at a company that leverages AI and Natural Language Processing (NLP) to assess risks in legal contracts.

                                    Project lead on the latest flagship product - a contract pre-screening add-in for MS Word.

                                    Actively developing new features as well as maintaining existing projects."
                                    markerImg="sun.png"
                        />
                        <TimelineEvent date="Oct 2015 - Oct 2018"
                                    side="right"
                                    title="Web Developer at DevSense, Ltd."
                                    subtitle="Haifa, Israel"
                                    description="Full-stack development in Laravel, Node, React, and other frameworks and technologies. Database management in MySQL and MongoDB. Server administration mostly on Ubuntu/Centos running Apache.

                Projects included admin panels, APIs, task automation, and front-end development."
                                    markerImg="mercury.png"
                        />
                        <TimelineEvent date="Dec 2012 - Sept 2015"
                                    side="right"
                                    title="Account Director at Voxme Software, Inc."
                                    subtitle="Tel Aviv, Israel"
                                    description="Responsible for sales of the company's mobile app, as well as training new clients and providing ongoing technical support."
                                    markerImg="venus.png"
                        />
                        <TimelineEvent date="Dec 2011 - Oct 2012"
                                    side="right"
                                    title="Content Manager at USHOPS"
                                    subtitle="Yokneam, Israel"
                                    description="Writing and editing content in English and Hebrew, and maintaining the company's blog, Facebook page, and marketing campaigns."
                                    markerImg="earth.png"
                        />
                        <TimelineEvent date="Feb 2006 - Sept 2011"
                                    side="right"
                                    title="Sales Coordinator at Sea & Air International, Inc."
                                    subtitle="New York, NY, USA"
                                    description="Coordinating international relocation services, including pricing, information, and communication with overseas agents."
                                    markerImg="mars.png"
                        />
                    </section>
                    <span className="title" data-anchor="#education">Education</span>
                    <section className="education timeline">
                        <TimelineEvent date="2014 - 2015"
                                    side="right"
                                    title="English Teaching Certificate"
                                    subtitle="Levinsky College of Education, Tel Aviv, Israel"
                                    markerImg="jupiter.png"
                        />
                        <TimelineEvent date="2006 - 2011"
                                    side="right"
                                    title="B.A. in English Literature, Language, and Criticism"
                                    subtitle="Hunter College, New York, NY, USA"
                                    description="3.892/4.00 GPA / Magna Cum Laude / Honors in the English Dept."
                                    markerImg="saturn.png"
                        />
                    </section>
                    <span className="title" data-anchor="#languages">And... Actual Languages!</span>
                    <section className="languages-section section text-center">
                        <ul className="languages">
                            <li><strong>Hebrew:</strong> Mother-tongue</li>
                            <li><strong>English:</strong> Mother-tongue level</li>
                        </ul>
                    </section>
                    <span className="title" data-anchor="#contact">Get In Touch</span>
                    <section className="section text-center clearfix">
                        <ContactForm />
                    </section>
                </div>
            </main>
        )
    }
}
