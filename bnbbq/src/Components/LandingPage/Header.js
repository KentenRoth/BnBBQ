import logo from '../../images/logo.png';

const Header = () => {
	return (
		<div className="heading">
			<div className="logoBox">
				<img src={logo} alt="logo" />
			</div>
		</div>
	);
};

export default Header;
