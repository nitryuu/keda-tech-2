export default function Footer() {
	return (
		<footer className="bg-white md:bg-blue-50 py-6 text-center text-sm text-gray-500 md:mt-2">
			© {new Date().getFullYear()} Startup. All rights reserved.
		</footer>
	);
}
