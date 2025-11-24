# BetEA Brand Quick Reference Card

## 🎨 Brand Colors (Copy & Paste)

```css
/* Primary Colors */
--brand-green: #00A651;    /* Main brand color */
--brand-gold: #FFB81C;     /* Accent/CTA */
--brand-navy: #1A1F2E;     /* Text/Professional */

/* Functional Colors */
--success: #06D6A0;        /* Wins */
--error: #E63946;          /* Losses */
--warning: #FFB81C;        /* Alerts */
--info: #00B4D8;           /* Live betting */

/* Neutrals */
--gray-50: #F9FAFB;
--gray-100: #F5F5F5;
--gray-500: #6B7280;
--gray-900: #111827;
```

## 📝 Typography

```css
/* Fonts */
font-family: 'Poppins', sans-serif;  /* Headings, Logo */
font-family: 'Inter', sans-serif;    /* Body, UI */
font-family: 'JetBrains Mono', monospace; /* Numbers */

/* Import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');
```

## 🔘 Common Components

### Button Classes
```html
<!-- Primary (Green) -->
<button class="btn btn-primary btn-md">Place Bet</button>

<!-- Secondary (White with green border) -->
<button class="btn btn-secondary btn-md">Cancel</button>

<!-- Accent (Gold) -->
<button class="btn btn-accent btn-md">Claim Bonus</button>
```

### Card
```html
<div class="card card-hover">
  <h3>Card Title</h3>
  <p>Content</p>
</div>
```

### Odds Button
```html
<button class="odds-button">2.50</button>
<button class="odds-button odds-button-active">2.50</button>
```

### Badge
```html
<span class="badge badge-success">Won</span>
<span class="badge badge-error">Lost</span>
<span class="badge badge-pending">Pending</span>
```

### Balance
```html
<span class="balance">KES 1,250.00</span>
```

## 📐 Spacing Scale

```
4px   → p-1, m-1, gap-1
8px   → p-2, m-2, gap-2
12px  → p-3, m-3, gap-3
16px  → p-4, m-4, gap-4  ← Default card padding
24px  → p-6, m-6, gap-6
32px  → p-8, m-8, gap-8
48px  → p-12, m-12, gap-12
```

## 🎯 Border Radius

```
4px  → rounded-sm   (Small elements)
8px  → rounded-md   (Buttons, inputs)
12px → rounded-lg   (Cards)
16px → rounded-xl   (Large cards)
Full → rounded-full (Badges, avatars)
```

## 🌈 Gradients

```css
/* Green Gradient */
background: linear-gradient(135deg, #00A651 0%, #008A43 100%);

/* Gold Gradient */
background: linear-gradient(135deg, #FFB81C 0%, #E6A500 100%);

/* Hero Gradient */
background: linear-gradient(135deg, #00A651 0%, #006732 100%);
```

## 📱 Responsive Breakpoints

```
sm:  640px   (Small tablets)
md:  768px   (Tablets)
lg:  1024px  (Laptops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large desktops)
```

## 🎨 Logo Files

```
design/logo/logo-horizontal.svg    → Website header
design/logo/logo-icon-only.svg     → App icon, favicon
design/logo/logo-white.svg         → Dark backgrounds
design/logo/logo-concept.svg       → Full logo with tagline
```

## ✅ Quick Checklist

**Before launching any design:**
- [ ] Using official BetEA colors
- [ ] Using Poppins for headings, Inter for body
- [ ] Minimum 44x44px touch targets on mobile
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Logo has clear space (E height on all sides)
- [ ] Responsive on mobile (test on 375px width)
- [ ] Loading states for async actions
- [ ] Error states with clear messages

## 🚀 Common Patterns

### Event Card
```html
<div class="card card-hover">
  <div class="flex justify-between mb-2">
    <span class="text-sm text-gray-500">Premier League</span>
    <span class="badge badge-info">Live</span>
  </div>
  <h3 class="font-semibold mb-3">Arsenal vs Chelsea</h3>
  <div class="grid grid-cols-3 gap-2">
    <button class="odds-button">2.10</button>
    <button class="odds-button">3.40</button>
    <button class="odds-button">3.80</button>
  </div>
</div>
```

### Input Field
```html
<div class="mb-4">
  <label class="block text-sm font-medium mb-1">Stake Amount</label>
  <input type="number" class="input" placeholder="Enter amount" />
  <p class="text-xs text-gray-500 mt-1">Min: KES 10</p>
</div>
```

### Loading Spinner
```html
<div class="flex items-center justify-center p-8">
  <div class="spinner w-8 h-8"></div>
</div>
```

## 📞 Resources

- **Full Branding Guide**: `specs/betting-platform/branding.md`
- **Design System**: `design/DESIGN_SYSTEM.md`
- **Logo Usage**: `design/logo/LOGO_USAGE_GUIDE.md`
- **Tailwind Config**: `design/tailwind.config.template.js`

---

**Print this page and keep it handy while designing!**
