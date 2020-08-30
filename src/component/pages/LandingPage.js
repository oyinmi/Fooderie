/* jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import desktopImage from '../assets/images/desktopImage/hotel-breakfast-room-service.jpg';
import mobileImage from '../assets/images/mobileImage/hotel-breakfast-room-service.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	const imageUrl = useWindowWidth >= 650 ? desktopImage : mobileImage;

	return (
		<div className='landing' style={{ backgroundImage: `url(${imageUrl})` }}>
			<div className='landing-content'>
				<div className='pa3'>
					<p> Hungry? </p>
					<Link to='/menu'>
						<button className='welcome-button' style={{ borderRadius: '10%' }}>
							Welcome
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return windowWidth;
};

export default LandingPage;
