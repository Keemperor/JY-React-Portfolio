import React from "react";
import Navigation from "../Nav";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header >
			<div className="footer">
				<h2 >Jacob Yarce React Portfolio</h2>
			</div>
			<div className="footer">
				<Navigation 
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;