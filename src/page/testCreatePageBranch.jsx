import React, { useState, useEffect } from "react";
import { Input } from "../component";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function TestCreatePageBranch() {
	const [email, setEmail] = useState();
	return (
		<div>
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
		</div>
	);
}
