import React, { Component } from 'react';
import Skill from './Skill';

export default class SkillSet extends Component {

    constructor(props) {
        super(props);

		const basePath = 'skill_logos/';

        this.state = {
            skills: [
				{
                    name: 'TypeScript',
                    level: 9,
                    image: basePath + 'ts-logo.webp',
                },
                {
                    name: 'JavaScript',
                    level: 9,
                    image: basePath + 'js-logo.png',
                },
				{
                    name: 'Node',
                    level: 8,
                    image: basePath + 'node-logo.png',
                },
                {
                    name: 'React',
                    level: 9,
                    image: basePath + 'react-logo-3.png',
                },
                {
                    name: 'Redux',
                    level: 8,
                    image: basePath + 'redux-logo-3.png',
                },
                {
                    name: 'Vue',
                    level: 7,
                    image: basePath + 'vue-logo.png',
                },
                {
                    name: 'Angular',
                    image: basePath + 'angular-logo.svg',
                    level: 5,
                },
				{
                    name: 'GraphQL',
                    level: 7,
                    image: basePath + 'terraform-logo.png',
                },
				{
                    name: 'Apollo',
                    level: 7,
                    image: basePath + 'aws-logo.png',
                },
				{
                    name: 'AWS',
                    level: 7,
                    image: basePath + 'apollo-logo.png',
                },
				{
                    name: 'Terraform',
                    level: 7,
                    image: basePath + 'graphql-logo.png',
                },
				{
                    name: 'Material-UI',
                    level: 8,
                    image: basePath + 'material-ui-logo.jpg',
                },
                {
                    name: 'PHP',
                    level: 7,
                    image: basePath + 'php-logo.png',
                },
                {
                    name: 'Laravel',
                    level: 7,
                    image: basePath + 'laravel-logo.png',
                },
                {
                    name: 'Socket.io',
                    level: 6,
                    image: basePath + 'socket-io-logo.svg',
                },
                {
                    name: 'jQuery',
                    level: 9,
                    image: basePath + 'jquery-logo.png',
                },
                {
                    name: 'HTML',
                    level: 9,
                    image: basePath + 'html5-logo.png',
                },
                {
                    name: 'CSS',
                    level: 8,
                    image: basePath + 'css3-logo.png',
                },
                {
                    name: 'SASS',
                    level: 8,
                    image: basePath + 'sass-logo.png',
                },
                {
                    name: 'Bootstrap',
                    level: 8,
                    image: basePath + 'bootstrap-logo.png',
                },
                {
                    name: 'Python',
                    level: 3,
                    image: basePath + 'python-logo.png',
                },
                {
                    name: 'SQL',
                    level: 7,
                    image: basePath + 'sql-logo.png',
                },
                {
                    name: 'MongoDB',
                    level: 6,
                    image: basePath + 'mongo-db-logo.png',
                },
                {
                    name: 'SysAdmin',
                    level: 7,
                    image: basePath + 'sys-admin.png',
                },
                {
                    name: 'GIT',
                    level: 9,
                    image: basePath + 'git-logo.png',
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
