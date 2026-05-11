# Asif Nazeer - Portfolio Website

A premium modern full-stack developer portfolio website with clean luxury UI design and smooth animations.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Elements**: Cursor glow effect, hover animations, and transitions
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Optimized loading and rendering

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Contact form integration
- **React Icons** - Icon library

## 📦 Installation

1. Navigate to the project directory:
```bash
cd asif-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### EmailJS Setup (Optional)

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the EmailJS credentials in `src/components/Contact.js`:

```javascript
emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your service ID
  'YOUR_TEMPLATE_ID',   // Replace with your template ID
  formData,
  'YOUR_USER_ID'        // Replace with your user ID
)
```

### Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update component files in `src/components/` to modify content
- **Images**: Replace project images in `src/components/Projects.js`
- **CV**: Add your CV PDF to `public/` folder as `Asif-Nazeer-CV.pdf`

## 📁 Project Structure

```
asif-portfolio/
├── public/
│   ├── index.html
│   └── Asif-Nazeer-CV.pdf (add your CV here)
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── CursorGlow.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Professional summary and statistics
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio projects with filtering
5. **Experience** - Work experience timeline
6. **Certifications** - Certifications and achievements
7. **Contact** - Contact form and information
8. **Footer** - Social links and quick navigation

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Railway

1. Push your code to GitHub
2. Connect your repository to Railway
3. Railway will auto-detect and deploy

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimization

- Lazy loading images
- Code splitting
- Optimized animations
- Minimal dependencies
- Fast initial load

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Asif Nazeer**
- Email: asfii00118@gmail.com
- GitHub: [@Asfii018](https://github.com/Asfii018)
- LinkedIn: [Asif Nazeer](https://linkedin.com/in/asifnazeer)
- Website: [asifnazeer.liveblog365.com](https://asifnazeer.liveblog365.com)

## 🙏 Acknowledgments

- Design inspiration from Apple, Stripe, and Vercel
- Icons from React Icons
- Animations powered by Framer Motion
- Styling with Tailwind CSS

---

Made with ❤️ by Asif Nazeer
