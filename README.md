# Pioneer Events - Event Planning Platform

## Deployment Guide

### Backend Deployment (Vercel/Render)

**Option 1: Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Go to Backend folder: `cd Backend`
3. Run: `vercel`
4. Follow prompts and deploy

**Option 2: Render**
1. Go to render.com
2. Create new Web Service
3. Connect your GitHub repo
4. Root Directory: `Backend`
5. Build Command: `npm install`
6. Start Command: `node app.js`
7. Deploy

### Frontend Deployment (Vercel/Netlify)

**Option 1: Vercel**
1. Go to Frontend folder: `cd Frontend`
2. Update API URL in code to your backend URL
3. Run: `vercel`
4. Deploy

**Option 2: Netlify**
1. Build frontend: `npm run build`
2. Go to netlify.com
3. Drag & drop the `dist` folder
4. Deploy

### Local Development

**Backend:**
```bash
cd Backend
npm install
npm start
```

**Frontend:**
```bash
cd Frontend
npm install
npm run dev
```

## Environment Variables

**Backend (.env):**
- PORT=5000
- NODE_ENV=production

**Frontend (.env.production):**
- VITE_API_URL=your-backend-url

## Tech Stack
- Frontend: React + Vite
- Backend: Express.js
- Styling: CSS
