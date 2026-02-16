# ASIS Boats — Quotation Management System V63

## What's New in V63

### Login Redesign
- **Avatar circle picker** replaces dropdown — click your circle, enter PIN, sign in
- Visual divider separates salesmen from management
- Proper ASIS branding with red logo and favicon

### Logo & Branding
- Real ASIS logo replaces text headers in dashboard and editor
- "Aces of the Sea" logo in footer
- ASIS arrow used as favicon
- Professional footer on all pages with company contact info

### User Roles & Access
- **Salesmen** (Mario/Soufiane/Toji): See own quotations, salesman dropdown locked to the 3 salesmen only
- **Admin** (Pierre/Rana): See ALL quotations, can assign any salesman or use custom
- **Guest**: Has full dashboard, sees only own quotations, can use custom salesman

### Salesman Logic (Step 3)
- Salesman logged in → dropdown shows all 3 salesmen, theirs pre-selected, no blank/custom option
- Non-salesman logged in → dropdown starts blank, can pick a salesman or "Custom" with name/email/phone
- If blank → PDF omits Sales Person, Contact #, and Email fields entirely

### PDF Improvements
- **"Page X of Y"** printed on every page (bottom-right corner)

### UI Improvements
- Step 4 buttons have hover animations (translateY + shadow)
- Cloud status is clickable for manual save
- Removed Save and New Quote buttons from Step 4 (autosave handles it)
- Dashboard sign out button more visible (higher contrast)
- More spacing between progress bar and sidebar
- Professional footer across all pages

### Safety Features
- **Step 1 reset protection**: Confirmation popup if changing boat type/size would clear existing selections
- **Load quotation → Step 2**: Opening a saved quote goes directly to Configuration, not Step 1

## Login Credentials

| User | PIN | Role |
|------|-----|------|
| Mario Hoyek | 4827 | Salesman |
| Soufiane Tangi | 9051 | Salesman |
| Toji Paul | 1364 | Salesman |
| Pierre Nawfal | 1966 | Admin (all quotes) |
| Rana Nawfal | 1996 | Admin (all quotes) |
| Guest | 9876 | Guest (own quotes) |

## Firebase Setup

1. Go to Firebase Console
2. Open project: asis-quotation-system
3. Build → Firestore Database → Create database
4. Start in test mode → Region: europe-west1 → Enable
5. Deploy to Vercel
