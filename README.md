# Refrigerator Houston Repair — Website

**Website**: refrigeratorhoustonrepair.com  
**Phone**: (346) 512-3688  
**Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

---

## 🚀 Deploy to GitHub Pages (Step by Step)

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `refrigerator-houston-repair` (or anything)
3. Set to **Public**
4. Don't add README (we have one)
5. Click **Create repository**

### 2. Push this code to GitHub

```bash
cd refrigerator-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/refrigerator-houston-repair.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source** → select **GitHub Actions**
3. The workflow (`.github/workflows/deploy.yml`) will auto-run

### 4. Connect your custom domain

1. In **Settings → Pages → Custom domain**: type `refrigeratorhoustonrepair.com`
2. In your **domain registrar DNS settings**, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR_USERNAME.github.io |

3. Wait 10–30 minutes for DNS to propagate
4. Enable **Enforce HTTPS** in Pages settings

---

## 💻 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📦 Build locally

```bash
npm run build
# Static files go to /out folder
```

---

## 📁 Adding Your Real Photos

Put your repair photos in the `/public/images/` folder with these names:
- `repair-sub-zero-648pro.jpg`
- `repair-lg-compressor.jpg`
- `repair-thermador-wine.jpg`
- `repair-sub-zero-661.jpg`

Then update `src/data/repairCases.ts` — the `image` field is already set up.

## ✏️ Editing Content

All content is in data files:
- `src/data/brands.ts` — brand pages
- `src/data/repairCases.ts` — repair case pages
- `src/data/serviceAreas.ts` — area pages

No database needed. Just edit the files and push to GitHub — site auto-updates.

---

## 📝 Contact Form

The form uses **Netlify Forms** by default (works if you switch to Netlify hosting).  
For **GitHub Pages**, replace with [Formspree](https://formspree.io):
1. Create free account at formspree.io
2. Get your form ID
3. In `src/app/contact/page.tsx`, change the form action to:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```
