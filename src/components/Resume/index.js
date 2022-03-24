import React from "react";

function Resume() {
	return (
		<section>
			<div className="xcenter">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="xcenter">
				<a href={require("../../assets/resume/Jacob-Yarce-Resume-2020.pdf")} download>
					<h2>Download my Resume</h2>
				</a>
			</div>
      <div className="flex-column">
			<div className="flex-row mobile-row">
        <div className="d-flex flex-column">
				<h4 className="p-2">Front-End Proficiencies</h4>
				<ol className="p-2">
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>version control/Git</li> 
					<li>responsive design</li>
				</ol>
				</div>

        <div className="d-flex flex-column">
				<h4 className="p-2">Back-End Proficiencies</h4>
				<ol className="p-2">
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
        </div>
				
        </div>
        <div className="flex-row mobile-row">
        <div className="d-flex flex-column">
				<h4 className="p-2">Dev Tool Proficiencies</h4>
				<ol className="p-2">
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
        </div>
				
        <div className="d-flex flex-column">
				<h4 className="p-2">Database Proficiencies</h4>
				<ol className="p-2">
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
        </div>
        </div>
			</div>
		</section>
	);
}

export default Resume;