import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
	color: #f0f0f0;
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	font-weight: 600;
	margin: 0;
	border-bottom-left-radius: 10px;

	li {
		padding: 18px 20px;
	}

	@media (max-width: 768px) {
		color: #010101;
		flex-flow: column nowrap;
		background: #7f7e7e;
		position: fixed;
		transform: ${({ open }) =>
			open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		max-height: 50vh;
		width: 200px;
		padding-top: 50px;
		text-align: left;
		transition: transform 0.4s ease-in-out;

		li {
			padding: 25px 0;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>
				<Link
					style={{ color: 'inherit', textDecoration: 'inherit' }}
					to="/"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					style={{ color: 'inherit', textDecoration: 'inherit' }}
					to="/about"
				>
					About
				</Link>
			</li>
			<li>
				<Link
					style={{ color: 'inherit', textDecoration: 'inherit' }}
					to="/beardBlog"
				>
					Beard Blog
				</Link>
			</li>
			<li>
				<Link
					style={{ color: 'inherit', textDecoration: 'inherit' }}
					to="/bbqPage"
				>
					BBQ Blog
				</Link>
			</li>
			<li>
				<Link
					style={{ color: 'inherit', textDecoration: 'inherit' }}
					to="/search"
				>
					Search
				</Link>
			</li>
		</Ul>
	);
};

export default RightNav;
