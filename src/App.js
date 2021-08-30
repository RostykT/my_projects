import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Burger from "./components/Burger";
import Menu from "./components/Menu/Menu";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Burger />
				<Menu />
				<div>
					<h1> Hi, This is hamburger menu</h1>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
