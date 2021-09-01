import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

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

const MainH1 = styled.h1`
	color: ${(props) => props.color};
	font-size: 48px;
	text-align: center;
	transition: 0.3s ease-in-out;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 550px) {
		font-size: 32px;
	}
`;

const MainP = styled.p`
	color: ${(props) => props.color};
	margin-top: 24px;

	font-size: 24px;
	text-align: center;
	max-width: 600px;
	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

const ItemText = styled.div`
	padding: 15vh;
	text-align: center;
`;
function MainSection({ backgroundImg, title, description, color }) {
	return (
		<Wrap bgImage={backgroundImg}>
			<Fade bottom>
				<ItemText>
					<MainH1 color={color}>{title}</MainH1>
					<MainP color={color}>{description}</MainP>
				</ItemText>
			</Fade>
		</Wrap>
	);
}

export default MainSection;
