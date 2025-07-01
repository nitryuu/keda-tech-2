import {
	email,
	forward,
	minLength,
	object,
	partialCheck,
	pipe,
	string,
} from "valibot";

export const loginSchema = object({
	email: pipe(
		string(),
		minLength(1, "Please input your email"),
		email("Please input a correct email!"),
	),
	password: pipe(
		string(),
		minLength(8, "Password must have atleast 8 characters"),
	),
});

export const registerSchema = pipe(
	object({
		...loginSchema.entries,
		name: pipe(string(), minLength(1, "Please input your name!")),
		confirm_password: pipe(
			string(),
			minLength(8, "Password must have atleast 8 characters"),
		),
	}),
	forward(
		partialCheck(
			[["password"], ["confirm_password"]],
			(input) => input.password === input.confirm_password,
			"Passwords don't match.",
		),
		["confirm_password"],
	),
);
