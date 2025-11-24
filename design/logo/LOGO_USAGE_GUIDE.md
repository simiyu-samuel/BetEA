# BetEA Logo Usage Guide

## Logo Concept Explanation

The BetEA logo embodies the spirit of winning and growth in East African betting:

### Symbol Meaning
- **Rising Arrow/Chevron**: Represents upward momentum, winning, and reaching new heights
- **Circular Form**: Unity, completeness, and the continuous cycle of betting
- **Gold Star Accent**: The winning moment, success, and premium quality

### Color Psychology
- **Green (#00A651)**: 
  - Trust and reliability
  - Growth and prosperity
  - Familiar to East Africans (M-Pesa green)
  - Money and financial success
  
- **Gold (#FFB81C)**:
  - Winning and achievement
  - Premium quality
  - Energy and excitement
  - Success and celebration

- **Navy (#1A1F2E)**:
  - Professionalism
  - Stability and trust
  - Authority and confidence

---

## Logo Variations

### 1. Primary Logo (Full Color)
**File**: `logo-concept.svg`

```
┌─────────────────────────────────────┐
│  [Icon]  BetEA                      │
│          EAST AFRICA'S BETTING      │
│          PLATFORM                   │
└─────────────────────────────────────┘
```

**When to use**:
- Website homepage
- Marketing materials
- Presentations
- Print materials

**Minimum width**: 200px (digital), 50mm (print)

---

### 2. Horizontal Logo
**File**: `logo-horizontal.svg`

```
┌─────────────────────────────┐
│  [Icon]  BetEA              │
└─────────────────────────────┘
```

**When to use**:
- Website header/navigation
- Email signatures
- Horizontal banners
- App top bar

**Minimum width**: 120px (digital), 25mm (print)

---

### 3. Icon Only (App Icon)
**File**: `logo-icon-only.svg`

```
┌─────────┐
│ [Icon]  │
└─────────┘
```

**When to use**:
- Mobile app icon
- Favicon
- Social media profile picture
- Small spaces where text won't be legible

**Minimum size**: 32x32px (digital), 10mm (print)

---

### 4. White Logo (Dark Backgrounds)
**File**: `logo-white.svg`

```
┌─────────────────────────────┐
│  [White Icon]  BetEA        │  (on dark background)
└─────────────────────────────┘
```

**When to use**:
- Dark website sections
- Dark mode UI
- Photos with dark backgrounds
- Video overlays

---

### 5. Monochrome Versions (To be created)

**All Green**:
- Icon and text in green (#00A651)
- Use when color printing is limited

**All Black**:
- Icon and text in black (#000000)
- Use for black & white printing

**All White**:
- Icon and text in white (#FFFFFF)
- Use on dark or photo backgrounds

---

## Clear Space Rules

### Minimum Clear Space
The clear space around the logo should be equal to the **height of the "E"** in BetEA on all sides.

```
        ↕ E height
    ←─────────────→
    
    ┌─────────────┐
    │             │
    │  [  LOGO  ] │  ← E height on all sides
    │             │
    └─────────────┘
```

**Why**: Ensures the logo has breathing room and remains visually distinct.

---

## Size Guidelines

### Digital (Web/App)

| Context | Minimum Width | Recommended Width |
|---------|--------------|-------------------|
| Website Header | 120px | 180px |
| Mobile Header | 100px | 140px |
| Footer | 80px | 120px |
| Email Signature | 150px | 200px |
| Social Media Profile | 400x400px | 512x512px |
| Favicon | 32x32px | 64x64px |
| App Icon (iOS) | 180x180px | 1024x1024px |
| App Icon (Android) | 192x192px | 512x512px |

### Print

| Context | Minimum Size | Recommended Size |
|---------|-------------|------------------|
| Business Card | 25mm | 40mm |
| Letterhead | 30mm | 50mm |
| Flyer/Poster | 50mm | 100mm |
| Billboard | 500mm | 1000mm |

---

## Background Guidelines

### ✅ Approved Backgrounds

**White or Light Backgrounds**:
- Use primary logo (green icon + navy/green text)
- Ensure sufficient contrast

**Dark Backgrounds**:
- Use white logo version
- Ensure background is dark enough (< 30% brightness)

**Photo Backgrounds**:
- Use white logo with semi-transparent dark overlay
- Or use logo on solid color panel

**Brand Color Backgrounds**:
- Green background: Use white logo
- Gold background: Use navy logo
- Navy background: Use white logo

### ❌ Avoid

- Busy patterns or textures
- Low contrast backgrounds
- Gradients that interfere with logo legibility
- Backgrounds with similar colors to logo

---

## Logo Don'ts

### ❌ Never Do These

1. **Don't Stretch or Distort**
   ```
   ❌ [Stretched Logo]  ← Wrong!
   ✅ [Normal Logo]     ← Correct!
   ```

2. **Don't Rotate**
   ```
   ❌ [Rotated Logo]    ← Wrong!
   ✅ [Upright Logo]    ← Correct!
   ```

3. **Don't Change Colors**
   ```
   ❌ [Blue Logo]       ← Wrong!
   ❌ [Red Logo]        ← Wrong!
   ✅ [Green Logo]      ← Correct!
   ```
   *Exception: Approved monochrome versions only*

4. **Don't Add Effects**
   ```
   ❌ [Logo with shadow]    ← Wrong!
   ❌ [Logo with gradient]  ← Wrong!
   ❌ [Logo with outline]   ← Wrong!
   ✅ [Clean Logo]          ← Correct!
   ```

5. **Don't Rearrange Elements**
   ```
   ❌ [Text above icon]     ← Wrong!
   ❌ [Icon on right]       ← Wrong!
   ✅ [Icon on left]        ← Correct!
   ```

6. **Don't Recreate**
   - Always use official logo files
   - Don't attempt to recreate in PowerPoint, Word, etc.
   - Don't trace or redraw

7. **Don't Place on Low-Contrast Backgrounds**
   ```
   ❌ Green logo on green background  ← Wrong!
   ❌ White logo on light background  ← Wrong!
   ✅ Green logo on white background  ← Correct!
   ```

---

## Application Examples

### Website Header
```html
<!-- Desktop -->
<header class="bg-white border-b">
  <img src="logo-horizontal.svg" alt="BetEA" width="180" />
</header>

<!-- Mobile -->
<header class="bg-white border-b">
  <img src="logo-icon-only.svg" alt="BetEA" width="40" />
</header>
```

### Hero Section (Dark Background)
```html
<section class="bg-gradient-hero py-20">
  <img src="logo-white.svg" alt="BetEA" width="250" />
  <h1 class="text-white">Bet Smart, Win Big</h1>
</section>
```

### Email Signature
```
[BetEA Logo - 150px width]

John Doe
Customer Support Manager
BetEA - East Africa's Betting Platform

📧 support@betea.co.ke
📱 +254 700 000 000
🌐 www.betea.co.ke
```

### Social Media Profile
- **Profile Picture**: Use `logo-icon-only.svg` (400x400px minimum)
- **Cover Photo**: Use full logo with tagline (1200x630px)

### App Store Listing
- **App Icon**: `logo-icon-only.svg` exported at required sizes
- **Screenshots**: Include logo in top-left corner (watermark style)

---

## File Formats Explained

### SVG (Scalable Vector Graphics)
- **Best for**: Web, apps, any digital use
- **Advantages**: Scales infinitely, small file size, editable
- **Use when**: You need crisp logos at any size

### PNG (Portable Network Graphics)
- **Best for**: Web, presentations, when transparency needed
- **Advantages**: Transparent background, widely supported
- **Use when**: SVG not supported, need specific pixel size

### ICO (Icon)
- **Best for**: Favicons (browser tab icons)
- **Advantages**: Multi-resolution in one file
- **Use when**: Setting website favicon

### JPG (JPEG)
- **Best for**: Print, photos
- **Advantages**: Small file size
- **Disadvantages**: No transparency, lossy compression
- **Use when**: Placing logo on photo backgrounds for print

---

## Accessibility Considerations

### Alt Text
Always include descriptive alt text:
```html
<img src="logo.svg" alt="BetEA - East Africa's Betting Platform" />
```

### Contrast Ratios
- Green (#00A651) on white: 3.5:1 (AA for large text)
- Navy (#1A1F2E) on white: 14.7:1 (AAA)
- White on green: 3.5:1 (AA for large text)

### Screen Readers
- Logo should be wrapped in a link to homepage
- Include aria-label for better accessibility

---

## Brand Consistency Checklist

Before using the logo, verify:

- [ ] Using official logo files (not recreated)
- [ ] Correct logo variation for context
- [ ] Sufficient clear space around logo
- [ ] Meets minimum size requirements
- [ ] Appropriate background contrast
- [ ] No unauthorized modifications
- [ ] Proper file format for use case
- [ ] Alt text included (digital)

---

## Getting Logo Files

### Current Files
All logo files are in the `design/logo/` folder:
- `logo-concept.svg` - Full logo with tagline
- `logo-horizontal.svg` - Horizontal layout
- `logo-icon-only.svg` - Icon only
- `logo-white.svg` - White version

### Need Additional Formats?
Follow **TASK-000** in `tasks.md` to create:
- PNG exports (multiple sizes)
- Favicon formats
- App icons (iOS/Android)
- Social media assets

---

## Questions?

If you're unsure about logo usage:
1. Check this guide first
2. Review the branding guide (`specs/betting-platform/branding.md`)
3. When in doubt, use the primary logo on white background

---

**Remember**: Consistent logo usage builds brand recognition and trust. Always use official files and follow these guidelines.
