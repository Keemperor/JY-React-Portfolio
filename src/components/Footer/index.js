import React from "react";

function Footer() {
	return (
		<footer className="footer my-5">
			<div>
				<a
					href="https://github.com/Keemperor"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/Images/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/juan-jacobo-yarce-velez-1b71a838/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/Images/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://juanjacobyarce.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/Images/JY-SIP.png")}
						alt="Jacob Yarce Adobe Portfolio"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;