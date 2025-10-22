# Prokemplast Website

## Do List 

- [ ] Add a modal when clicking "Click to place an order"
- [ ] Add cart functionality
- [ ] Add Stripe checkout
- [ ] Add site-wide banner for alerts with pastel color that can be easily toggled on and off
- [ ] Tighten up the theme colors and the button colors

## Overview

- Static informational site with product listings (home), company info (About), contact details (Contact), and videos (Videos).
- Hosted on Cloudflare Pages. Includes a lightweight local dev server for convenience.

## Local Development

- Prerequisites: Go 1.20+ (or use any static file server)
- Run locally: `go run server.go` then open `http://localhost:1234`

## Project Structure

- `index.html` — Home (featured products)
- `about.html`, `contact.html`, `videos.html`
- `products/*.html` — Individual product pages
- `css/` — Styles (reset + site styles)
- `js/main.js` — Small helpers (active nav)
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `404.html`
- `_headers` — Security headers for Cloudflare Pages (CSP, HSTS, etc.)
- `terms.html`, `privacy.html` — Legal pages linked in footer

## Content Guidelines

- Images: Add `alt`, `loading="lazy"`, and `decoding="async"` where applicable.
- External links opened in a new tab must include `rel="noopener noreferrer"`.
- Keep page `<title>`, meta description, canonical, and Open Graph/Twitter tags up to date.

## Adding a New Product

1. Copy an existing file in `products/` as a starting point.
2. Update the `<title>`, meta tags, product content, and image `alt` text.
3. Ensure `../js/main.js` is included before `</body>`.
4. Add the product to the grid in `index.html` (image, name, price, link).
5. Update `sitemap.xml` with the new product URL.

## Deployment (Cloudflare Pages)

- Framework preset: None (static)
- Build command: None
- Output directory: `/`
- Ensure domain settings include:
  - `https://www.prokemplast.com` (primary)
  - `https://prokemplast.com` (redirect to `www` recommended)

## SEO

- `robots.txt` and `sitemap.xml` are provided at the site root.
- Canonical URLs point to the `www` domain. Adjust if your canonical preference changes.

## Analytics

- For analytics, we use Cloudflare Web Analytics (enabled in Cloudflare dashboard). No page snippet is required. Plausible has been removed.
