# ASIS Boats Quotation System V11 - Modular Edition

## Files Structure
```
├── index.html          # Main HTML file with all styling
├── data.js             # Data module (boats, accessories, salesmen, rates)
├── ui.js               # UI/state module (navigation, rendering, calculations)
├── pdf-generator.js    # PDF & CSV export module
└── README.md           # This file
```

## Deployment to Vercel

### Option 1: Direct Upload
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Choose "Upload" and drag all 4 files (index.html, data.js, ui.js, pdf-generator.js)
4. Click "Deploy"

### Option 2: Git Repository
1. Create a new repository on GitHub
2. Upload all 4 files to the repository root
3. Connect the repository to Vercel
4. Deploy automatically

## Local Testing
Due to ES6 module imports, you need a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Features
- 3 boat categories: GRP/RHIB, Aluminum, HDIB
- Size-dependent accessory pricing
- Multi-currency support (USD, EUR, AED)
- Live EUR rates via Frankfurter API
- Professional PDF quotation generation
- CSV export for data analysis
- 4-step wizard interface

## Module Dependencies
```
index.html
    └── imports from ui.js
        └── imports from data.js
    └── imports from pdf-generator.js
        └── imports from data.js
        └── imports from ui.js
```

All modules use ES6 `import/export` syntax - no build step required.
