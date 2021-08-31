import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const Toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={Toggle} />
			<Navbar toggle={Toggle} />
		</>
	);
};

export default Home;
