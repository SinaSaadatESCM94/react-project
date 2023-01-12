import React, { useState, useEffect } from "react";
// importing font awsome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// importing svg-components
import { MessageIcon } from "../content/svg-component";
// importing components
import {
	ApiTest,
	ContentTable,
	Input,
	Button,
	MenuIcon,
	Logo,
} from "../component";

export default function TestCreateComponentBarnch() {
	// states
	const [email, setEmail] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMenuOpenSecond, setIsMenuOpenSecond] = useState(false);
	// const [ users, setUsers ] = useState([]);
	// const url = [
	// 	"https://reqres.in/api/users?delay=3",
	// 	"https://reqres.in/api/users?page=1",
	// 	"https://reqres.in/api/users?page=2",
	// 	"https://reqres.in/api/unknown",
	// ];
	// Functions
	// ApiTest(url[0], setUsers);
	// DOM
	return (
		<main className="w-100 d-flex flex-column align-items-center justify-content-center mt-5">
			{/* <ContentTable dataArray={users} /> */}
			<form className="d-flex flex-column align-items-center justify-content-between col-6">
				<fieldset className="w-100 d-flex align-items-center justify-content-center mb-4">
					<Input
						label={"email"}
						labelFontSize="h6"
						fontSize="h6 m-0"
						labelColor="text-muted"
						background="#adb5bd"
						border="border border-secondary"
						borderRadius="rounded-2"
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
				<fieldset className="w-100 d-flex align-items-center justify-content-center mb-4">
					<Button
						type="button"
						id="button"
						value="button"
						disabled={false}
						form="form"
						// className=""
						// backgroundColor=""
						// border=""
						borderRadius="rounded-2"
						// paddingY=""
						// fontSize=""
						// disableColor=""
						// inableColor=""
						showLoadingOnClick={true}
						onClick={() => {
							console.log("submit");
						}}
						label="submit"
					/>
				</fieldset>
			</form>
			<div>
				<MenuIcon
					id="button1"
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</div>
			<div className="mt-3">
				<Logo />
			</div>
		</main>
	);
}
