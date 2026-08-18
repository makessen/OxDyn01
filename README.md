# SUBSTRATA 
# Integrated Intelligence Terminal

Substrata is a desktop-first Next.js application designed to provide a highly secure, austere, and professional interface for Chief Restructuring Officers in regulated industries (e.g., Thames Water). It allows users to securely interrogate decades of internal documents using plain-English questions without data ever leaving their environment.

This project was built as a rapid high-fidelity prototype, primarily using Stitch and Antigravity.

## Deployed Links

#### Github Source files (HERE):
https://github.com/makessen/OxDyn01.git

#### Netlify (Stitch exports):
(these are direct exports from Google Stitch)
Desktop: https://c603f2f5-substrata.netlify.app/
Mobile: https://ce1b9d9d-substrata.netlify.app/

## Quick Start

Ensure you have Node.js and npm installed.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the Desktop Dashboard.
   Navigate to [http://localhost:3000/mobile](http://localhost:3000/mobile) or click the Substrata logo to see the Mobile Terminal.

## Documentation & Deliverables

All project documentation, design notes, code quality reports, and AI usage summaries are located in the `docs/` and `docs/deliverables/` directories.

- [Deployed Links](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/01deployedLinks.md)
- [A Short Note on the approach](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/02aShortNote.md)
- [Honest AI usage](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/03honestAIusage.md)

Others
- [Code Quality Report](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/03honestAIusage.md)
- [Implementation Plan](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/implementation_plan.md)
- [Design Engineer Note](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/design_engineer_note.md)

## Code Quality Status
This codebase represents a front-end "visual facade" generated rapidly from Stitch. While it accurately represents the necessary design tokens, aesthetics, and layout, the codebase contains large monolithic components, hardcoded data, and unoptimized external image assets. 

A full refactor extracting reusable React components and replacing hardcoded states with dynamic props is recommended prior to production deployment. For more details, refer to [Code Quality Report](https://github.com/makessen/OxDyn01/blob/master/docs/deliverables/03honestAIusage.md).
