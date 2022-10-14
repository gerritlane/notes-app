import React from 'react';

const currentYear = new Date().getFullYear();

function Footer () {
	return (
		<div className='footer'>
			<div className='footer__text'>
				web design by <a href="https://gerritlane.github.io/">@gerritlane</a> {currentYear}
			</div>
		</div>
	);
};

export default Footer;