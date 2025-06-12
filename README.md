# Slooze Commodities Management System

A modern web application for managing commodities with role-based access control and theme switching capabilities.

## Features

- 🔐 Authentication with role-based access
- 📊 Dashboard for managers with key metrics
- 📦 Product management (view, add, edit, delete)
- 🌓 Light/Dark mode theme switching
- 👥 Role-based menu restrictions

## Tech Stack

- React with TypeScript
- Material-UI for components
- Redux Toolkit for state management
- React Router for navigation
- Vite for build tooling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Demo Credentials

### Manager Account
- Email: manager@example.com
- Password: password

### Store Keeper Account
- Email: storekeeper@example.com
- Password: password

## Features Breakdown

### Authentication & Access (5 Points)
- Login with email & password
- Role-based access control
- Secure session management

### Dashboard (30 Points)
- Overview of key metrics
- Recent activity tracking
- Role-based access (Manager only)

### Product Management
- View all products (10 Points)
- Add/Edit products (15 Points)
- Delete products
- Stock management

### UI Enhancements
- Light/Dark mode (15 Points)
- Responsive design
- Material-UI components

### Bonus Features
- Role-based menu restrictions (25 Points)
- Dynamic UI updates
- Protected routes

## Project Structure

```
src/
├── components/     # Reusable components
├── views/         # Page components
├── store/         # Redux store configuration
├── hooks/         # Custom hooks
└── assets/        # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
