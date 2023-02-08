import React from 'react';
import "./index.sass";
import logo from "../../assets/img/logo.png";

const Logo = () => {
	return (
		<img
		className='logo'
			src={logo}
			alt="postman logo"
		/>
	)
}

export default Logo