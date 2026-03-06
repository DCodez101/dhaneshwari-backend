## Dhaneshwari – Boutique Stay Landing Page

This is a single‑page marketing website for the **Dhaneshwari** boutique stay.  
The UI is built to closely match the provided Figma design, using **React**, **Vite**, and **Tailwind CSS v4**.

### Tech stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Build tool**: Vite 7

### Getting started

1. **Install dependencies**

   ```bash
   cd frontend
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Then open the printed local URL in your browser (for example `http://localhost:5173` or `http://localhost:5175`).

3. **Create a production build**

   ```bash
   npm run build
   ```

4. **Preview the production build**

   ```bash
   npm run preview
   ```

### Project structure (frontend)

- `src/App.jsx` – application shell and global background
- `src/pages/Home.jsx` – main page composition (sections in order)
- `src/components/Navbar.jsx` – top navigation bar
- `src/components/Hero.jsx` – hero banner with background image and CTAs
- `src/components/WhyChoose.jsx` – “Why choose us?” feature tiles
- `src/components/Rooms.jsx` – room cards
- `src/components/Gallery.jsx` – photo gallery strip
- `src/components/Attractions.jsx` – nearby attractions cards
- `src/components/Testimonials.jsx` – guest reviews
- `src/components/Footer.jsx` – footer with quick links, services, resources, and social icons
- `src/assets/Dhaneshwari Photoshoot/` – all hotel photos used in the layout
