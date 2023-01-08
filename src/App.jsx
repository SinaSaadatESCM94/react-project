import React, { useState, useEffect } from "react";
import "./App.scss";
// importing font awsome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// importing svg-components
import { MessageIcon } from "./content/svg-component/social-media/messageIcon";
// importing pages
import TestCreateComponentBarnch from "./page/testCreateComponentBarnch";
function App() {
	return (
		<div className="App">
			<main className="w-100 d-flex flex-column align-items-center justify-content-center">
				<TestCreateComponentBarnch />
			</main>
		</div>
	);
}

export default App;
