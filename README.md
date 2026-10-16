# Mill Engineering — Production Candidate

Built from the Google AI Studio React/Vite version and prepared for the Mill Engineering website.

## Included
- React + Vite + Tailwind
- Responsive navigation with accessible mobile controls
- Hash-based navigation for static hosting
- Mining retained as requested
- Engineering Solutions terminology (not Engineering Consulting)
- Industrial photography bundled locally
- Dynamic page metadata
- Skip-to-content accessibility link
- Removed unused Gemini/Express/server dependencies from the public website package

## Before production launch
1. Replace `src/components/MillLogo.tsx` with the official Mill Engineering logo asset supplied by the company.
2. Wire the enquiry form to a real email/form endpoint.
3. Add real partner logos supplied/approved by Mill Engineering.
4. Run `npm install` then `npm run build`.
5. Deploy the generated `dist` folder to the chosen static host.
