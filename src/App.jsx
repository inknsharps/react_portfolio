import React from "react";
import Navbar from "./components/Navbar/NavbarContainer/NavbarContainer";
import MainContainer from "./components/Main/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
			<div className="App max-w-full divide-solid divide-y-2 divide-gray-500">
				<Navbar />
				<MainContainer />
				<Footer />
			</div>
	)
};

export default App;