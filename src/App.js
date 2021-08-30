import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
	const [open, setOpen] = useState(false);
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />

				<div>
					<h1> Hi, This is hamburger menu</h1>
				</div>
				<div>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
