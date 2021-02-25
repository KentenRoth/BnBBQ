const Header = () => {
	return (
		<div className="heading">
			<div className="logoBox">
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
					alt="logo"
				/>
			</div>
		</div>
	);
};

export default Header;
