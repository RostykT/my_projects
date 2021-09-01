import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import MainSection from "../components/MainSection/MainSection";
import styled from "styled-components";

const Container = styled.div`
	height: 100vh;
`;

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const Toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={Toggle} />
			<Navbar toggle={Toggle} />
			<Hero />
			<Container>
				<MainSection
					backgroundImg="forrest1.jpg"
					color="#557174"
					title="About"
					description="Id semper risus in hendrerit gravida 
								rutrum quisque. Vitae sapien pellentesque 
								habitant morbi tristique senectus et. 
								Sit amet massa vitae tortor. "
				/>
				<MainSection
					backgroundImg="forrest2.jpg"
					color="white"
					title="Project"
					description="Et netus et malesuada fames ac turpis. Commodo elit at imperdiet dui accumsan sit amet nulla. Nibh cras pulvinar mattis nunc sed blandit libero. Posuere lorem ipsum dolor sit amet. "
				/>
				<MainSection
					backgroundImg="forrest3.jpg"
					title="Contact"
					color="#F7F7E8"
				/>
			</Container>
		</>
	);
};

export default Home;
