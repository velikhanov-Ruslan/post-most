import React, { FC, useState } from "react";
import { FieldTypes } from "../../../data/types";
import "./index.sass";
import cn from "classnames";
import showIcon from "../../../assets/img/show.svg";

type FieldTypeProps = {
	showIconPassword: boolean,
	value?: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	error?: {
		security: string,
		password: string,
		confirmation: string,
	}
};

const Field: FC<FieldTypes & FieldTypeProps> =
	({
		name,
		placeholder,
		required,
		type,
		value,
		onChange,
		error,
		...props
	}) => {

		const [isType, setIsType] = useState(true);

		const setFieldType = () => {
			if (type === 'password') {
				setIsType(prev => !prev);
			}
		}

		return (
			<label
				className={cn("field", { required })}
			>
				{required && <span>*</span>}
				<input
					value={value}
					onChange={onChange}
					className="p1"
					type={
						type === 'password' ?
							isType ?
								"password" : "text"
							: type
					}
					placeholder={placeholder}
					required={required}
					name={name}
				/>
				{
					props.showIconPassword &&
					<img onClick={setFieldType} src={showIcon}></img>
				}
				{
					//@ts-ignore
					error && <span>{error[name]}</span>
				}
			</label>
		)
	}

export default Field;