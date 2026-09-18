# Glow & Wick - Handcrafted Candle Website

Welcome to the digital storefront repository for **Glow & Wick**, a luxury multi-page e-commerce concept showcasing premium handcrafted candles and artisanal wax molds based in Mbombela, South Africa.

---

## 🎨 Design System & Aesthetics
- **Theme:** Luxury, Editorial, Cozy, and Feminine (Pinterest-inspired layout)
- **Color Palette:**
  - `Velvet Plum Wine (#4A1E2F)` - Headers, primary emphasis, and navigation focus tokens
  - `Warm Blush Pink (#FFF5F5)` - Global site canvas background
  - `Soft Amber Gold (#F7C59F)` - Interactive text hover states
- **Typography:**
  - Headings: `Playfair Display` (Elegant serif typeface)
  - Body Text: `Poppins` (Clean, modern sans-serif typeface)

---

## 🛠️ Feature Implementations & Checklist

### 1. File & Folder Structural Integrity
- Removed all arbitrary broken links and white spaces in filenames (`our services.html` was refactored seamlessly to `services.html`).
- Standardized directory layout mapping: `/css` for stylesheet tokens, `/images` for isolated media assets.

### 2. Multi-Page Architecture & Semantic HTML
- **5 Fully Responsive Pages:** `index.html`, `about.html`, `services.html`, `contact.html`, `Enquiry.html`.
- Implemented global navigation bars using Semantic HTML5 `<nav>`, `<main>`, and `<header>` wrappers.

### 3. Responsive Styling Systems (CSS Grid & Flexbox)
- Custom global CSS template overrides utilizing structured fluid units (`rem`, `em`, `%`) instead of absolute values.
- Built a native **Pinterest-Style Grid System** matching standard retail storefront column structures.
- Implemented CSS3 **Media Query Breakpoints** (`@media (max-width: 768px)`) to automatically adjust text weights and flip layouts vertically for mobile smartphones and tablets.

### 4. Interactive Elements & Forms
- Configured dynamic CSS transition animations on luxury cards and navigation hovers (`transition: all 0.4s ease`).
- Designed a product reservation sheet inside `Enquiry.html` with explicit form accessibility handlers (`<label for="">`, placeholders, types, and input focus glows).

---

## 📑 Changelog (Part 1 Revisions)
- [x] Corrected case-sensitive casing rules for asset folder mapping links.
- [x] Restructured stray and unclosed `</div>` or duplicate grid tags across operational pages.
- [x] Eliminated blank layout gaps by updating local references from raw spaces to web-safe hyphenated routes.

---

## 🗃️ References & Source Materials
- **Typography Engine:** [Google Fonts](https://google.com) (`Playfair Display` & `Poppins` imports).
- **Core CSS Framework Reset:** Vanilla custom box-sizing global declaration setups.
- **Imagery Assets:** Original custom conceptual business showcase photography.