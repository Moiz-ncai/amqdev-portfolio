# AMQ.dev Portfolio

A modern, dark-themed personal portfolio website for Abdul Moiz Qarni, featuring glassmorphism aesthetics, smooth animations, and responsive design.

## 🚀 Live Demo

Visit the live website at: [https://amqdev.com](https://amqdev.com)

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism effects and neon accents
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, typewriter animations, and scroll-triggered animations
- **Project Showcase**: Detailed project pages with technology stacks and descriptions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter Card support

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Typewriter Effect**: typewriter-effect library
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Footer.tsx      # Footer with social links
│   └── ParticleBackground.tsx  # Animated background particles
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── About.tsx       # About page with skills and experience
│   ├── Projects.tsx    # Projects showcase page
│   ├── ProjectDetails.tsx  # Individual project detail pages
│   └── Contact.tsx     # Contact page with form
├── data/               # Static data and content
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amqdev/amqdev-portfolio.git
cd amqdev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

### Color Palette

- **Primary Background**: `#0a0a0a` (Dark)
- **Secondary Background**: `#1a1a1a` (Dark Surface)
- **Glass Effect**: `rgba(255, 255, 255, 0.1)` with backdrop blur
- **Neon Cyan**: `#00ffff`
- **Neon Purple**: `#8b5cf6`

### Typography

- **Primary Font**: Poppins
- **Secondary Font**: Inter

### Components

- **Glass Cards**: Semi-transparent cards with backdrop blur
- **Neon Text**: Gradient text effects
- **Glow Effects**: Hover animations with glow
- **Smooth Transitions**: 300ms ease transitions

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server

3. Configure your domain to point to the deployed site

## 🔧 Customization

### Adding New Projects

1. Update the projects data in `src/pages/Projects.tsx`
2. Add corresponding project details in `src/pages/ProjectDetails.tsx`

### Modifying Content

- **Personal Information**: Update content in respective page components
- **Skills**: Modify the skills array in `src/pages/About.tsx`
- **Experience**: Update experience data in `src/pages/About.tsx`
- **Social Links**: Update links in `src/components/Footer.tsx` and `src/pages/Contact.tsx`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Adjust animation parameters in component files

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abdul Moiz Qarni**
- Website: [amqdev.com](https://amqdev.com)
- Email: contact@amqdev.com
- GitHub: [@amqdev](https://github.com/amqdev)
- LinkedIn: [Abdul Moiz Qarni](https://linkedin.com/in/amqdev)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React](https://reactjs.org/) for the component-based architecture
- [Vite](https://vitejs.dev/) for the fast build tool

---

Built with ❤️ by Abdul Moiz Qarni