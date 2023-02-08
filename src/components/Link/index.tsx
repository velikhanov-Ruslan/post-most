import React, { FC } from 'react'
import "./index.sass";

type LinkProps = {
	text: string,
}

const Link: FC<LinkProps> = ({
	text,
}) => {
	return (
		<a
			className='link'
			href="#"
		>
			{text && text}
		</a>
	)
}

export default Link