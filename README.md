# ASIS Boats - Professional Quotation System V62

## What's New in V62 — Cloud Save & Dashboard

### Cloud Persistence (Firebase Firestore)
- Autosave — Quotations save automatically 3 seconds after any change
- Cloud indicator in the editor header shows save status in real-time
- localStorage fallback — If Firebase isn't configured, everything still works locally
- Offline support — Firestore offline persistence caches data locally

### Quotation Dashboard
- My Quotations — See all saved quotes at a glance
- Search — Find quotes by quote number, customer name, company, boat type
- Filter by status — Draft, Sent, Accepted, Expired
- Filter by amount — Under $50K, $50K-$100K, $100K-$500K, Over $500K
- Filter by date — Last 7 days, 30 days, This Quarter, This Year
- Sortable columns — Click any column header to sort
- Quick actions — Edit, Duplicate, Change Status, Delete

### Salesman Login
- Each salesman logs in with their name + PIN
- Auto-login remembers the last session
- Each salesman sees only their own quotations

### Save Features
- Autosave every 3 seconds after changes
- Manual Save button on the Review page
- Save on navigation — Auto-saves when going back to dashboard
- Browser warning — Alerts if closing tab with unsaved changes
- Duplicate quotes — One-click duplication for similar configurations

---

## Firebase Setup (5 minutes)

### Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Create a project"
3. Name it (e.g., asis-quotation-system)
4. Create Project

### Step 2: Enable Firestore
1. Go to Build > Firestore Database
2. Click "Create database"
3. Select "Start in test mode"
4. Choose nearest region (e.g., europe-west1 for UAE)

### Step 3: Get Config
1. Go to Project Settings (gear icon)
2. Under "Your apps", click the Web icon
3. Register app, copy the firebaseConfig object

### Step 4: Paste Config
Open index.html and replace the placeholder at the top of the script:

    const FIREBASE_CONFIG = {
        apiKey: "AIzaSyD...",
        authDomain: "asis-quotation-system.firebaseapp.com",
        projectId: "asis-quotation-system",
        storageBucket: "asis-quotation-system.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abc..."
    };

### Step 5: Set Security Rules
In Firestore > Rules tab, paste:

    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /quotations/{docId} {
          allow read, write: if true;
        }
      }
    }

### Step 6: Change PINs
Update the PIN codes in index.html:

    const SALESMAN_PINS = { mario: '5678', soufiane: '9012', toji: '3456' };

### Step 7: Deploy to Vercel as before.

---

## Firestore Data Structure

Each quotation document has queryable top-level fields:
- quoteNumber, title, salesmanId, salesmanName
- status (draft/sent/accepted/expired)
- totalAmountUSD (always in USD for queries like "over $100K")
- boatType, boatSize, customerCompany, customerName
- createdAt, updatedAt (timestamps)
- fullState (JSON blob for restoring the full editor)

---

## Quick Start (No Firebase)

Leave config as YOUR_API_KEY — system uses localStorage automatically.
Everything works, but data is per-browser only.
