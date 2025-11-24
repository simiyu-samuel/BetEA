# BetEA Design System Quick Reference

## 🎨 Colors

### Primary Palette
```css
/* Green (Primary) */
--brand-green: #00A651
bg-brand-green, text-brand-green, border-brand-green

/* Gold (Accent) */
--brand-gold: #FFB81C
bg-brand-gold, text-brand-gold, border-brand-gold

/* Navy (Professional) */
--brand-navy: #1A1F2E
bg-brand-navy, text-brand-navy, border-brand-navy
```

### Functional Colors
```css
/* Success (Wins) */
bg-success, text-success (#06D6A0)

/* Error (Losses) */
bg-error, text-error (#E63946)

/* Warning */
bg-warning, text-warning (#FFB81C)

/* Info (Live) */
bg-info, text-info (#00B4D8)
```

## 📝 Typography

### Font Families
```css
font-sans      /* Inter - Body text, UI */
font-display   /* Poppins - Headings, Logo */
font-mono      /* JetBrains Mono - Numbers, IDs */
```

### Font Sizes
```css
text-xs    /* 12px - Small labels */
text-sm    /* 14px - Body text, buttons */
text-base  /* 16px - Default body */
text-lg    /* 18px - Card titles */
text-xl    /* 20px - Section headers */
text-2xl   /* 24px - Page titles */
text-3xl   /* 30px - Hero text */
text-4xl   /* 36px - Large hero */
```

### Font Weights
```css
font-normal    /* 400 - Body text */
font-medium    /* 500 - Emphasis */
font-semibold  /* 600 - Headings, buttons */
font-bold      /* 700 - Strong emphasis */
```

## 🔘 Buttons

### Primary Button (Main CTAs)
```jsx
<button className="btn btn-primary btn-md">
  Place Bet
</button>
```
**Use for**: Place bet, deposit, sign up, primary actions

### Secondary Button (Alternative actions)
```jsx
<button className="btn btn-secondary btn-md">
  Cancel
</button>
```
**Use for**: Cancel, back, secondary actions

### Accent Button (Special offers)
```jsx
<button className="btn btn-accent btn-md">
  Claim Bonus
</button>
```
**Use for**: Promotions, bonuses, special features

### Sizes
```css
btn-sm  /* Small - 32px height */
btn-md  /* Medium - 40px height (default) */
btn-lg  /* Large - 48px height */
```

## 📦 Cards

### Basic Card
```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Hoverable Card
```jsx
<div className="card card-hover">
  <h3>Event Card</h3>
</div>
```

## 🎲 Odds Display

### Odds Button
```jsx
<button className="odds-button">
  2.50
</button>
```

### Active Odds (Selected)
```jsx
<button className="odds-button odds-button-active">
  2.50
</button>
```

### Disabled Odds
```jsx
<button className="odds-button odds-button-disabled">
  -
</button>
```

## 💰 Balance Display

```jsx
<span className="balance">KES 1,250.00</span>
```

## 🏷️ Status Badges

```jsx
<span className="badge badge-success">Won</span>
<span className="badge badge-error">Lost</span>
<span className="badge badge-pending">Pending</span>
<span className="badge badge-warning">Review</span>
<span className="badge badge-info">Live</span>
```

## 📱 Spacing

### Padding/Margin Scale
```css
p-1  /* 4px */
p-2  /* 8px */
p-3  /* 12px */
p-4  /* 16px - Default card padding */
p-6  /* 24px */
p-8  /* 32px */
p-12 /* 48px */
```

## 🎯 Border Radius

```css
rounded-sm  /* 4px - Small elements */
rounded-md  /* 8px - Buttons, inputs */
rounded-lg  /* 12px - Cards */
rounded-xl  /* 16px - Large cards */
rounded-full /* Circular - Badges, avatars */
```

## 🌑 Shadows

```css
shadow-sm      /* Subtle - Inputs */
shadow         /* Default - Cards */
shadow-md      /* Medium - Dropdowns */
shadow-lg      /* Large - Modals */
shadow-betslip /* Special - Bet slip */
```

## 📐 Layout

### Container
```jsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

### Grid (Event List)
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

### Flex (Bet Slip)
```jsx
<div className="flex items-center justify-between">
  <span>Total Odds</span>
  <span className="font-bold">5.25</span>
</div>
```

## 🎨 Gradients

```css
bg-gradient-green  /* Green gradient */
bg-gradient-gold   /* Gold gradient */
bg-gradient-hero   /* Hero section gradient */
```

## ⚡ Animations

```css
animate-fade-in     /* Fade in */
animate-slide-up    /* Slide up */
animate-pulse-green /* Pulsing green (live indicator) */
```

## 📱 Responsive Breakpoints

```css
sm:  /* 640px - Small tablets */
md:  /* 768px - Tablets */
lg:  /* 1024px - Laptops */
xl:  /* 1280px - Desktops */
2xl: /* 1536px - Large desktops */
```

### Example
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🔍 Common Patterns

### Event Card
```jsx
<div className="card card-hover">
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm text-gray-500">Premier League</span>
    <span className="badge badge-info">Live</span>
  </div>
  <h3 className="font-semibold mb-3">Arsenal vs Chelsea</h3>
  <div className="grid grid-cols-3 gap-2">
    <button className="odds-button">2.10</button>
    <button className="odds-button">3.40</button>
    <button className="odds-button">3.80</button>
  </div>
</div>
```

### Bet Slip Item
```jsx
<div className="border-b border-gray-200 pb-3 mb-3">
  <div className="flex justify-between items-start mb-1">
    <span className="text-sm font-medium">Arsenal vs Chelsea</span>
    <button className="text-gray-400 hover:text-error">×</button>
  </div>
  <div className="flex justify-between items-center">
    <span className="text-xs text-gray-500">Home Win</span>
    <span className="font-bold text-brand-green">2.10</span>
  </div>
</div>
```

### Input Field
```jsx
<div className="mb-4">
  <label className="block text-sm font-medium mb-1">
    Stake Amount
  </label>
  <input
    type="number"
    className="input"
    placeholder="Enter amount"
  />
  <p className="text-xs text-gray-500 mt-1">
    Min: KES 10, Max: KES 100,000
  </p>
</div>
```

### Loading State
```jsx
<div className="flex items-center justify-center p-8">
  <div className="spinner w-8 h-8"></div>
</div>
```

### Empty State
```jsx
<div className="text-center py-12">
  <div className="text-gray-400 mb-2">
    <svg className="w-16 h-16 mx-auto" />
  </div>
  <h3 className="text-lg font-semibold mb-1">No bets yet</h3>
  <p className="text-gray-500">
    Start betting to see your history here
  </p>
</div>
```

## ♿ Accessibility

### Focus States
All interactive elements have focus states:
```css
focus:ring-2 focus:ring-brand-green focus:ring-offset-2
```

### Touch Targets
Minimum 44x44px for mobile:
```css
touch-target /* min-h-[44px] min-w-[44px] */
```

### Screen Reader Text
```jsx
<span className="sr-only">Loading...</span>
```

## 🎯 Best Practices

1. **Mobile First**: Design for mobile, enhance for desktop
2. **Consistent Spacing**: Use 4px increments (p-1, p-2, p-3, etc.)
3. **Color Contrast**: Ensure WCAG AA compliance (4.5:1 for text)
4. **Touch Targets**: Minimum 44x44px for buttons on mobile
5. **Loading States**: Always show feedback for async actions
6. **Error States**: Clear, actionable error messages
7. **Success States**: Celebrate wins with green and animations

## 📚 Resources

- **Tailwind Docs**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Heroicons**: https://heroicons.com
- **Google Fonts**: https://fonts.google.com
