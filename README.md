# Tokiso Malapane - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring an elegant old-money aesthetic with blue color scheme and smooth animations.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Portfolio+Preview)
<!-- TODO: Replace with actual screenshot of your portfolio -->

## 🌟 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between elegant dark and light themes
- **Smooth Animations** - Floating particles, typing effects, and hover animations
- **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS
- **Component-Based Architecture** - Well-structured, maintainable code
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Old-Money Aesthetic** - Sophisticated blue color palette with serif typography

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com) <!-- TODO: Replace with your actual URL -->

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** System fonts (Times New Roman, Georgia)
- **Animations:** CSS animations and transitions

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/tokiso-malapane/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 📝 Personal Information

Update the following files with your information:

#### 1. Hero Section (`components/hero-section.tsx`)
\`\`\`typescript
// Update the typing text
const fullText = "Hi, I'm Your Name"

// Update CV download link
const handleDownloadCV = () => {
  window.open('/path/to/your-cv.pdf', '_blank')
}
\`\`\`

#### 2. About Section (`components/about-section.tsx`)
\`\`\`typescript
// Update social media links
const socialLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "mailto:your.email@example.com",
}

// Replace profile image placeholder
// Uncomment and update:
// <img src="/images/your-profile.jpg" alt="Your Name" className="..." />
\`\`\`

#### 3. Education Section (`components/education-section.tsx`)
\`\`\`typescript
const educationData = {
  degree: "Your Degree",
  university: "Your University",
  graduationYear: "2025",
  gpa: "Your GPA",
  courses: [
    "Your Course 1",
    "Your Course 2",
    // Add your courses
  ],
}
\`\`\`

#### 4. Skills Section (`components/skills-section.tsx`)
\`\`\`typescript
const skillsData = {
  languages: ["Your", "Programming", "Languages"],
  frameworks: ["Your", "Frameworks"],
  tools: ["Your", "Tools"],
  concepts: ["Your", "Concepts"],
}
\`\`\`

#### 5. Projects Section (`components/projects-section.tsx`)
\`\`\`typescript
// Update with your actual projects
const clientProjects = [
  {
    title: "Your Project Title",
    description: "Project Description",
    details: "Detailed project description...",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/your-username/project",
    demoUrl: "https://your-demo-url.com",
    hasDemo: true,
  },
]
\`\`\`

#### 6. Contact Section (`components/contact-section.tsx`)
\`\`\`typescript
const contactInfo = {
  email: "your.email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  location: "Your Location",
}
\`\`\`

### 🖼️ Adding Images

1. **Profile Image**
   - Add your profile image to `public/images/profile.jpg`
   - Uncomment the image tag in `components/about-section.tsx`

2. **Project Images**
   - Add project screenshots to `public/images/projects/`
   - Update project cards with image components

### 🎨 Color Customization

The website uses a blue color scheme. To customize colors, update `app/globals.css`:

\`\`\`css
/* Update these color variables */
.bg-blue-400 { background-color: #your-color; }
.text-blue-400 { color: #your-color; }
.border-blue-400 { border-color: #your-color; }
\`\`\`

### 📱 Adding New Sections

1. Create a new component in `components/`
2. Add the section to `app/page.tsx`
3. Update navigation in `components/navigation.tsx`

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── animated-background.tsx
│   ├── navigation.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── education-section.tsx
│   ├── skills-section.tsx
│   ├── projects-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── theme-toggle.tsx
│   └── mobile-menu.tsx
├── public/
│   ├── images/              # Add your images here
│   └── files/               # Add CV/resume files here
├── README.md
└── package.json
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Netlify

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository

### Other Platforms

The portfolio can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 📋 TODO Checklist

Before deploying, make sure to:

- [ ] Update all personal information
- [ ] Replace placeholder links with actual URLs
- [ ] Add your profile image
- [ ] Update project information and links
- [ ] Add your CV/resume file
- [ ] Test all links and functionality
- [ ] Optimize images for web
- [ ] Update meta tags in `layout.tsx`
- [ ] Test responsive design on all devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the clean icons
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Contact

Tokiso Malapane - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/tokiso-malapane/portfolio](https://github.com/tokiso-malapane/portfolio)

---

⭐ **Star this repository if you found it helpful!**
