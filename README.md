# Next.js Demo Application

This is a comprehensive Next.js application demonstrating various features including Server-Side Rendering (SSR), Static Site Generation (SSG), dynamic routes, API endpoints, and Next.js components.

## Features

- ✅ **Server-Side Rendering (SSR)** - `/ssr` route using `getServerSideProps`
- ✅ **Static Site Generation (SSG)** - `/ssg` route using `getStaticProps`
- ✅ **Dynamic Routes** - `/posts/[id]` with multiple post pages
- ✅ **API Endpoint** - `/api/data` returning JSON formatted content
- ✅ **Next.js Components** - Head, Image, and Link components used throughout
- ✅ **Styling** - Global styles and component-level CSS modules

## Project Structure

```
nextjs-demo-app/
├── pages/
│   ├── _app.js          # App component with global styles
│   ├── index.js         # Home page
│   ├── ssr.js           # SSR route
│   ├── ssg.js           # SSG route
│   ├── posts/
│   │   └── [id].js      # Dynamic route
│   └── api/
│       └── data.js      # API endpoint
├── styles/
│   ├── globals.css      # Global styles
│   ├── Home.module.css  # Component styles
│   ├── SSR.module.css   # Component styles
│   ├── SSG.module.css   # Component styles
│   └── Post.module.css  # Component styles
├── package.json
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Routes

1. **Home** (`/`) - Landing page with navigation
2. **SSR Route** (`/ssr`) - Server-side rendered page showing server time
3. **SSG Route** (`/ssg`) - Statically generated page showing build time
4. **Dynamic Routes** (`/posts/1`, `/posts/2`, `/posts/3`) - Dynamic post pages
5. **API Endpoint** (`/api/data`) - Returns JSON data with user information

## Next.js Components Used

- **Head** - Used in all pages for SEO and metadata
- **Image** - Used for optimized image loading
- **Link** - Used for client-side navigation

## Styling

- **Global Styles** - Defined in `styles/globals.css` with base styles, navigation, and card components
- **Component Styles** - CSS modules for each page component (Home.module.css, SSR.module.css, etc.)

## Video Demonstration Checklist

When creating your video, make sure to show:

1. ✅ Starting the application from command line (`npm run dev`)
2. ✅ Navigating to the home page
3. ✅ Visiting the SSR route (`/ssr`) and showing it updates on refresh
4. ✅ Visiting the SSG route (`/ssg`) and showing it stays the same
5. ✅ Visiting dynamic routes (`/posts/1`, `/posts/2`, `/posts/3`)
6. ✅ Accessing the API endpoint (`/api/data`) and showing JSON response
7. ✅ Demonstrating Head component (check page title in browser tab)
8. ✅ Demonstrating Image component (optimized images on pages)
9. ✅ Demonstrating Link component (navigation between pages)
10. ✅ Showing global styles (background gradient, navigation bar)
11. ✅ Showing component styles (card layouts, post styling)

## License

MIT
# nextjsdemoapp
