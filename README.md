<h1 align='center'> 🚀 Poster </h1>

![Preview de Poster](/public/screenshot-for-readme.png)

Poster is a minimalist, full-stack social media application built with Next.js 15. Users can create text and image-based posts, interact via likes and comments, and manage their profiles in a sleek, responsive interface.

## 🛠️ Tech Stack
- Framework: Next.js 15 (App Router)
- Auth: Clerk
- Database: PostgreSQL (via Neon)
- ORM: Prisma
- Media: UploadThing
- Styling: Tailwind CSS + Shadcn/UI

## ✨ Key Features
- 🔐 Secure Auth: Seamless login and registration with Clerk.
- 📸 Post Creation: Share updates with high-quality image uploads.
- 💬 Social Interaction: Real-time-like feel for comments and likes.
- 🌓 Dark Mode: Native theme switching support.
- 📱 Responsive: Fully optimized for mobile and desktop.

### ⚙️ Quick Start
Clone & Install:
``` shell
git clone https://github.com/GArquez/poster.git && cd poster
npm install
```

### Environment Variables (.env):
```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
DATABASE_URL
UPLOADTHING_TOKEN
```

📄 License
MIT
