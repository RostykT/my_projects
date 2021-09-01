import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";

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
			<InfoSection />
		</>
	);
};

export default Home;
