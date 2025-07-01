import { useFieldContext } from "@/hooks/form";
import { useStore } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TextField({
	label,
	placeholder = "",
}: {
	label: string;
	placeholder?: string;
}) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div className="space-y-2">
			<Label htmlFor={field.name}>{label}</Label>
			<Input
				id={field.name}
				placeholder={placeholder}
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
				className="!mb-0"
			/>
			{!field.state.meta.isValid && <em role="alert">{errors[0]?.message}</em>}
		</div>
	);
}
