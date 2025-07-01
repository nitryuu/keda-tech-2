# KeDa Tech Test 2

## Getting Started
To run this application:

```bash
bun install
bun dev
```

## Building For Production
To build this application for production:

```bash
bun run build
bun run start
```

## Styling
This project uses [Tailwind CSS](https://tailwindcss.com/) for styling and also [Shadcn UI](https://ui.shadcn.com) for reusable components.

### Why Tailwind CSS
Tailwind CSS provides a utility-first approach to styling, allowing developers to apply styles directly via class attributes (or className in React). This improves development speed
and eliminates the need to come up with unique class names for every style.

### Why Shadcn UI
Shadcn UI offers a collection of well-designed components that can be installed using its CLI. These components are built on top of Tailwind CSS, and are highly customizable.

## Linting & Formatting
This project uses [Biome](https://biomejs.dev/) for both linting and formatting. The following scripts are available:

```bash
bun run lint
bun run format
bun run check
```

### Why not Eslint and Prettier
Biome replaces the need for separate tools like Eslint and Prettier. It's also fast because it's written in Rust.

## Routing
This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file-based router. Which means that the routes are managed as files in `src/routes`.

### Why Tanstack Router
Tanstack Router offers a fully type-safe routing experience, catching route-related errors at compile time, file-based routing system, and other features that's not showcased in this project.

## Forms
This project uses [Tanstack Form](https://tanstack.com/form) for managing form state, combined with [Valibot](https://valibot.dev/) for schema-based validation.

### Why Tanstack Form
Tanstack Form is framework-agnostic, and type-safe form state management. It's lightweight and scales well with complex forms.

### Why Valibot
Valibot is a lightweight and fast validation library with a focus on DX and performance.

## Frontend Library
This project uses [React.js](https://react.dev/) as the core frontend library.

### Why React.js
React.js is a requirement for this test. I would otherwise use Next.js or other meta-framework for this kind of project. One of the benefit of using Next.js is SEO support, which is especially useful for projects like landing pages.

## Animation
This project uses [Motion](https://motion.dev/) as animation API library

### Why Motion
Motion gives React a simple animation API, which is great for projects like Landing Pages.

## Icons
This project uses [Lucide](https://lucide.dev/) for icons.

### Why Lucide
Lucide offers a clean and consistent icon design.
