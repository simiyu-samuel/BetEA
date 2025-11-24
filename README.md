# BetEA - East Africa's Premier Betting Platform

![BetEA Logo](design/logo/logo-horizontal.svg)

**Tagline**: "Bet Smart, Win Big, Play Responsibly"

---

## 📋 Project Overview

BetEA is a comprehensive betting platform designed specifically for the East African market, with a primary focus on Kenya. The platform offers:

- ✅ **Sports Betting** (Pre-match & Live)
- ✅ **Virtual Sports** (AI-generated matches)
- ✅ **Casino Games** (Slots, Table Games, Live Casino)
- ✅ **M-Pesa Integration** (STK Push & Manual)
- ✅ **Pesapal Payment Gateway**
- ✅ **Responsible Gambling Tools**
- ✅ **Full Admin Control Portal**

---

## 📁 Project Structure

```
betting-platform/
├── specs/
│   └── betting-platform/
│       ├── requirements.md      # Functional & non-functional requirements
│       ├── design.md            # Architecture & technical design
│       ├── tasks.md             # Implementation tasks (64 tasks, 8 sprints)
│       └── branding.md          # Brand identity & guidelines
├── design/
│   ├── logo/                    # Logo files (SVG)
│   │   ├── logo-concept.svg
│   │   ├── logo-icon-only.svg
│   │   ├── logo-horizontal.svg
│   │   ├── logo-white.svg
│   │   └── README.md
│   ├── tailwind.config.template.js  # Tailwind config with brand colors
│   ├── globals.css.template         # Global CSS with BetEA styles
│   └── DESIGN_SYSTEM.md             # Design system quick reference
└── README.md                    # This file
```

---

## 🎨 Brand Identity

### Colors
- **Primary Green**: `#00A651` - Trust, growth, M-Pesa familiarity
- **Accent Gold**: `#FFB81C` - Winning, premium, success
- **Professional Navy**: `#1A1F2E` - Stability, trust

### Typography
- **Display**: Poppins (Bold, Semibold) - Logo, headings
- **Body**: Inter (Regular, Medium, Semibold) - UI, content
- **Monospace**: JetBrains Mono - Numbers, IDs, odds

### Logo
The BetEA logo features a rising arrow/chevron symbolizing upward momentum and winning. See `design/logo/` for all variations.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20 LTS
- PostgreSQL 15
- Redis 7
- Docker & Docker Compose (for local development)

### Quick Start

1. **Review Documentation**
   ```bash
   # Read the specs
   cat specs/betting-platform/requirements.md
   cat specs/betting-platform/design.md
   cat specs/betting-platform/tasks.md
   cat specs/betting-platform/branding.md
   ```

2. **Review Brand Assets**
   ```bash
   # Check logo files
   ls design/logo/
   
   # Review design system
   cat design/DESIGN_SYSTEM.md
   ```

3. **Start Implementation**
   - Follow tasks in `specs/betting-platform/tasks.md`
   - Start with **TASK-000**: Branding & Logo Finalization
   - Then proceed to **TASK-001**: Repository Setup

---

## 📊 Project Timeline

**Total Duration**: 18 weeks (4.5 months)

### Sprint Breakdown
- **Sprint 0** (Week 1-2): Project Setup & Branding
- **Sprint 1** (Week 3-4): Authentication & User Management
- **Sprint 2** (Week 5-6): Wallet & Payments (M-Pesa, Pesapal)
- **Sprint 3** (Week 7-8): Sports Betting Core
- **Sprint 4** (Week 9-10): Live Betting & Virtual Sports
- **Sprint 5** (Week 11-12): Casino & KYC
- **Sprint 6** (Week 13-14): Admin Portal & Promotions
- **Sprint 7** (Week 15-16): Responsible Gambling & Notifications
- **Sprint 8** (Week 17-18): Testing, Optimization & Launch

---

## 🎯 Key Features

### For Users
- **Fast M-Pesa Deposits**: STK Push in 30 seconds
- **Low Minimums**: Bet from KES 10
- **Quick Withdrawals**: M-Pesa payouts in 5 minutes
- **Mobile-First**: Optimized for 3G networks
- **Responsible Gambling**: Deposit limits, self-exclusion, reality checks

### For Admins
- **User Management**: KYC approval, account suspension
- **Bet Management**: Manual settlement, void bets
- **Financial Dashboard**: GGR, deposits, withdrawals, reports
- **Risk Management**: Exposure tracking, suspicious activity detection
- **Withdrawal Approval**: Manual review for large amounts

---

## 🔧 Technology Stack

### Frontend
- **Framework**: Next.js 14 (React 18 + TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: Zustand
- **Real-time**: Socket.io client
- **PWA**: next-pwa

### Backend
- **Framework**: NestJS (Node.js + TypeScript)
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **Queue**: Bull (Redis-based)
- **Real-time**: Socket.io

### Infrastructure
- **Hosting**: AWS / DigitalOcean
- **CDN**: Cloudflare
- **Monitoring**: Sentry, New Relic
- **CI/CD**: GitHub Actions

---

## 💳 Payment Integrations

### M-Pesa (Primary)
- **STK Push**: Automated payment prompts
- **C2B**: Manual Paybill payments
- **B2C**: Automated withdrawals
- **Provider**: Safaricom Daraja API

### Pesapal (Secondary)
- **Cards**: Visa, Mastercard
- **Mobile Money**: Airtel Money, M-Pesa
- **Provider**: Pesapal API v3

---

## 📱 Mobile Optimization

- **PWA**: Installable on home screen
- **Offline Mode**: View bet history offline
- **Touch-Optimized**: 44x44px minimum touch targets
- **3G Optimized**: < 3 second page load
- **Responsive**: Mobile-first design

---

## 🔒 Security & Compliance

### Regulatory
- **License**: BCLB (Betting Control and Licensing Board - Kenya)
- **KYC/AML**: Identity verification, source of funds checks
- **Age Verification**: 18+ mandatory
- **Data Protection**: Kenya Data Protection Act 2019 compliance

### Technical
- **HTTPS**: All traffic encrypted
- **JWT**: Secure authentication
- **Rate Limiting**: DDoS protection
- **SQL Injection**: Parameterized queries
- **XSS Protection**: Content Security Policy

---

## 📈 Success Metrics

### User Acquisition (First 3 Months)
- 10,000 registered users
- 30% deposit conversion rate
- CAC < KES 500

### Engagement
- 40% DAU/MAU ratio
- 5 bets per user per week
- 60% retention after 30 days

### Financial
- GGR: KES 5M in first 3 months
- Avg deposit: KES 500
- Avg withdrawal time: < 10 minutes

### Technical
- 99.5% uptime
- < 1% payment failure rate
- < 0.1% bet processing errors

---

## 👥 Team Structure

**Recommended Team Size**: 4-6 developers

- **2 Backend Developers**: NestJS, PostgreSQL, M-Pesa integration
- **2 Frontend Developers**: Next.js, Tailwind, PWA
- **1 Full-Stack Developer**: Betting engine, real-time features
- **1 DevOps Engineer**: Infrastructure, CI/CD, monitoring

---

## 💰 Cost Estimation (MVP - 3 Months)

| Item | Monthly Cost (USD) |
|------|-------------------|
| Cloud Hosting | $200-500 |
| Database (Managed) | $100-200 |
| Redis (Managed) | $50-100 |
| CDN (Cloudflare Pro) | $20 |
| Odds Feed (Sportradar) | $500-1000 |
| Casino Provider | Revenue share (10-15%) |
| M-Pesa API | Transaction fees (1-2%) |
| SMS (Africa's Talking) | ~$100 |
| Email (SendGrid) | $15 |
| Monitoring | $50-100 |
| **Total** | **$1,035-2,035/month** |

*Note: Excludes BCLB license fee (~$50,000 one-time)*

---

## 📚 Documentation

### Specifications
- **[Requirements](specs/betting-platform/requirements.md)**: 25 acceptance criteria, compliance checklist
- **[Design](specs/betting-platform/design.md)**: Architecture, tech stack, 42 correctness properties
- **[Tasks](specs/betting-platform/tasks.md)**: 64 executable tasks across 8 sprints
- **[Branding](specs/betting-platform/branding.md)**: Brand identity, logo specs, voice & tone

### Design
- **[Design System](design/DESIGN_SYSTEM.md)**: Quick reference for colors, typography, components
- **[Logo Files](design/logo/)**: SVG logos in multiple variations
- **[Tailwind Config](design/tailwind.config.template.js)**: Brand colors and theme
- **[Global Styles](design/globals.css.template)**: CSS utilities and components

---

## 🎯 Next Steps

1. **Finalize Branding** (TASK-000)
   - Refine logo in Figma/Illustrator
   - Export all logo variations
   - Create favicon and app icons

2. **Setup Repository** (TASK-001)
   - Initialize monorepo
   - Setup Docker Compose
   - Configure environment variables

3. **Build Foundation** (TASK-002, TASK-003)
   - Setup NestJS backend
   - Setup Next.js frontend
   - Apply BetEA branding

4. **Start Development**
   - Follow task sequence in `tasks.md`
   - Sprint 1: Authentication
   - Sprint 2: Payments (M-Pesa)

---

## 📞 Support & Resources

### External Services
- **M-Pesa Daraja**: https://developer.safaricom.co.ke
- **Pesapal**: https://developer.pesapal.com
- **Africa's Talking**: https://africastalking.com
- **Sportradar**: https://sportradar.com

### Compliance
- **BCLB**: https://bclb.go.ke
- **BeGambleAware**: https://www.begambleaware.org

---

## 📄 License

Proprietary - All rights reserved

---

## 🤝 Contributing

This is a private project. For questions or contributions, contact the project lead.

---

**Built with ❤️ for East Africa**

*"Bet Smart, Win Big, Play Responsibly"*
