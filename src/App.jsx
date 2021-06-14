import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BodyContainer from "./components/Body/BodyContainer/BodyContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
			<div className="App">
				<Navbar />
				<BodyContainer />
				<Footer />
			</div>
	)
};

export default App;