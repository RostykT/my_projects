import React from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "./icons/moon.svg";
import { ReactComponent as Sun } from "./icons/sun.svg";

const ToggleContainer = styled.button`
	background: ${({ theme }) => theme.gradient};
	border: 2px solid ${({ theme }) => theme.toggleBorder};
	border-radius: 30px;
	cursor: pointer;
	display: flex;
	font-size: 0.5rem;

	margin: 0 auto;
	overflow: hidden;
	padding: 0.5rem;
	position: relative;
	width: 8rem;
	height: 4rem;
`;

function Toogle({ theme, toggleTheme }) {
	const isLight = (theme = "light");
	return <ToggleContainer onClick={toggleTheme}></ToggleContainer>;
}

export default Toogle;
