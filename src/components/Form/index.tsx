import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import Logo from '../Logo';
import Title from '../Title';
import Field from '../UI/Field'
import "./index.sass";
import dataJSON from "../../data/fields.json";
import { FieldTypes } from '../../data/types';
import Button from '../UI/Button';
import iconBtn from "../../assets/img/arrow.svg";
import Link from '../Link';
import user from "../../data/user.json";

const Form: FC = () => {
	const [fieldsData, setFieldsData] = useState<FieldTypes[]>([]);
	const [formData, setFormData] = useState<{ [T: string]: string }>({});
	const [error, setError] = useState({ security: "", password: "", confirmation: "" })

	useEffect(() => {
		// имитация загрузки с сервера
		setFieldsData(dataJSON.fields as FieldTypes[]);
	}, []);

	const changeField = (field: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = field.target;
		setFormData({ ...formData, [name]: value })
		setError({ security: "", password: "", confirmation: "" })
	}

	const submitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formData.security !== user.security) {
			setError({ ...error, security: "Неверное контрольное слово" })
		} else if (formData.password.length < 6) {
			setError({ ...error, password: "Пароль должен быть не менее 6 символов" })
		} else if (formData.password !== formData.confirmation) {
			setError({ ...error, confirmation: "Пароли не совпадают" })
		}
	}

	return (
		<form
			className='form'
			onSubmit={(e) => submitForm(e)}
		>
			<Logo />
			<Title />

			{fieldsData && fieldsData.map((field) => {
				return (
					<Field
						value={formData[field.name] || ""}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeField(e)}
						name={field.name}
						placeholder={field.placeholder}
						required={field.required}
						type={field.type}
						key={field.name}
						showIconPassword={field.name === "password"}
						error={error}
					/>
				)
			})}

			<div className='form__annotation'><span>*</span> Обязательные поля</div>

			<Button
				text={"Изменить пароль"}
				icon={iconBtn}
			/>

			<div className="form__links">
				<Link
					text='Зарегистироваться'
				/>
				<Link
					text='Войти'
				/>
			</div>
		</form>
	)
}

export default Form;