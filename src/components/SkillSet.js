import React, { Component } from 'react';
import Skill from './Skill';

export default class SkillSet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    name: 'JavaScript',
                    level: 9,
                    image: 'js-logo.png',
                },
                {
                    name: 'React',
                    level: 9,
                    image: 'react-logo-3.png',
                },
                {
                    name: 'Redux',
                    level: 8,
                    image: 'redux-logo-3.png',
                },
                {
                    name: 'Vue',
                    level: 7,
                    image: 'vue-logo.png',
                },
                {
                    name: 'Angular',
                    image: 'angular-logo.svg',
                    level: 6,
                },
                {
                    name: 'PHP',
                    level: 7,
                    image: 'php-logo.png',
                },
                {
                    name: 'Laravel',
                    level: 7,
                    image: 'laravel-logo-2.png',
                },
                {
                    name: 'Node',
                    level: 8,
                    image: 'node-logo.png',
                },
                {
                    name: 'Socket.io',
                    level: 6,
                    image: 'socket-io-logo.svg',
                },
                {
                    name: 'jQuery',
                    level: 9,
                    image: 'jquery-logo-2.png',
                },
                {
                    name: 'HTML',
                    level: 9,
                    image: 'html5-logo.png',
                },
                {
                    name: 'CSS',
                    level: 8,
                    image: 'css3-logo.png',
                },
                {
                    name: 'SASS',
                    level: 8,
                    image: 'sass-logo.png',
                },
                {
                    name: 'Bootstrap',
                    level: 8,
                    image: 'bootstrap-logo.png',
                },
                {
                    name: 'Python',
                    level: 3,
                    image: 'python-logo.png',
                },
                {
                    name: 'SQL',
                    level: 7,
                    image: 'sql-logo.png',
                },
                {
                    name: 'MongoDB',
                    level: 6,
                    image: 'mongo-db-logo.png',
                },
                {
                    name: 'SysAdmin',
                    level: 7,
                    image: 'sys-admin-4.png',
                },
                {
                    name: 'GIT',
                    level: 9,
                    image: 'git-logo.png',
                },
            ],
        };
    }

    render() {
        return (
            <ul className="skill-set">
                {this.state.skills.map((skill) => {
                    return <Skill key={skill.name} name={skill.name} image={skill.image} />
                })}
            </ul>
        );
    }
}
