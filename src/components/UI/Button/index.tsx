import React, { FC } from 'react';
import "./index.sass";

type ButtonProps = {
	text: string,
	icon: string
}

const Button: FC<ButtonProps> = ({
	text,
	icon
}) => {
	return (
		<button
		className='button'
		>
			{text && text}
			{icon && <img src={icon}/>}
		</button>
	)
}

export default Button