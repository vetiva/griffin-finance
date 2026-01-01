# Deployment Guide for Griffin Finance Limited

## Quick Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Prepare your repository:**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Ensure all files are committed

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub/GitLab/Bitbucket account
   - Click "Add New..." → "Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live in minutes!**
   - Vercel provides a URL like: `your-project.vercel.app`
   - You can add a custom domain later

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

## Pre-Deployment Checklist

- [x] All dependencies installed (`npm install`)
- [x] Assets copied to `public/img/` and `public/policy/`
- [x] Build runs successfully (`npm run build`)
- [x] No TypeScript errors
- [x] All environment variables configured (if any)

## Build Configuration

The project is already configured for Vercel:
- `vercel.json` includes build settings
- Next.js is auto-detected by Vercel
- No additional configuration needed

## Custom Domain Setup

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript compiles without errors
- Verify all imports are correct

### Images Not Loading
- Ensure images are in `public/img/` directory
- Check image paths in components (should start with `/img/`)

### Policy PDFs Not Accessible
- Ensure PDFs are in `public/policy/` directory
- Check links in Footer and CookieBanner components

## Support

For Vercel-specific issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)


