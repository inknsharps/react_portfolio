import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainContainer from "./components/Main/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
			<div className="App">
				<Navbar />
				<MainContainer />
				<Footer />
			</div>
	)
};

export default App;