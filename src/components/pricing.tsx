import { cn, currencyFormatter } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const MotionCarousel = motion.create(Carousel);

export default function Pricing() {
	const features = [
		"Record incoming goods",
		"Record outgoing goods",
		"Record profits",
		"Sales analysis with charts",
		"24/7 Support",
		"Export data to Excel",
		"AI-generated income prediction",
	];

	const tiers = [
		{
			name: "Basic",
			price: 20000,
			description: "Start simple with essential features",
			features: [
				"Record incoming goods",
				"Record outgoing goods",
				"Record profits",
			],
		},
		{
			name: "Business",
			price: 99000,
			description: "Gain better insights and support",
			features: [
				"Record incoming goods",
				"Record outgoing goods",
				"Record profits",
				"Sales analysis with charts",
				"24/7 Support",
			],
		},
		{
			name: "Entrepreneur",
			price: 199000,
			description: "Full access for growing your business",
			features: [
				"Record incoming goods",
				"Record outgoing goods",
				"Record profits",
				"Sales analysis with charts",
				"24/7 Support",
				"Export data to Excel",
				"AI-generated income prediction",
			],
			popular: true,
		},
	];

	return (
		<section id="pricing" className="bg-purple-50">
			<div className="max-w-5xl pt-10 pb-40 md:pt-24 md:pb-52 px-6 mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-3xl md:text-4xl font-bold text-center mb-10"
				>
					Choose the plan that fits your needs.
				</motion.h2>

				<MotionCarousel
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.4, once: true }}
					transition={{ duration: 0.5 }}
				>
					<CarouselContent className="-ml-8">
						{tiers.map((item, i) => (
							<CarouselItem
								key={i}
								className="lg:basis-1/3 pl-8 text-center py-6"
							>
								<div
									className={cn(
										"relative bg-white p-1 border rounded-lg px-6 py-10 h-full transition-colors hover:border-black/30",
										{
											"bg-gradient-to-br from-blue-400 via-blue-800 to-purple-600 text-white":
												item.popular,
										},
									)}
								>
									{item.popular && (
										<p className="absolute -top-3 inset-x-0 bg-red-800 text-white w-max mx-auto px-2 ring text-sm font-bold">
											MOST POPULAR
										</p>
									)}

									<div className="mb-4">
										<p className="text-lg font-semibold mb-4">{item.name}</p>
										<div className="flex items-start justify-center">
											<span className="font-semibold">Rp</span>
											<span className="text-4xl font-semibold leading-none">
												{currencyFormatter(item.price)}
											</span>
										</div>
										<p className="text-sm">per month</p>
									</div>

									<p
										className={cn("text-sm text-gray-500 font-medium mb-3", {
											"text-white": item.popular,
										})}
									>
										{item.description}
									</p>

									<Link
										to="/login"
										className={cn(
											"block w-full py-2 px-4 bg-blue-500 text-white font-bold  transition-colors hover:bg-blue-600 mb-3",
											{
												"bg-purple-500 hover:bg-purple-600 text-white ring":
													item.popular,
											},
										)}
									>
										GET STARTED
									</Link>

									<ul className="space-y-2">
										{features.map((feature, i) => (
											<li
												key={`features-${i}`}
												className={cn("flex items-center gap-x-4", {
													"opacity-30": !item.features.includes(feature),
												})}
											>
												{item.features.includes(feature) ? (
													<Check
														className={cn("text-green-600", {
															"item-gren-300": item.popular,
														})}
													/>
												) : (
													<X className="text-gray-500" />
												)}

												<p className="text-left">{feature}</p>
											</li>
										))}
									</ul>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</MotionCarousel>
			</div>
		</section>
	);
}
