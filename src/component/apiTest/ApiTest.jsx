import React, { useEffect } from "react";
const ApiTest = (url, setUser) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setUser(json.data);
			} catch (error) {
				console.log("error", error);
			}
		};
		fetchData();
	}, []);
};

export default ApiTest;
