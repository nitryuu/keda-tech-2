import PasswordField from "@/components/form/password-field";
import TextField from "@/components/form/text-field";
import TextareaField from "@/components/form/textarea-field";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext } =
	createFormHookContexts();

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		TextField,
		TextareaField,
		PasswordField,
	},
	formComponents: {},
});
