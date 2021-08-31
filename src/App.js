import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Sidebar />
			</Router>
		</div>
	);
}

export default App;
