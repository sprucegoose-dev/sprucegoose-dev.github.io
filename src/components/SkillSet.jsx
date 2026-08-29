import Skill from './Skill';

const basePath = 'skill_logos/';

const skills = [
	{
		name: 'TypeScript',
		level: 9,
		color: '#3178C6',
		image: basePath + 'ts-logo.webp',
	},
	{
		name: 'JavaScript',
		level: 9,
		color: '#F7DF1E',
		image: basePath + 'js-logo.png',
	},
	{
		name: 'Node',
		level: 8,
		color: '#5FA04E',
		image: basePath + 'node-logo.png',
	},
	{
		name: 'React',
		level: 9,
		color: '#61DAFB',
		image: basePath + 'react-logo-3.png',
	},
	{
		name: 'Redux',
		level: 8,
		color: '#764ABC',
		image: basePath + 'redux-logo-3.png',
	},
	{
		name: 'Vue',
		level: 8,
		color: '#4FC08D',
		image: basePath + 'vue-logo.png',
	},
	{
		name: 'Angular',
		image: basePath + 'angular-logo.svg',
		level: 5,
		color: '#DD0031',
	},
	{
		name: 'GraphQL',
		level: 7,
		color: '#E10098',
		image: basePath + 'graphql-logo.webp',
	},
	{
		name: 'Apollo',
		level: 7,
		color: '#14252d',
		image: basePath + 'apollo-logo.png',
	},
	{
		name: 'AWS',
		level: 7,
		color: '#FF9900',
		image: basePath +'aws-logo.png',
	},
	{
		name: 'Terraform',
		level: 7,
		color: '#844FBA',
		image: basePath +'terraform-logo.png',
	},
	{
		name: 'Material-UI',
		level: 8,
		color: '#007FFF',
		image: basePath + 'material-ui-logo.jpg',
	},
	{
		name: 'PHP',
		level: 6,
		color: '#777BB4',
		image: basePath + 'php-logo.png',
	},
	{
		name: 'Laravel',
		level: 6,
		color: '#FF2D20',
		image: basePath + 'laravel-logo.png',
	},
	{
		name: 'Socket.io',
		level: 7,
		color: '#010101',
		image: basePath + 'socket-io-logo.svg',
	},
	{
		name: 'jQuery',
		level: 8,
		color: '#0769AD',
		image: basePath + 'jquery-logo.png',
	},
	{
		name: 'HTML',
		level: 9,
		color: '#E34F26',
		image: basePath + 'html5-logo.png',
	},
	{
		name: 'CSS',
		level: 8,
		color: '#1572B6',
		image: basePath + 'css3-logo.png',
	},
	{
		name: 'SASS',
		level: 8,
		color: '#CC6699',
		image: basePath + 'sass-logo.png',
	},
	{
		name: 'Bootstrap',
		level: 8,
		color: '#7952B3',
		image: basePath + 'bootstrap-logo.png',
	},
	{
		name: 'Python',
		level: 3,
		color: '#3776AB',
		image: basePath + 'python-logo.png',
	},
	{
		name: 'MySQL',
		level: 7,
		color: '#096c93',
		image: basePath + 'mysql-logo.png',
	},
	{
		name: 'MongoDB',
		level: 5,
		color: '#47A248',
		image: basePath + 'mongo-db-logo.png',
	},
	{
		name: 'SysAdmin',
		level: 7,
		color: '#4E5D6C',
		image: basePath + 'sys-admin.png',
	},
	{
		name: 'GIT',
		level: 9,
		color: '#F05032',
		image: basePath + 'git-logo.png',
	},
];

export default function SkillSet() {
    return (
        <ul className="skill-set">
            {skills.map((skill) => (
                <Skill key={skill.name} {...skill} />
            ))}
        </ul>
    );
}
