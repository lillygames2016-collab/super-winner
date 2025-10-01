# HonestMatch — Full Frontend (Vercel-ready)

## Deploy on Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Local dev
```bash
npm i
npm run dev
```

## Notes
- `/api/*` endpoints (waitlist/report/admin lists) expect a backend. Until you deploy the Express API,
  these routes will fail; the UI remains usable. When you deploy the backend, add a `vercel.json` rewrite
  to forward `/api` to your API URL.