import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/signin">
						<SignIn />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
