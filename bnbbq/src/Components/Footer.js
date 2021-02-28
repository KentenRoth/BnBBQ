import React from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footerLogo">
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
					alt="logo"
				/>
			</div>
			<div className="icon">
				<a href="https://www.instagram.com/beardsnbarbeque/">
					<FontAwesomeIcon icon={faInstagram} size={'2x'} />
				</a>
			</div>
			<div>
				<p></p>
			</div>
		</div>
	);
};

export default Footer;
