import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarContainer/NavbarContainer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import ShapesContainer from "./components/Shapes/ShapesContainer/ShapesContainer";
import "./App.css";

const App = () => {
	return (
			<Router>
				<div className="App max-w-full divide-solid divide-y-2 divide-gray-500">
					<Navbar />
					<Route exact path="/" component={ Home } />
					<Route exact path="/about" component={ About } />
					<Route exact path="/projects" component={ Projects} />
					<Route exact path="/contact" component={ Contact } />
					<Footer />
					<ShapesContainer />
				</div>
			</Router>
	)
};

export default App;