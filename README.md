# Netbook - Social Network Landing Page

A modern, responsive landing page for a social network platform built with Vue 3, Vite, and TypeScript.

## 🚀 Features

- Modern and responsive design
- Vue 3 Composition API
- TypeScript support
- Form validation with Vee-validate and Yup
- SCSS styling with variables and mixins
- Comprehensive test coverage
- Mobile-first approach

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (comes with Node.js)

## 🛠 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd netbook-landing
```

2. Install dependencies:
```bash
npm install
```

## 🖥 Development

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

## 🏗 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
netbook-landing/
├── public/           # Static assets
├── src/
│   ├── assets/      # Project assets
│   ├── components/  # Vue components
│   │   └── MainPage/
│   │       └── sections/  # Page sections
│   ├── styles/      # Global styles
│   ├── App.vue      # Root component
│   └── main.js      # Application entry point
├── test/            # Test configuration
└── vite.config.ts   # Vite configuration
```

## 🧩 Components

### Header Section
- Main navigation
- Hero content
- Responsive menu
- Search functionality

### Contact Form Section
- Form validation
- Error handling
- Responsive design
- Input masking

### Countdown Section
- Statistics display
- Animated counters
- Responsive grid

### Achievement Section
- Awards display
- Member statistics
- Interactive cards

### Footer Section
- Navigation links
- Newsletter subscription
- Social media links
- Responsive layout

## 🎨 Styling

The project uses SCSS with:
- Global variables
- Custom mixins
- Responsive breakpoints
- BEM methodology

## ✅ Testing

Tests are written using:
- Vitest
- Vue Test Utils
- JSDOM for browser environment
- Mock implementations for browser APIs

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Vite
- SCSS preprocessing
- Vue 3 plugin
- Test environment setup
- Build optimization

### TypeScript
- Strict type checking
- ESNext features
- Module bundler resolution

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
