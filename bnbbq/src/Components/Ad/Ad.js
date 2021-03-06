import React from 'react';

class Ad extends React.Component {
	componentDidMount() {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}

	render() {
		return (
			<ins
				className="adsbygoogle"
				style={{
					display: 'inline-block',
					width: '300px',
					height: '100px',
				}}
				data-ad-client="ca-pub-4578979771649285"
				data-ad-slot="7893857803"
			></ins>
		);
	}
}

export default Ad;
