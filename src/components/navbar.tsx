import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { lazy, useState } from "react";
import logo from "/logo.png";
import { Button } from "./ui/button";

const LazyMobileDrawer = lazy(() => import("./mobile-drawer"));

export default function Navbar() {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest >= 130) {
			setScrolled(true);
			return;
		}

		setScrolled(false);
	});

	const menu = [
		{
			name: "About",
			path: "#about",
		},
		{
			name: "Pricing",
			path: "#pricing",
		},
		{
			name: "Contact",
			path: "#contact",
		},
	];

	return (
		<>
			<LazyMobileDrawer open={open} setOpen={setOpen} menu={menu} />

			<motion.header
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className={cn(
					"sticky top-0 z-40 transition-colors",
					scrolled ? "bg-white ring" : "",
				)}
			>
				<nav className="flex items-center justify-between px-4 py-3 container mx-auto">
					<Link
						to="/"
						className={cn(
							"rounded-full size-10 grid place-items-center ring transition-colors",
							scrolled ? "ring-transparent" : "ring-blue-500 bg-white shadow",
						)}
					>
						<img src={logo} alt="logo" height={30} width={30} />
					</Link>

					<div className="md:flex items-center gap-x-8 hidden">
						<div className="flex items-center gap-x-8">
							{menu.map((item, i) => (
								<Link
									key={i}
									to={item.path}
									className="relative uppercase font-semibold group text-black/80 hover:text-black transition-colors"
								>
									<div className="absolute -bottom-1 left-0 h-1 w-0 bg-black transition-all group-hover:w-full" />
									{item.name}
								</Link>
							))}
						</div>

						<Link
							to="/login"
							className="relative bg-blue-500 rounded-md text-white font-bold py-2 px-4 text-sm hover:bg-blue-600 transition-colors group"
						>
							LOGIN
						</Link>
					</div>

					<Button
						type="button"
						variant={scrolled ? "link" : "default"}
						className={cn(
							"md:hidden",
							scrolled
								? "bg-white hover:bg-gray-50 text-black"
								: "bg-blue-700 hover:bg-blue-700",
						)}
						onClick={() => setOpen(true)}
					>
						<Menu className="size-5" />
					</Button>
				</nav>
			</motion.header>
		</>
	);
}
