import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	opacity: 0.9;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const Container = styled.div`
	width: 40%;
	height: auto;
	background: #a59f9f;
	margin-top: 80px;
	background: rgba(204, 204, 204, 0.3);
	border-radius: 10px;
	display: flex;
	position: absolute;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 30px;
`;

const FormWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	margin-bottom: 20px;
`;

const Form = styled.form`
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 30px 32px;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	} ;
`;

const FormH1 = styled.h1`
	color: #fff;
	margin-bottom: 40px;
	font-size: 30px;
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
const FormText = styled.textarea`
	padding: 32px 16px;
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

function sendEmail(e) {
	e.preventDefault();

	emailjs
		.sendForm(
			"Gmail",
			"template_g38vrz4",
			e.target,
			"user_U5v2MvE8mo1hyuQxFI2jt"
		)
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	e.target.reset();
}
function ContactSection({ backgroundImg, id }) {
	return (
		<Wrap bgImage={backgroundImg} id={id}>
			<Container>
				<FormWrap>
					<Form onSubmit={sendEmail}>
						<Fade bottom>
							<FormH1>Conctact Us</FormH1>
						</Fade>

						<FormLabel htmlFor="for">Email</FormLabel>
						{/* <input type="hidden" name="contact_number" /> */}
						<FormInput type="email" name="user_email" required />
						<FormLabel htmlFor="for">Name</FormLabel>
						<FormInput type="text" name="user_name" required />
						<FormLabel htmlFor="for">Text</FormLabel>
						<FormText name="message" required />
						<FormButton type="submit" value="Send">
							Send Message
						</FormButton>
					</Form>
				</FormWrap>
			</Container>
		</Wrap>
	);
}

export default ContactSection;
