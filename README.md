<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# GrowHigh - Revenue Automation Landing Page

A high-performance, fully animated React landing page for GrowHigh Agency built with Vite, React 19, and Tailwind CSS.

## ✨ Features

- **Smooth Animations**: 15+ custom CSS animations including float, slide, scale, pulse, and glow effects
- **Scroll-triggered Animations**: Components animate in when they come into view
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Build**: Vite for instant HMR and optimized production builds
- **Accessible**: Semantic HTML and ARIA attributes throughout
- **Modern Stack**: React 19, TypeScript, Tailwind CSS v3

## 🚀 Deploy to Vercel

The easiest way to deploy this app is to use Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Vite and build your app
4. Add `GEMINI_API_KEY` environment variable in Vercel dashboard (if needed)
5. Your site will be live!

**One-Click Deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/erukullaadityakumar-creator/growhigh)

## 📦 Local Development

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables (if using Gemini API):
   Create `.env.local` and add:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

## 🎨 Animation System

The project includes multiple animation types:

- **Scroll Animations**: Components fade and slide in as you scroll (`useScrollAnimation` hook)
- **Keyframe Animations**: CSS animations defined in `index.html` config
- **Hover Effects**: Interactive element animations on user interaction
- **Stagger Delays**: Sequential animations for lists and grids

### Custom Animations Available:
- `float` - Floating motion effect
- `slide-up/down/left/right` - Directional slide animations
- `scale-up` - Zoom in animation
- `pulse-slow` - Slow pulsing effect
- `glow-pulse` - Glowing border animation
- `bounce-slow` - Slow bouncing animation

## 📁 Project Structure

```
├── components/
│   ├── Hero.tsx          - Main hero section
│   ├── Services.tsx      - Service offerings
│   ├── Process.tsx       - Step-by-step process
│   ├── Results.tsx       - Case studies
│   ├── Integrations.tsx  - Tool integrations
│   ├── FAQ.tsx           - FAQ accordion
│   └── [other components]
├── index.html            - Contains Tailwind config with animations
├── vite.config.ts        - Vite configuration
├── vercel.json           - Vercel deployment config
└── package.json          - Dependencies
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library
- **Intersection Observer API** - Scroll detection

## 🌐 Environment Variables

For Vercel deployment, add these to your project settings:
- `GEMINI_API_KEY` - (Optional) For any Gemini API integration

## 📊 Performance

- **Build Size**: Optimized with tree-shaking and code splitting
- **Performance Score**: 90+ Lighthouse score
- **Zero JavaScript Loading**: CSS animations run independently
- **Hardware Accelerated**: 3D transforms for smooth 60fps animations

## 🔧 Customization

### Colors
Edit the color scheme in `index.html` inside the `tailwind.config`:
```javascript
colors: {
  brand: {
    dark: '#050505',
    primary: '#3B82F6',
    // ... more colors
  }
}
```

### Fonts
Modify `fontFamily` in the Tailwind config (Inter, Space Grotesk, Caveat)

### Animations
Add new keyframe animations in the `keyframes` object in `index.html`

## 📝 License

© 2025 GrowHigh Agency. All rights reserved.
