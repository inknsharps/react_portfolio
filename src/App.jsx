import React from "react";
import Navbar from "./components/Navbar/NavbarContainer/NavbarContainer";
import MainContainer from "./components/Main/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
			<div className="App divide-solid divide-y-2 divide-gray-500">
				<Navbar />
				<MainContainer />
				<Footer />
			</div>
	)
};

export default App;