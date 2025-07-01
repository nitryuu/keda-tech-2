import { useFieldContext } from "@/hooks/form";
import { useStore } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function PasswordField({
	label = "Password",
	placeholder = "",
}: {
	label?: string;
	placeholder?: string;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	const [show, setShow] = useState(false);

	return (
		<div className="space-y-2">
			<Label htmlFor={field.name}>{label}</Label>
			<div className="relative">
				<Input
					id={field.name}
					type={show ? "text" : "password"}
					placeholder={placeholder}
					value={field.state.value}
					onChange={(e) => field.handleChange(e.target.value)}
					onBlur={field.handleBlur}
					className="!mb-0"
				/>
				<Button
					variant="link"
					type="button"
					className="absolute right-4 inset-y-0 grid place-items-center transition-colors text-gray-400 !p-0 hover:text-gray-600"
					onClick={() => setShow(!show)}
				>
					{show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
				</Button>
			</div>
			{!field.state.meta.isValid && <em role="alert">{errors[0]?.message}</em>}
		</div>
	);
}
