import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				title: "ERP Software",
			},
			{
				name: "description",
				content: "ERP Software for Enterpreneurs",
			},
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
			},
		],
	}),
	component: () => (
		<>
			<Outlet />
			<Toaster />
			<TanStackRouterDevtools />
		</>
	),
});
