import React, { useState, useEffect } from "react";
import "./App.css";
// importing font awsome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// importing svg-components
import { MessageIcon } from "./content/svg-component/social-media/messageIcon";
// importing components
import ApiTest from "./component/apiTest/ApiTest";
import ContentTable from "./component/ContentTable/ContentTable";
import Input from "./component/input/Input";
import Button from "./component/button/Button";
function App() {
	const [users, setUsers] = useState([]);
	const url = [
		"https://reqres.in/api/users?delay=3",
		"https://reqres.in/api/users?page=1",
		"https://reqres.in/api/users?page=2",
		"https://reqres.in/api/unknown",
	];
	// Functions
	// ApiTest(url[0], setUsers);
	const [email, setEmail] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	return (
		<div className="App">
			<main className="w-100 d-flex flex-column align-items-center justify-content-center">
				{/* <ContentTable dataArray={users} /> */}
				<form className="d-flex flex-column gap-3 align-items-center justify-content-between col-6 mt-5">
					<fieldset className="w-100 d-flex align-items-center justify-content-center">
						<Input
							label={"email"}
							labelFontSize="h4"
							fontSize="h5 m-0"
							labelColor="text-muted"
							background="#adb5bd"
							border="border border-secondary"
							borderRadius="rounded-4"
							icon={faEnvelope}
							// icon={<MessageIcon size={12} color="red" />}
							inputIconColor="text-primary"
							inputColor="text-muted"
							placeholder="abc@mail.com"
							type="email"
							id="email"
							name="email"
							value={email}
							setValue={setEmail}
							regEx=""
						/>
					</fieldset>
					<fieldset className="w-100">
						<Button
							fontSize="h5"
							disableColor="text-muted"
							inableColor="text-white"
							backgroundColor="bg-primary"
							border="border-0"
							borderRadius="rounded-pill"
							paddingY="p-2"
							type="button"
							id="form-button"
							value="button"
							disabled={false}
							form=""
							className=""
							label="submit"
							onClick={() => {
								console.log("clicked");
							}}
						/>
					</fieldset>
				</form>
			</main>
		</div>
	);
}

export default App;
