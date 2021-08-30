import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useState } from "react";
import Toogle from "./Toogle";

function App() {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />
				<Toogle theme={theme} toggleTheme={toggleTheme} />
				<h1>
					it's {theme === "light" ? "light theme" : "dark theme"}!
				</h1>
				<footer></footer>
			</>
		</ThemeProvider>
	);
}

export default App;
