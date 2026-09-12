# OrbitVision — orbitvision.co.uk

Static brochure site for OrbitVision (IT solutions, satellite broadband, CCTV, managed IT).
Fife, Scotland based, UK-wide coverage.

## Structure
- `index.html` — homepage (hero, services, coverage, why us, contact)
- `privacy-policy/` — privacy policy
- `404.html` — custom not-found page
- `style.css`, `script.js` — shared styles/behaviour
- `assets/` — logo + favicon
- `sitemap.xml`, `robots.txt`, `llms.txt` — SEO/AI discovery

## Deploy (GitHub Pages)
1. Push this repo's contents to a public GitHub repo.
2. Enable GitHub Pages (Settings → Pages → deploy from branch, root).
3. Add custom domain `orbitvision.co.uk` (CNAME file already included).
4. DNS (at registrar):
   - A records @ → 185.199.108.153 / .109.153 / .110.153 / .111.153
   - CNAME www → <github-username>.github.io

## Email
Contact address used across the site: `uplink@orbitvision.co.uk` — set up via
Cloudflare Email Routing (or equivalent) forwarding to a Gmail inbox once the
domain is live.
