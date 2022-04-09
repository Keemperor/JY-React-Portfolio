import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'GG Denim',
			description:
				'A stylish web site for an up and coming clothes brand',
			image: 'GG-Denim.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'React',
				'GrapQL',
				'Node.js',
				'bootstrap',
				'JQuery',
			],
			github: 'https://github.com/Abduler21/brand-template',
			deployed: 'https://brand-to-death.herokuapp.com/Collections',
		},
		{
			name: 'Did I Win?',
			description:
				'This is a page that allows the user to keep tabs of all their superbowl pools in one consistent location. The pools are updated quarterly and the results known on the spot to brag to friends and family.',
			image: 'Did-I-Win-Pool-Site-Page.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/Keemperor/Did-I-Win',
			deployed: 'https://keemperor.github.io/Did-I-Win/',
		},
		{
			name: 'Tech Blog',
			description:
				'This tech blog allows you to share stories, comments and knowledge about technology with other like minded individuals',
			image: 'jy-mvc-tech-blog.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'SQL database',
				'Express & Sequelize',
			],
			github: 'https://github.com/Keemperor/JY-MVC-Tech-Blog',
		},
		{
			name: 'Scheduler',
			description:
				'An app designed to let you schedule your time during the day and keep you on track and on time',
			image: 'scheduler-challenge-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Keemperor/JY-Scheduler-Challenge',
			deployed: 'https://keemperor.github.io/JY-Scheduler-Challenge/',
		}, 
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'JY-Weather-Dashboard.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Keemperor/JY-Weather-Dashboard',
			deployed: 'https://keemperor.github.io/JY-Weather-Dashboard/',
		},

	];

	return (
		<section>
			<div className="xcenter">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					 <li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				
				</ul>
			
			</div>
		</section>
	);
}

export default Portfolio;