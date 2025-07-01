import { Bot, DollarSign, Workflow } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
	const points = [
		{
			subtitle: "Built to Simplify Business",
			icon: <Workflow />,
			snippet:
				"Our ERP platform is designed specifically for entrepreneurs who want to simplify the way they manage business operations.",
		},
		{
			subtitle: "Centralized Inventory and Profit Tracking",
			icon: <DollarSign />,
			snippet:
				"Record every incoming and outgoing product with ease. Automatically track your daily profits and view historical performance—all in one centralized dashboard.",
		},
		{
			subtitle: "Actionable Insights with AI",
			icon: <Bot />,
			snippet:
				"Our system goes beyond basic tracking. With AI-powered predictions and analytics, you'll uncover trends, forecast revenue, and make smarter decisions faster.",
		},
	];

	return (
		<section id="about" className="bg-white">
			<div className="max-w-5xl py-10 md:py-20 px-6 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
						Why Choose Us?
					</h2>
					<p className="text-center mb-12 max-w-3xl mx-auto text-sm leading-relaxed">
						<span>
							Our startup was founded with one goal in mind: to help
							entrepreneurs streamline their business operations.
						</span>
						<span className="hidden md:block">
							We provide an intuitive ERP platform that makes it easy to record
							inventory movement, track profits, and analyze sales
							performance—all in one place.
						</span>
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.4, once: true }}
					transition={{ duration: 0.5 }}
					className="grid grid-cols-1 lg:grid-cols-3 gap-8"
				>
					{points.map((item, i) => (
						<div key={i} className="text-center lg:text-left">
							<div className="bg-blue-500 rounded-full size-12 grid place-items-center mb-2 text-white mx-auto lg:mx-[unset]">
								{item.icon}
							</div>
							<p className="font-semibold mb-1">{item.subtitle}</p>
							<p className="text-sm leading-relaxed">{item.snippet}</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
