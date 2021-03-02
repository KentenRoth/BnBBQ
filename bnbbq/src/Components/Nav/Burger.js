import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const BurgerStyle = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 12px;
	right: 20px;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 4;
	display: none;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) => (open ? '#010101' : '#F0F0F0')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.4s linear;
	}

	div:nth-child(1) {
		transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
	}

	div:nth-child(2) {
		transform: ${({ open }) =>
			open ? 'translateX(100%)' : 'translateX(0)'};
		opacity: ${({ open }) => (open ? 0 : 1)};
	}

	div:nth-child(3) {
		transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
	}
`;

const Burger = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<BurgerStyle open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</BurgerStyle>
			<RightNav open={open} />
		</>
	);
};

export default Burger;
