import Project from './Project';
import Separator from './Separator';
import SkillSet from './SkillSet';
import TimelineEvent from './TimelineEvent';
import ContactForm from './ContactForm';

export default function Homepage() {
    return (
        <div className="homepage col-md-12">
            <span id="in-a-nutshell" className="title" data-anchor="#in-a-nutshell">In A Nutshell</span>
            <section className="intro clearfix">
                <div className="aside aside-right short">
                    <img src="images/walnut.png" className="image" alt="Walnut" />
                </div>
                <div className="content">
                    <div>
                       I'm Morgan Polak, a full-stack engineer with over 10 years of experience building web applications with React, Vue, and Node.js.
                    </div>
                    <div>
                      I'm also a board game designer, creator of digital adaptations of board games, and fiction writer.
                    </div>
                    <div>
						During lockdown in 2020, I built a digital adaptation of one of my favourite board games, War Chest.
						<a href="https://warchestonline.com/" target="_blank" rel="noreferrer">War Chest Online</a> now has more than 50,000
						 registered users and has hosted over 1.5 million games.
                    </div>
                    <div>
						I've also designed five original board games, and in 2021 I self-published
						my first fantasy novel,
						<a href="https://www.amazon.co.uk/Dimsdales-Fire-M-Polak/dp/1739911504" target="_blank" rel="noreferrer">Dimsdale's Fire</a>
						 — a comedic adventure about a reluctant,
						out-of-shape hero whose mysterious skin rash has the unfortunate habit of releasing magic at random.
	                    </div>
					<div>
						I have a BA in English Literature from Hunter College in New York and an MA in English Studies from the University of Nottingham.
						 I also write short fiction, some of which you can find on the blog.
					</div>
                </div>
            </section>
            <span id="languages-and-frameworks" className="title" data-anchor="#languages-and-frameworks">Tech Stack</span>
            <section className="languages-and-frameworks">
                <SkillSet />
            </section>
            <span id="projects" className="title" data-anchor="#projects">Recent Projects</span>
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
            <span id="employment" className="title" data-anchor="#employment">Employment History</span>
            <section className="employment timeline">
				<TimelineEvent
                    date="Aug 2025 - Present"
                    side="right"
                    title="Senior Full-Stack Engineer at Neutreeno"
                    subtitle="Cambridge, United Kingdom"
                    description="Senior full-stack software engineer at a start-up that uses advanced emissions measurements to help companies decarbonize."
                    markerImg="sun.png"
                />
                <TimelineEvent
                    date="Apr 2023 - Aug 2025"
                    side="right"
                    title="Senior Engineer at Savi"
                    subtitle="United Kingdom (Remote)"
                    description="Senior full-stack developer at a company that specializes in coupons and promotions."
                    markerImg="mercury.png"
                />
                <TimelineEvent
                    date="Jan 2019 - Apr 2023"
                    side="right"
                    title="Applications Engineer at ThoughtRiver, Ltd."
                    subtitle="Cambridge, United Kingdom"
                    description="Senior front-end developer at a company that leverages AI and Natural Language Processing (NLP) to assess risks in legal contracts.

                        Project lead on the latest flagship product - a contract pre-screening add-in for MS Word.

                        Actively developing new features as well as maintaining existing projects."
                    markerImg="venus.png"
                />
                <TimelineEvent
                    date="Oct 2015 - Oct 2018"
                    side="right"
                    title="Web Developer at DevSense, Ltd."
                    subtitle="Haifa, Israel"
                    description="Full-stack development in Laravel, Node, React, and other frameworks and technologies. Database management in MySQL and MongoDB. Server administration mostly on Ubuntu/Centos running Apache.

    Projects included admin panels, APIs, task automation, and front-end development."
                    markerImg="earth.png"
                />
                <TimelineEvent
                    date="Dec 2012 - Sept 2015"
                    side="right"
                    title="Account Director at Voxme Software, Inc."
                    subtitle="Tel Aviv, Israel"
                    description="Responsible for sales of the company's mobile app, as well as onboarding new clients and providing ongoing technical support."
                    markerImg="mars.png"
                />
                <TimelineEvent
                    date="Dec 2011 - Oct 2012"
                    side="right"
                    title="Content Manager at USHOPS"
                    subtitle="Yokneam, Israel"
                    description="Writing and editing content in English and Hebrew, and maintaining the company's blog, Facebook page, and marketing campaigns."
                    markerImg="jupiter.png"
                />
            </section>
            <span id="education" className="title" data-anchor="#education">Education</span>
            <section className="education timeline">
                <TimelineEvent
                    date="2022 - Present"
                    side="right"
                    title="MA in English Studies"
                    subtitle="University of Nottingham, Nottingham, United Kingdom"
                    markerImg="saturn.png"
                />
                <TimelineEvent
                    date="2014 - 2015"
                    side="right"
                    title="English Teaching Certificate"
                    subtitle="Levinsky College of Education, Tel Aviv, Israel"
                    markerImg="uranus.png"
                    attribution="vectorspoint - Flaticon"
                />
                <TimelineEvent
                    date="2006 - 2011"
                    side="right"
                    title="B.A. in English Literature, Language, and Criticism"
                    subtitle="Hunter College, New York, NY, USA"
                    description="3.892/4.00 GPA / Magna Cum Laude / Honors in the English Dept."
                    markerImg="neptune.png"
                    attribution="Freepik - Flaticon"
                />
                <div className="timeline-end-marker" aria-label="Asteroid marker">
                    <img src="images/asteroid.png" className="image" alt="" />
                </div>
            </section>
            <span id="languages" className="title" data-anchor="#languages">And... Actual Languages!</span>
            <section className="languages-section section text-center">
                <ul className="languages">
                    <li><strong>Hebrew:</strong> Native speaker</li>
                    <li><strong>English:</strong> Native-speaker level</li>
                </ul>
            </section>
            <span id="contact" className="title" data-anchor="#contact">Get In Touch</span>
            <section className="section text-center clearfix">
                <ContactForm />
            </section>
        </div>
    );
}
