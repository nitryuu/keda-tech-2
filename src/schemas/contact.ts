import { email, minLength, object, pipe, string } from "valibot";

export const contactSchema = object({
	name: pipe(string(), minLength(1, "Please input your name!")),
	email: pipe(
		string(),
		minLength(1, "Please input your email!"),
		email("Please input a correct email!"),
	),
	message: pipe(string(), minLength(1, "Please input your message!")),
});
