import React, { useState, useEffect } from "react";
import "./App.css";
import ApiTest from "./component/apiTest/ApiTest";
// import Admin from "./component/DynamicTagTest/Admin";
// import User from "./component/DynamicTagTest/User";
// import Guest from "./component/DynamicTagTest/Guest";
// import NotFound from "./component/DynamicTagTest/NotFound";
import ContentTable from "./component/ContentTable/ContentTable";
function App (){
	const [ users, setUsers ] = useState([]);
	const url = [
		"https://reqres.in/api/users?delay=3",
		"https://reqres.in/api/users?page=1",
		"https://reqres.in/api/users?page=2",
		"https://reqres.in/api/unknown",
	];
	// Functions
	ApiTest(url[0], setUsers);
	return (
		<div className="App">
			<ContentTable dataArray={users} />
		</div>
	);
}

export default App;
