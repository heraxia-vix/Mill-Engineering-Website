# Mill Engineering — Deployment Next Steps

## 1. GitHub
Repository: https://github.com/heraxia-vix/Mill-Engineering-Website

Replace the repository website source with this project and push to the default branch.

## 2. GitHub Pages
Enable GitHub Pages using the included GitHub Actions workflow:
`.github/workflows/deploy-pages.yml`

The workflow builds the Vite site and deploys the `dist` directory to GitHub Pages.

## 3. Custom domain
The project includes:
`CNAME` → `milleng.in`

In GitHub: Settings → Pages → Custom domain → enter `milleng.in` and save.

For the apex domain, configure the GitHub Pages A records at the DNS provider. GitHub recommends also configuring `www` and can redirect between the apex and `www` versions when both are configured correctly.

## 4. Final browser check
After deployment, verify:
- Home page and every navigation item
- Mobile menu
- Technology Partners logos
- Enquiry mail links
- Contact links
- Images and favicon
- HTTPS
- Mobile/tablet/desktop layouts

## Important
The source has been statically reviewed, but this environment could not complete `npm install`, so a local/CI Vite production build must be allowed to run before considering the deployment fully validated.
