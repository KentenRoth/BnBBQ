import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	color: $off-white;
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	margin: 0;
	border-bottom-left-radius: 10px;

	li {
		padding: 18px 20px;
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background: #7f7e7e;
		position: fixed;
		transform: ${({ open }) =>
			open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 25vh;
		width: 200px;
		padding-top: 50px;
		text-align: left;
		transition: transform 0.2s ease-in-out;

		li {
			padding: 20px 10px;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>Home</li>
			<li>About</li>
			<li>Beard Blog</li>
			<li>BBQ Blog</li>
		</Ul>
	);
};

export default RightNav;
