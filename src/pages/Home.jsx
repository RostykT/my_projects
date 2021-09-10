import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import MainSection from "../components/MainSection/MainSection";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ ContactSection/ContactSection";

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

			<MainSection
				id="about"
				backgroundImg="forrest1.jpg"
				color="#557174"
				title="About"
				description="Id semper risus in hendrerit gravida 
								rutrum quisque. Vitae sapien pellentesque 
								habitant morbi tristique senectus et. 
								Sit amet massa vitae tortor. "
			/>
			<MainSection
				id="projects"
				backgroundImg="forrest2.jpg"
				color="white"
				title="Project"
				description="Et netus et malesuada fames ac turpis. Commodo elit at imperdiet dui accumsan sit amet nulla. Nibh cras pulvinar mattis nunc sed blandit libero. Posuere lorem ipsum dolor sit amet. "
			/>

			<ContactSection
				id="contact"
				backgroundImg="forrest3.jpg"
				title="Contact Us"
				color="#F7F7E8"
			/>
			<Footer />
		</>
	);
};

export default Home;
