import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAppForm } from "@/hooks/form";
import { registerSchema } from "@/schemas/auth";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/(auth)/register")({
	component: RouteComponent,
});

const Form = () => {
	const navigate = useNavigate();

	const form = useAppForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirm_password: "",
		},
		validators: {
			onSubmit: registerSchema,
		},
		onSubmit: () => {
			form.reset();
			toast.success("Register success");
			navigate({ to: "/login" });
		},
	});

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		form.handleSubmit();
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="flex flex-col gap-6">
				<form.AppField name="name">
					{(field) => (
						<field.TextField label="Full Name" placeholder="Enter your name" />
					)}
				</form.AppField>
				<form.AppField name="email">
					{(field) => (
						<field.TextField label="Email" placeholder="Enter your email" />
					)}
				</form.AppField>
				<form.AppField name="password">
					{(field) => <field.PasswordField />}
				</form.AppField>
				<form.AppField name="confirm_password">
					{(field) => <field.PasswordField label="Confirm Password" />}
				</form.AppField>

				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
					children={([canSubmit, isSubmitting]) => (
						<Button
							type="submit"
							disabled={!canSubmit}
							className="bg-blue-500 hover:bg-blue-600 font-semibold"
						>
							{isSubmitting ? "..." : "Register"}
						</Button>
					)}
				/>
			</div>
			<div className="mt-4 text-center text-sm">
				Already have an account?{" "}
				<Link to="/login" className="underline underline-offset-4">
					Login here
				</Link>
			</div>
		</form>
	);
};

function RouteComponent() {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-blue-50">
			<div className="w-full max-w-sm">
				<div className="flex flex-col gap-6">
					<Card>
						<CardHeader>
							<CardTitle>Register</CardTitle>
							<CardDescription>Create your account</CardDescription>
						</CardHeader>
						<CardContent>
							<Form />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
