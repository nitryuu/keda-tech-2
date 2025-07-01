import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import abstractTwo from "../assets/abstract-2.png";
import dataTrends from "../assets/data-trends.png";

const MotionLink = motion.create(Link);

export default function Hero() {
	return (
		<section className="relative min-h-[calc(100svh-74px)] px-2 md:px-20 py-30 text-center overflow-hidden grid place-items-center limitedHeight:grid limitedHeight:place-items-center md:block md:place-items-start">
			<motion.img
				initial={{ opacity: 0, x: 40 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				src={abstractTwo}
				alt="abstract-two"
				className="absolute z-10 bottom-0 -right-20 w-[300px] md:w-[unset]"
			/>

			<div className="relative z-10 bg-white md:bg-transparent px-4 py-8 rounded-lg shadow-md md:shadow-none">
				<motion.h1
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center mb-4"
				>
					<span className="mb-4 block">ERP Software for</span>
					<span className="uppercase font-bold bg-gradient-to-r from-blue-500 via-blue-800 to-purple-500 text-white px-2 py-1 rounded-md ring ring-blue-600">
						Entrepreneurs
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-5 text-sm md:text-base"
				>
					An ERP software that helps entrepreneurs record every item{" "}
					<br className="hidden md:block" />
					going in and record the profits they make each day.
				</motion.p>

				<MotionLink
					to="/login"
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="block w-max mx-auto text-center py-2 px-4 bg-blue-500 text-white rounded-md font-bold  transition-colors hover:bg-blue-600"
				>
					GET STARTED
				</MotionLink>
			</div>

			<motion.img
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				src={dataTrends}
				alt="data trends"
				height={900}
				width={900}
				className="absolute -bottom-35 inset-x-0 z-20 mx-auto hidden md:block limitedHeight:hidden"
			/>
		</section>
	);
}
