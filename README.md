# Frontend Project

This is a React-based frontend project built with modern tools and libraries. It uses Vite for fast development and TypeScript for type safety. The project is designed for scalability and maintainability with Redux Toolkit for state management and Tailwind CSS for styling.

## Features

- **React 18**: For building user interfaces.
- **Vite**: Lightning-fast development and build tool.
- **TypeScript**: Static typing for JavaScript.
- **Redux Toolkit**: Simplified state management.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Router DOM**: Declarative routing for React applications.
- **Axios**: HTTP client for API requests.
- **React Toastify**: For displaying toast notifications.
- **Moment & Moment-Timezone**: Handling dates and times across different time zones.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm run lint`**: Run ESLint to check for code quality issues.
- **`npm run preview`**: Preview the production build.

## Folder Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   ├── features/         # Redux slices
│   ├── pages/            # Application pages
│   ├── styles/           # Global and Tailwind CSS styles
│   ├── utils/            # Utility functions
│   └── main.tsx         # Entry point
├── public/           # Static assets
└── package.json      # Project metadata and dependencies
```

## Dependencies

### Main Dependencies

- `@reduxjs/toolkit`: State management.
- `axios`: For API requests.
- `lucide-react`: Icons.
- `moment` & `moment-timezone`: Date and time utilities.
- `react`, `react-dom`: Core React libraries.
- `react-intersection-observer`: Handle scroll-based events.
- `react-redux`: Connect React with Redux.
- `react-router-dom`: Routing library.
- `react-toastify`: Toast notifications.
- `redux-persist`: Persist Redux state.

### Development Dependencies

- `@eslint/js`: ESLint configuration.
- `@types/react`, `@types/react-dom`: TypeScript definitions for React.
- `@types/redux-persist`: TypeScript definitions for Redux Persist.
- `@vitejs/plugin-react`: React plugin for Vite.
- `autoprefixer`: Add vendor prefixes to CSS.
- `eslint`, `eslint-plugin-react-hooks`: Linting tools.
- `postcss`: CSS processing.
- `tailwindcss`: CSS framework.
- `typescript`, `typescript-eslint`: TypeScript and linting support.
- `vite`: Build tool.

## Styling

The project uses **Tailwind CSS** for styling. You can customize the design by modifying the `tailwind.config.js` file.

## State Management

State is managed using **Redux Toolkit** for a simple and efficient development experience. Persisted state is handled using **redux-persist**.

## Routing

Routing is set up using **React Router DOM**, allowing for dynamic navigation between pages.





