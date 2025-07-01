import { useAppForm } from "@/hooks/form";
import { contactSchema } from "@/schemas/contact";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Form = () => {
	const form = useAppForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		validators: { onSubmit: contactSchema },
		onSubmit: () => {
			toast.success("Message sent");
			form.reset();
		},
	});

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		form.handleSubmit();
	};

	return (
		<form id="contact" className="space-y-4" onSubmit={onSubmit}>
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

			<form.AppField name="message">
				{(field) => (
					<field.TextareaField
						label="Message"
						placeholder="Enter your message"
					/>
				)}
			</form.AppField>

			<form.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}
				children={([canSubmit, isSubmitting]) => (
					<Button
						type="submit"
						disabled={!canSubmit}
						className="bg-blue-500 hover:bg-blue-600"
					>
						{isSubmitting ? "..." : "Submit"}
					</Button>
				)}
			/>
		</form>
	);
};

export default function ContactUs() {
	const socmeds = [
		{
			name: "facebook",
			icon: <Facebook className="size-5" />,
			link: "https://facebook.com",
		},
		{
			name: "instagram",
			icon: <Instagram className="size-5" />,
			link: "https://instagram.com",
		},
		{
			name: "x",
			icon: <Twitter className="size-5" />,
			link: "https://x.com",
		},
		{
			name: "youtube",
			icon: <Youtube className="size-5" />,
			link: "https://youtube.com",
		},
	];

	return (
		<motion.section
			id="contact"
			initial={{ opacity: 0, y: -40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="max-w-6xl mx-auto py-10 md:py-20 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-y-6 bg-white -mt-30 rounded-lg shadow-md"
		>
			<div>
				<div className="mb-14">
					<p className="text-sm text-gray-500">JOIN OUR NEWSLETTER</p>
					<p className="font-bold text-xl mb-4">CONTACT US</p>

					<div className="text-gray-500">
						<p>📍 Based in Jakarta, Indonesia</p>
						<p>Mon - Fri: 9:00 am - 8:00 pm</p>
						<p>Sat - Sun: 9:00 am - 10 pm</p>
					</div>
					<a
						href="mailto:support@startup.id"
						className="text-blue-400 hover:text-blue-500 font-semibold transition-colors"
					>
						support@startup.id
					</a>
				</div>

				<div>
					<p className="font-bold text-xl mb-2">FOLLOW US</p>
					<div className="flex items-center gap-x-2">
						{socmeds.map((item) => (
							<a
								key={item.name}
								href={item.link}
								className="bg-blue-500 hover:bg-blue-600 text-white rounded-full size-9 grid place-items-center"
								target="_blank"
								rel="noreferrer"
							>
								{item.icon}
							</a>
						))}
					</div>
				</div>
			</div>

			<Form />
		</motion.section>
	);
}
