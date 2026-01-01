# Griffin Finance Limited - Next.js Website

A modern, user-friendly website for Griffin Finance Limited built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern, Responsive UI/UX** - Beautiful design with smooth animations
- 🎯 **3D Icons & Visual Effects** - Enhanced service cards with interactive elements
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🍪 **Cookie Consent Banner** - GDPR/NDPA compliant with customizable preferences
- ⚡ **Fast Performance** - Optimized with Next.js 14
- 🎨 **Brand Colors** - Maintains original color scheme (#A2783A)
- 📄 **Web-Based Policies** - Privacy Policy, Cookie Policy, and Terms & Conditions as web pages

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library
- **Framer Motion** - Smooth animations (ready for use)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                    # Root layout with Header, Footer, CookieBanner
│   ├── page.tsx                      # Home page with hero, about, services, CTA
│   ├── contact/
│   │   └── page.tsx                  # Contact page with form
│   ├── privacy-policy/
│   │   └── page.tsx                  # Privacy Policy page
│   ├── cookie-policy/
│   │   └── page.tsx                  # Cookie Policy page
│   ├── terms-and-conditions/
│   │   └── page.tsx                  # Terms and Conditions page
│   └── globals.css                    # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx                    # Navigation header with scroll effects
│   ├── Footer.tsx                    # Footer with policy links
│   ├── CookieBanner.tsx              # Cookie consent banner
│   └── ServiceCard.tsx                # Service card with 3D effects
├── public/
│   ├── img/                          # Images and logos
│   └── policy/                       # Policy PDFs (kept for reference)
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## 🎨 Color Scheme

- **Primary Color**: `#A2783A` (Golden/Bronze)
- **Secondary Color**: `#7d7d7d` (Gray)
- **Dark Color**: `#111`

## 📋 Services

The website showcases the following services:

1. **Consumer Loans** - For individuals and MSMEs
2. **Funds Management** - Investment management services
3. **Asset Finance** - Finance Lease and Hire Purchase
4. **Local and International Trade Finance** - LPO and Import-Export Finance
5. **Project Finance** - Infrastructure and industrial projects
6. **Debt Securitization & Covered Bonds** - Asset-backed securities
7. **Loan Syndication** - Large ticket project financing
8. **Financial Consultancy** - Advisory services
9. **Payment Systems** - Vouchers, Coupons, Cards & Token Stamps

## 📄 Pages

- **Home** (`/`) - Hero section, about, services, and CTA
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy-policy`) - Web-based privacy policy
- **Cookie Policy** (`/cookie-policy`) - Web-based cookie policy
- **Terms and Conditions** (`/terms-and-conditions`) - Web-based terms

## 🔧 Configuration

- **Next.js Config**: `next.config.js` - Image domains and settings
- **Tailwind Config**: `tailwind.config.js` - Custom colors and fonts
- **TypeScript Config**: `tsconfig.json` - TypeScript settings
- **Vercel Config**: `vercel.json` - Deployment settings

## 📝 Notes

- All old HTML files have been removed
- PDF policy files have been converted to web pages
- The website is fully modernized with a clean structure
- All components are properly typed with TypeScript
- The site is optimized for SEO and performance

## 📞 Contact Information

- **Address**: Plot 266B, Kofo Abayomi Street, Victoria Island, Lagos. Nigeria
- **Email**: info@griffin-finance.com
- **Phone**: +234-1-2700657-8, +234-1-2719570

## 📜 License

Copyright © Griffin Finance Limited
