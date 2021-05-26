import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppMain from "./pages/App/AppMain";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div
			style={{
				background: "url('/images/bg.png')",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Router>
				<Navbar />
				<Route exact path="/" component={HomePage} />
				<Route exact path="/app" component={AppMain} />
			</Router>
		</div>
	);
}

export default App;
