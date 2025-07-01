import abstractOne from "@/assets/abstract-1.png";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="relative bg-blue-50">
			<Navbar />
			<motion.img
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				src={abstractOne}
				alt="abstract-one"
				className="absolute z-10 top-0 left-0 w-[300px] md:w-[unset]"
			/>

			<main>
				<Hero />
				<AboutUs />
				<Pricing />
				<ContactUs />
			</main>

			<Footer />
		</div>
	);
}
