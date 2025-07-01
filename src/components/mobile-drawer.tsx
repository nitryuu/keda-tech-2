import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";

export default function MobileDrawer({
	open,
	setOpen,
	menu,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	menu: { name: string; path: string }[];
}) {
	return (
		<Drawer open={open} onOpenChange={setOpen} direction="right">
			<DrawerContent role="sidebar">
				<DrawerHeader className="flex-row items-center justify-between border-b py-2">
					<DrawerTitle>Menu</DrawerTitle>
					<Button
						variant="link"
						type="button"
						className="!p-0"
						onClick={() => setOpen(false)}
					>
						<X className="size-5" />
					</Button>
				</DrawerHeader>

				<div className="flex flex-col py-2">
					<Link
						to="/"
						className="block w-full py-2 px-4 font-medium"
						onClick={() => setOpen(false)}
					>
						Home
					</Link>
					{menu.map((menu, i) => (
						<Link
							key={i}
							to={menu.path}
							className="block w-full py-2 px-4 font-medium"
							onClick={() => setOpen(false)}
						>
							{menu.name}
						</Link>
					))}
				</div>

				<div className="mt-auto p-3 border-t bg-blue-50">
					<Link
						to="/login"
						className="mt-auto bg-blue-500 w-full block text-center text-white py-3 font-semibold rounded-md text-sm"
					>
						LOGIN
					</Link>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
