import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	opacity: 0.9;
	background-image: url("/images/forrest3.jpg");
`;

const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		height: 80%;
	}
`;
const Icon = styled(Link)`
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;
	color: #fff;
	font-weight: 700;
	font-size: 32px;

	@media screen and (max-width: 480px) {
		margin-left: 16px;
		margin-top: 8px;
	}
`;

const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;

const Form = styled.form`
	background: #3a6351;
	opacity: 0.8;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 30px 32px;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	} ;
`;

const FormH1 = styled.h1`
	color: #fff;
	margin-bottom: 40px;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;

const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #fff;
`;
const FormInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`;

const FormButton = styled.button`
	background: #01bf71;
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	transition: 0.2s ease-out;
	&:hover {
		background: #07e2ab;
	}
`;
const Text = styled.a`
	text-align: center;
	margin-top: 24px;
	color: #fff;
	font-size: 14px;
	cursor: pointer;
`;
const SignIn = () => {
	return (
		<Container>
			<FormWrap>
				<Icon to="/">Portfolio</Icon>
				<FormContent>
					<Form action="#">
						<FormH1>Sign in to your account</FormH1>
						<FormLabel htmlFor="for">Email</FormLabel>
						<FormInput type="email" required />
						<FormLabel htmlFor="for">Password</FormLabel>
						<FormInput type="password" required />
						<FormButton type="submit">Continue</FormButton>
						<Text> Forgot password </Text>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	);
};

export default SignIn;
