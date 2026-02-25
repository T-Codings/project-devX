# DevX Project - AI Assistant Guidelines

## Architecture Overview
This is a React single-page application (SPA) built with Vite, featuring authentication and routing. The app structure follows:
- **Routing**: React Router DOM with protected routes
- **Authentication**: Context-based auth using localStorage for persistence
- **Styling**: Tailwind CSS v4 with custom purple theme
- **Build Tool**: Vite with rolldown, configured for Windows file watching

## Key Components & Patterns
- **AuthContext** (`src/context/AuthContext.jsx`): Manages authentication state with `login()`, `logout()`, and `useAuth()` hook
- **ProtectedRoute** (`src/components/ProtectedRoute.jsx`): Guards routes by checking `localStorage.getItem('token')`
- **Navbar** (`src/components/Navbar.jsx`): Conditionally renders auth-dependent UI (login/signup vs. dashboard/logout)
- **Component Structure**: Place components in `src/components/`, routes in `src/routes/`, context in `src/context/`

## Authentication Flow
1. Login/SignUp forms call `login(userData, token)` from AuthContext
2. Token and user data stored in localStorage as 'token', 'loggedIn', 'user'
3. Protected routes redirect to `/login` if no token present
4. Logout clears localStorage and resets state

## Development Workflow
- **Start dev server**: `npm run dev` (uses Vite with polling for Windows compatibility)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview**: `npm run preview` (serves built app)

## Code Conventions
- **Imports**: React components use named exports, hooks from context
- **Styling**: Tailwind utility classes with purple color scheme (`purple-600`, `purple-700`, etc.)
- **Forms**: Controlled components with `useState` for form data and validation
- **Assets**: Images stored in `src/assets/`, referenced as imports (e.g., `import trophyIcon from '../assets/Trophy.png'`)
- **ESLint**: Custom rule ignores unused vars starting with uppercase or underscore

## Common Patterns
- Use `useAuth()` hook in components needing auth state
- Wrap protected content with `<ProtectedRoute>` component
- Handle form validation with separate `validateForm()` function
- Navigate programmatically with `useNavigate()` from react-router-dom
- Conditional rendering based on `isAuthenticated` state

## File Structure
```
src/
├── components/     # Reusable UI components (Homepage, Navbar, etc.)
├── routes/         # Page-level components (Login)
├── context/        # React contexts (AuthContext)
├── assets/         # Static assets (images, icons)
└── App.jsx         # Main routing setup
```

## Dependencies
- React 19 with hooks
- React Router DOM v7 for routing
- Tailwind CSS v4 for styling
- Vite with rolldown for fast builds</content>
<parameter name="filePath">c:\Users\THEODORE\Desktop\POJECTING DEVX\.github\copilot-instructions.md