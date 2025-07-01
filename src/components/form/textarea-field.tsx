import { useFieldContext } from "@/hooks/form";
import { useStore } from "@tanstack/react-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function TextareaField({
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
			<Textarea
				id={field.name}
				placeholder={placeholder}
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
				className="min-h-32 max-h-42 !mb-0"
			/>
			{!field.state.meta.isValid && <em role="alert">{errors[0]?.message}</em>}
		</div>
	);
}
