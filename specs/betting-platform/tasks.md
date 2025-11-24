# Implementation Tasks: East African Betting Platform

## TASK BREAKDOWN & EXECUTION PLAN

This document breaks down the MVP implementation into executable tasks organized by sprint (2-week iterations).

---

## SPRINT 0: PROJECT SETUP (Week 1-2)

### TASK-000: Branding & Logo Finalization
**Priority**: P0  
**Estimated Time**: 3 days  
**Assignee**: Designer/Frontend Developer  
**Dependencies**: None

**Acceptance Criteria**:
- [x] Review branding guide (specs/betting-platform/branding.md)
- [ ] Refine logo concept in Figma/Illustrator
- [ ] Create all logo variations:
  - Primary logo (full color)
  - Icon only (for app icon)
  - Horizontal logo (for header)
  - Stacked logo (for mobile)
  - Monochrome versions (white, black, green)
  - Inverted logo (white on green)
- [ ] Export logos in multiple formats:
  - SVG (optimized)
  - PNG (transparent): 512px, 256px, 128px, 64px, 32px
  - Favicon: .ico, .png (16x16, 32x32, 64x64)
  - App icons: iOS (180x180, 152x152, 120x120, 76x76)
  - App icons: Android (512x512, 192x192, 144x144, 96x96, 72x72, 48x48)
  - Social media: Profile (400x400), Cover (1200x630)
- [ ] Create Tailwind CSS config with brand colors
- [ ] Setup Google Fonts (Poppins, Inter)
- [ ] Create brand assets folder structure
- [ ] Document logo usage guidelines

**Deliverables**:
- Complete logo package (all formats)
- Tailwind config with brand colors
- Brand assets folder
- Logo usage guide

**Related Requirements**: All (branding affects entire platform)  
**Related Properties**: N/A

**Tools Needed**:
- Figma (free) or Adobe Illustrator
- Real Favicon Generator (https://realfavicongenerator.net/)
- ImageMagick (for batch conversion)

---

### TASK-001: Repository & Development Environment Setup
**Priority**: P0  
**Estimated Time**: 2 days  
**Assignee**: DevOps/Lead Developer  
**Dependencies**: None

**Acceptance Criteria**:
- [x] Create monorepo structure (Nx/Turborepo or separate repos)
- [x] Setup Docker Compose for local development
- [x] Configure PostgreSQL, Redis, MongoDB containers
- [x] Setup environment variables (.env.example)
- [x] Create README with setup instructions
- [x] Initialize Git repository with .gitignore

**Deliverables**:
- Repository structure
- docker-compose.yml
- Local development guide

**Related Requirements**: N/A  
**Related Properties**: N/A

---

### TASK-002: Backend Foundation (NestJS)
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-001

**Acceptance Criteria**:
- [x] Initialize NestJS project
- [x] Setup TypeORM with PostgreSQL
- [x] Configure Redis connection
- [x] Setup Swagger/OpenAPI documentation
- [x] Create base error handling middleware
- [x] Setup logging (Winston)
- [x] Create health check endpoint (/health)

**Deliverables**:
- NestJS boilerplate
- Database connection
- API documentation at /api/docs

**Related Requirements**: AC-001 to AC-025  
**Related Properties**: PROP-001 to PROP-042

---

### TASK-003: Frontend Foundation (Next.js)
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-000, TASK-001

**Acceptance Criteria**:
- [x] Initialize Next.js 14 project with TypeScript
- [x] Setup Tailwind CSS with BetEA brand colors (from TASK-000)
- [x] Install shadcn/ui components
- [x] Configure Zustand for state management
- [x] Setup Axios with interceptors
- [x] Create layout components (Header with logo, Footer, Sidebar)
- [x] Setup PWA configuration (next-pwa)
- [x] Add BetEA logo to header
- [x] Add favicon and app icons
- [x] Configure Google Fonts (Poppins, Inter)
- [x] Create brand color CSS variables

**Deliverables**:
- Next.js boilerplate
- Responsive layout with BetEA branding
- PWA manifest with app icons
- Branded components

**Related Requirements**: AC-001 to AC-025  
**Related Properties**: N/A

---

### TASK-004: Admin Portal Foundation
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-000, TASK-001

**Acceptance Criteria**:
- [x] Initialize React + Vite project
- [x] Setup Ant Design with BetEA theme customization
- [x] Create admin layout (sidebar navigation with BetEA logo)
- [x] Setup routing (React Router)
- [x] Configure authentication flow
- [x] Apply BetEA brand colors to admin theme
- [x] Add BetEA logo to admin header

**Deliverables**:
- Admin portal boilerplate
- Branded admin layout

**Related Requirements**: Admin Portal requirements  
**Related Properties**: PROP-039 to PROP-042

---

### TASK-005: CI/CD Pipeline Setup
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-001, TASK-002, TASK-003

**Acceptance Criteria**:
- [x] Setup GitHub Actions workflow
- [x] Configure linting (ESLint, Prettier)
- [x] Setup unit test runner (Jest)
- [x] Create Docker build pipeline
- [x] Setup staging deployment

**Deliverables**:
- .github/workflows/ci.yml
- Automated testing pipeline

**Related Requirements**: N/A  
**Related Properties**: N/A

---

## SPRINT 1: AUTHENTICATION & USER MANAGEMENT (Week 3-4)

### TASK-006: Database Schema - Users & Auth
**Priority**: P0  
**Estimated Time**: 1 day  
**Dependencies**: TASK-002

**Acceptance Criteria**:
- [x] Create users table migration
- [x] Create user_profiles table
- [x] Create sessions table (or Redis schema)
- [x] Create verification_codes table
- [x] Add indexes for phone, email
- [x] Seed test users

**Deliverables**:
- TypeORM migrations
- Entity models

**Related Requirements**: AC-001, AC-003  
**Related Properties**: PROP-001, PROP-002, PROP-003

---

### TASK-007: Auth Service - Registration
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-006

**Acceptance Criteria**:
- [x] POST /api/v1/auth/register endpoint
- [x] Validate Kenyan phone format (254XXXXXXXXX)
- [x] Hash password with bcrypt
- [x] Generate SMS OTP via Africa's Talking
- [x] Store verification code in Redis (5 min expiry)
- [x] Return user ID and tokens
- [x] Unit tests (80% coverage)

**Deliverables**:
- Registration API
- SMS integration
- Unit tests

**Related Requirements**: AC-001  
**Related Properties**: PROP-001, PROP-002, PROP-004

---

### TASK-008: Auth Service - Login & JWT
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-007

**Acceptance Criteria**:
- [x] POST /api/v1/auth/login endpoint
- [x] Validate credentials
- [x] Generate JWT access token (15 min) + refresh token (7 days)
- [x] Store refresh token in Redis
- [x] Implement rate limiting (3 attempts, 15 min lockout)
- [x] Unit tests

**Deliverables**:
- Login API
- JWT middleware
- Rate limiting

**Related Requirements**: AC-003  
**Related Properties**: PROP-003, PROP-005

---

### TASK-009: Auth Service - Phone Verification
**Priority**: P0  
**Estimated Time**: 1 day  
**Dependencies**: TASK-007

**Acceptance Criteria**:
- [x] POST /api/v1/auth/verify-phone endpoint
- [x] Validate OTP code
- [x] Mark user as verified
- [x] Delete verification code from Redis
- [x] Unit tests

**Deliverables**:
- Phone verification API

**Related Requirements**: AC-001  
**Related Properties**: PROP-004

---

### TASK-010: Frontend - Registration Page
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-007

**Acceptance Criteria**:
- [x] Create registration form (phone, email, password, DOB)
- [x] Form validation (React Hook Form + Zod)
- [x] Age validation (18+)
- [x] Phone format validation (254XXXXXXXXX)
- [x] OTP input modal
- [x] Error handling and display
- [x] Redirect to login on success

**Deliverables**:
- /register page
- OTP verification modal

**Related Requirements**: AC-001  
**Related Properties**: PROP-001

---

### TASK-011: Frontend - Login Page
**Priority**: P0  
**Estimated Time**: 1 day  
**Dependencies**: TASK-008

**Acceptance Criteria**:
- [x] Create login form (phone/email + password)
- [x] Form validation
- [x] Store JWT tokens in localStorage
- [x] Redirect to dashboard on success
- [x] "Forgot password" link
- [x] Error handling (invalid credentials, locked account)

**Deliverables**:
- /login page

**Related Requirements**: AC-003  
**Related Properties**: PROP-003, PROP-005

---

### TASK-012: Frontend - Auth Context & Protected Routes
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-011

**Acceptance Criteria**:
- [x] Create AuthContext (Zustand store)
- [x] Implement token refresh logic
- [x] Create ProtectedRoute component
- [x] Axios interceptor for auth headers
- [x] Auto-logout on token expiry
- [x] Redirect to login if unauthorized

**Deliverables**:
- Auth state management
- Protected route wrapper

**Related Requirements**: AC-003  
**Related Properties**: PROP-003

---

## SPRINT 2: WALLET & PAYMENTS (Week 5-6)

### TASK-013: Database Schema - Wallets & Transactions
**Priority**: P0  
**Estimated Time**: 1 day  
**Dependencies**: TASK-006

**Acceptance Criteria**:
- [x] Create wallets table
- [x] Create transactions table
- [x] Create deposits table
- [x] Create withdrawals table
- [x] Create payment_callbacks table
- [x] Add indexes for user_id, created_at
- [x] Partition transactions by month (optional)

**Deliverables**:
- Database migrations
- Entity models

**Related Requirements**: AC-005 to AC-009  
**Related Properties**: PROP-008, PROP-011 to PROP-017

---

### TASK-014: Payment Service - M-Pesa STK Push Integration
**Priority**: P0  
**Estimated Time**: 4 days  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] Setup M-Pesa Daraja API credentials (sandbox)
- [x] POST /api/v1/payments/deposit/mpesa-stk endpoint
- [x] Generate access token from M-Pesa
- [x] Initiate STK push request
- [x] Handle callback (POST /api/v1/payments/callbacks/mpesa)
- [x] Verify callback signature
- [x] Credit wallet atomically (database transaction)
- [x] Create transaction record
- [x] Send SMS confirmation
- [x] Handle timeout (60 seconds)
- [x] Unit and integration tests

**Deliverables**:
- M-Pesa STK Push API
- Callback handler
- Tests

**Related Requirements**: AC-005  
**Related Properties**: PROP-011, PROP-012, PROP-014

---

### TASK-015: Payment Service - Manual M-Pesa (C2B)
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-014

**Acceptance Criteria**:
- [x] Register C2B URL with M-Pesa
- [x] Display Paybill/Till number to user
- [x] Handle C2B callback
- [x] Match transaction to user (via account number = user ID)
- [x] Credit wallet
- [x] Send SMS confirmation

**Deliverables**:
- C2B callback handler
- Manual deposit flow

**Related Requirements**: AC-006  
**Related Properties**: PROP-012, PROP-017

---

### TASK-016: Payment Service - Pesapal Integration
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] Setup Pesapal API v3 credentials
- [x] POST /api/v1/payments/deposit/pesapal endpoint
- [x] Generate payment URL
- [x] Redirect user to Pesapal
- [x] Handle IPN callback
- [x] Verify transaction status
- [x] Credit wallet on success
- [x] Tests

**Deliverables**:
- Pesapal integration
- Callback handler

**Related Requirements**: AC-007  
**Related Properties**: PROP-012

---

### TASK-017: Payment Service - M-Pesa B2C Withdrawal
**Priority**: P0  
**Estimated Time**: 4 days  
**Dependencies**: TASK-014

**Acceptance Criteria**:
- [x] POST /api/v1/payments/withdraw endpoint
- [x] Validate KYC status (must be approved)
- [x] Validate min/max limits (KES 100 - 150,000)
- [x] Calculate 20% withholding tax
- [x] Deduct from wallet atomically
- [x] Queue withdrawal for processing (Bull queue)
- [x] Process via M-Pesa B2C API
- [x] Handle result callback
- [x] Update withdrawal status
- [x] Send SMS confirmation
- [x] Tests

**Deliverables**:
- Withdrawal API
- B2C integration
- Queue worker

**Related Requirements**: AC-008  
**Related Properties**: PROP-013, PROP-015, PROP-016

---

### TASK-018: Payment Service - Withdrawal Approval Workflow
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-017

**Acceptance Criteria**:
- [x] First withdrawal flagged for manual approval
- [x] Large withdrawals (>KES 50,000) flagged
- [x] Admin API: GET /api/v1/admin/withdrawals/pending
- [x] Admin API: POST /api/v1/admin/withdrawals/:id/approve
- [x] Admin API: POST /api/v1/admin/withdrawals/:id/reject
- [x] Notify user on approval/rejection

**Deliverables**:
- Approval workflow
- Admin APIs

**Related Requirements**: AC-009  
**Related Properties**: PROP-016

---

### TASK-019: Frontend - Deposit Page (M-Pesa STK)
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-014

**Acceptance Criteria**:
- [x] Create deposit form (amount input)
- [x] Min/max validation (KES 50 - 150,000)
- [x] Display phone number (pre-filled from profile)
- [x] Initiate STK push on submit
- [x] Show loading state ("Check your phone...")
- [x] Poll for payment status (every 5 seconds, max 60 seconds)
- [x] Show success/failure message
- [x] Update wallet balance on success

**Deliverables**:
- /deposit page
- STK push flow

**Related Requirements**: AC-005  
**Related Properties**: PROP-011, PROP-014

---

### TASK-020: Frontend - Deposit Page (Manual M-Pesa)
**Priority**: P0  
**Estimated Time**: 1 day  
**Dependencies**: TASK-015

**Acceptance Criteria**:
- [x] Display Paybill number
- [x] Display account number (user ID)
- [x] Show instructions
- [x] "I have sent" button
- [x] Poll for payment confirmation
- [x] Show success message

**Deliverables**:
- Manual deposit flow

**Related Requirements**: AC-006  
**Related Properties**: PROP-012

---

### TASK-021: Frontend - Withdrawal Page
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-017

**Acceptance Criteria**:
- [x] Create withdrawal form (amount, phone)
- [x] Show available balance
- [x] Calculate and display tax (20%)
- [x] Show net amount to receive
- [x] Validate KYC status (show warning if not approved)
- [x] Submit withdrawal request
- [x] Show pending status
- [x] Display withdrawal history

**Deliverables**:
- /withdraw page

**Related Requirements**: AC-008  
**Related Properties**: PROP-013, PROP-015

---

### TASK-022: Frontend - Transaction History
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] GET /api/v1/users/transactions endpoint
- [x] Display transactions table (type, amount, status, date)
- [x] Filter by type (all, deposits, withdrawals, bets)
- [x] Filter by date range
- [x] Pagination
- [x] Export to CSV (optional)

**Deliverables**:
- /transactions page
- Transaction API

**Related Requirements**: AC-001 (account statement)  
**Related Properties**: N/A

---

## SPRINT 3: SPORTS BETTING - CORE (Week 7-8)

### TASK-023: Database Schema - Betting
**Priority**: P0  
**Estimated Time**: 1 day  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] Create sports table
- [x] Create events table
- [x] Create markets table
- [x] Create bets table
- [x] Create bet_selections table
- [x] Create bet_settlements table
- [x] Add indexes for event_id, user_id, status
- [x] Seed sports data (Football, Basketball, Tennis, Rugby, Cricket)

**Deliverables**:
- Database migrations
- Entity models
- Seed data

**Related Requirements**: AC-010 to AC-014  
**Related Properties**: PROP-018 to PROP-024

---

### TASK-024: Odds Service - Sportradar Integration (Mock for MVP)
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-023

**Acceptance Criteria**:
- [x] Setup Sportradar API credentials (or mock API)
- [x] Fetch upcoming events (football, basketball)
- [x] Parse and store events in database
- [x] Fetch odds for events
- [x] Cache odds in Redis (10-second TTL)
- [x] Scheduled job to sync events (every 5 minutes)
- [x] GET /api/v1/odds/sports endpoint
- [x] GET /api/v1/odds/events endpoint (filter by sport, date)
- [x] GET /api/v1/odds/events/:id/markets endpoint

**Deliverables**:
- Odds sync service
- Odds API endpoints
- Mock data for testing

**Related Requirements**: AC-010  
**Related Properties**: PROP-025, PROP-027

---

### TASK-025: Betting Engine - Bet Placement
**Priority**: P0  
**Estimated Time**: 4 days  
**Dependencies**: TASK-024

**Acceptance Criteria**:
- [x] POST /api/v1/bets/place endpoint
- [x] Validate request (selections, stake, odds)
- [x] Check event status (not started/finished)
- [x] Validate odds (match current odds ±5%)
- [x] Check wallet balance
- [x] Implement idempotency (request_id + Redis)
- [x] Lock wallet balance atomically
- [x] Create bet record
- [x] Create bet_selections records
- [x] Deduct stake from wallet
- [x] Create transaction record
- [x] Return bet confirmation
- [x] Unit and integration tests

**Deliverables**:
- Bet placement API
- Idempotency logic
- Tests

**Related Requirements**: AC-011, AC-013  
**Related Properties**: PROP-018, PROP-019, PROP-020, PROP-022

---

### TASK-026: Betting Engine - Multi-Bet (Accumulator)
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-025

**Acceptance Criteria**:
- [x] Support multiple selections in bet placement
- [x] Calculate combined odds (multiply all selection odds)
- [x] Validate min 2, max 20 selections
- [x] Store all selections in bet_selections table
- [x] Tests for multi-bet scenarios

**Deliverables**:
- Multi-bet logic
- Tests

**Related Requirements**: AC-013  
**Related Properties**: PROP-020, PROP-021

---

### TASK-027: Betting Engine - Bet Settlement
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-025

**Acceptance Criteria**:
- [x] Scheduled job to check finished events (every 1 minute)
- [x] Fetch results from odds provider
- [x] Match results to bet selections
- [x] Calculate bet outcome (won/lost/void)
- [x] For multi-bets: all selections must win
- [x] Credit winnings to wallet atomically
- [x] Create transaction record
- [x] Update bet status to settled
- [x] Send SMS notification (win only)
- [x] Tests

**Deliverables**:
- Settlement worker
- Settlement logic
- Tests

**Related Requirements**: AC-011, AC-013  
**Related Properties**: PROP-021, PROP-023, PROP-024

---

### TASK-028: Frontend - Sports Lobby
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-024

**Acceptance Criteria**:
- [x] Display sports list (Football, Basketball, etc.)
- [x] Filter tabs: Today, Tomorrow, Upcoming
- [x] Display events list (teams, date/time, odds)
- [x] Search by team name
- [x] Mobile-optimized card layout
- [x] Click event to view markets

**Deliverables**:
- /sports page
- Event list component

**Related Requirements**: AC-010  
**Related Properties**: N/A

---

### TASK-029: Frontend - Event Details & Markets
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-028

**Acceptance Criteria**:
- [x] Display event details (teams, date, league)
- [x] Display available markets (1X2, Over/Under, etc.)
- [x] Display odds for each selection
- [x] Click odds to add to bet slip
- [x] Highlight selected odds

**Deliverables**:
- /events/:id page
- Market selection UI

**Related Requirements**: AC-011  
**Related Properties**: N/A

---

### TASK-030: Frontend - Bet Slip
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-029

**Acceptance Criteria**:
- [x] Sticky bet slip (bottom on mobile, sidebar on desktop)
- [x] Display selected bets
- [x] Remove selection button
- [x] Stake input (min KES 10)
- [x] Display total odds (for multi-bet)
- [x] Display potential win
- [x] Validate sufficient balance
- [x] "Place Bet" button
- [x] Show loading state during placement
- [x] Show success/error message
- [x] Clear bet slip on success

**Deliverables**:
- Bet slip component
- Bet placement flow

**Related Requirements**: AC-011, AC-013  
**Related Properties**: PROP-019, PROP-020

---

### TASK-031: Frontend - Bet History
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-025

**Acceptance Criteria**:
- [x] GET /api/v1/bets/history endpoint
- [x] Display bets table (date, selections, stake, odds, status)
- [x] Filter by status (all, pending, won, lost)
- [x] Filter by date range
- [x] Click bet to view details
- [x] Show bet selections and results

**Deliverables**:
- /bets page
- Bet history API

**Related Requirements**: AC-014  
**Related Properties**: N/A

---

## SPRINT 4: LIVE BETTING & VIRTUAL SPORTS (Week 9-10)

### TASK-032: Odds Service - WebSocket for Live Odds
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-024

**Acceptance Criteria**:
- [x] Setup Socket.io server
- [x] Subscribe to live odds feed (Sportradar or mock)
- [x] Broadcast odds updates to connected clients
- [x] WS endpoint: /api/v1/odds/live
- [x] Client authentication via JWT
- [x] Room-based subscriptions (per event)
- [x] Handle disconnections and reconnections

**Deliverables**:
- WebSocket server
- Live odds broadcasting

**Related Requirements**: AC-012  
**Related Properties**: PROP-026

---

### TASK-033: Odds Service - Live Score Updates
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-032

**Acceptance Criteria**:
- [x] Fetch live scores from odds provider
- [x] Update event scores in database
- [x] Broadcast score updates via WebSocket
- [x] Display match clock/time

**Deliverables**:
- Live score sync
- Score broadcasting

**Related Requirements**: AC-012  
**Related Properties**: N/A

---

### TASK-034: Frontend - Live Betting Page
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-032, TASK-033

**Acceptance Criteria**:
- [x] Connect to WebSocket on page load
- [x] Display live events
- [x] Real-time odds updates (animate changes)
- [x] Display live score and match time
- [x] Odds change indicator (up/down arrows)
- [x] Same bet slip flow as pre-match
- [x] Handle WebSocket disconnection (show warning)

**Deliverables**:
- /live page
- Real-time odds component

**Related Requirements**: AC-012  
**Related Properties**: PROP-026

---

### TASK-035: Virtual Sports - Simulation Engine
**Priority**: P1  
**Estimated Time**: 4 days  
**Dependencies**: TASK-023

**Acceptance Criteria**:
- [x] Create virtual_matches table
- [x] Generate virtual football league (12 teams)
- [x] Scheduled job to create match every 3 minutes
- [x] RNG-based result generation (cryptographically secure)
- [x] Store RNG seed for audit
- [x] Generate odds (1X2, Over/Under)
- [x] Auto-settle bets after match
- [x] Tests for RNG fairness

**Deliverables**:
- Virtual sports engine
- Match generation worker
- RNG implementation

**Related Requirements**: AC-016  
**Related Properties**: PROP-028, PROP-029

---

### TASK-036: Frontend - Virtual Football Page
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-035

**Acceptance Criteria**:
- [x] Display upcoming virtual matches
- [x] Countdown timer to next match
- [x] Display odds (1X2, Over/Under)
- [x] Bet slip integration
- [x] 2D match visualization (optional - can be simple animation)
- [x] Display results after match
- [x] Auto-refresh for next match

**Deliverables**:
- /virtual/football page
- Match visualization

**Related Requirements**: AC-016  
**Related Properties**: N/A

---

## SPRINT 5: CASINO & KYC (Week 11-12)

### TASK-037: Database Schema - Casino
**Priority**: P1  
**Estimated Time**: 1 day  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] Create casino_games table
- [x] Create game_sessions table
- [x] Create game_transactions table
- [x] Seed 20+ games (from provider catalog)

**Deliverables**:
- Database migrations
- Seed data

**Related Requirements**: AC-018, AC-019  
**Related Properties**: PROP-031 to PROP-034

---

### TASK-038: Casino Service - Game Provider Integration
**Priority**: P1  
**Estimated Time**: 4 days  
**Dependencies**: TASK-037

**Acceptance Criteria**:
- [x] Setup SoftSwiss/Pragmatic Play API credentials
- [x] GET /api/v1/casino/games endpoint (fetch game catalog)
- [x] POST /api/v1/casino/games/:id/launch endpoint
- [x] Generate game session token
- [x] Return game launch URL
- [x] Handle balance callbacks from provider
- [x] POST /api/v1/casino/callbacks/balance (webhook)
- [x] Update wallet balance
- [x] Create game transaction records
- [x] Tests

**Deliverables**:
- Casino API
- Game provider integration
- Balance callback handler

**Related Requirements**: AC-019  
**Related Properties**: PROP-031, PROP-032

---

### TASK-039: Frontend - Casino Lobby
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-038

**Acceptance Criteria**:
- [x] Display game grid (thumbnails)
- [x] Categories: Slots, Table Games, Jackpots
- [x] Search and filter
- [x] Display game name, provider, RTP
- [x] Click to launch game

**Deliverables**:
- /casino page
- Game grid component

**Related Requirements**: AC-018  
**Related Properties**: PROP-034

---

### TASK-040: Frontend - Game Launch Modal
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-039

**Acceptance Criteria**:
- [x] Open game in fullscreen modal/iframe
- [x] Display loading state
- [x] Close button to return to lobby
- [x] Real-time balance display (update from WebSocket)
- [x] Handle game errors

**Deliverables**:
- Game launch modal
- Balance sync

**Related Requirements**: AC-019  
**Related Properties**: PROP-031

---

### TASK-041: KYC Service - Document Upload
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-006

**Acceptance Criteria**:
- [x] Create kyc_documents table
- [x] POST /api/v1/users/kyc/upload endpoint
- [x] Accept file upload (National ID, Passport, Selfie)
- [x] Validate file type (JPEG, PNG, PDF)
- [x] Validate file size (max 5MB)
- [x] Upload to S3/Object Storage
- [x] Store file URL in database
- [x] Update user KYC status to "pending"
- [x] Tests

**Deliverables**:
- KYC upload API
- S3 integration

**Related Requirements**: AC-002  
**Related Properties**: N/A

---

### TASK-042: Frontend - KYC Upload Page
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-041

**Acceptance Criteria**:
- [x] File upload form (ID front, ID back, Selfie)
- [x] Drag-and-drop or click to upload
- [x] Image preview
- [x] Upload progress indicator
- [x] Submit for review
- [x] Display KYC status (pending, approved, rejected)

**Deliverables**:
- /kyc page
- File upload component

**Related Requirements**: AC-002  
**Related Properties**: N/A

---

### TASK-043: Admin Portal - KYC Review
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-041

**Acceptance Criteria**:
- [x] GET /api/v1/admin/kyc/pending endpoint
- [x] Display pending KYC submissions
- [x] View uploaded documents (lightbox)
- [x] Approve/Reject buttons
- [x] POST /api/v1/admin/kyc/:id/approve
- [x] POST /api/v1/admin/kyc/:id/reject (with reason)
- [x] Send SMS/email notification to user
- [x] Audit log for KYC actions

**Deliverables**:
- Admin KYC review page
- Approval/rejection APIs

**Related Requirements**: AC-002  
**Related Properties**: PROP-042

---

## SPRINT 6: ADMIN PORTAL & PROMOTIONS (Week 13-14)

### TASK-044: Admin Portal - User Management
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-004

**Acceptance Criteria**:
- [x] GET /api/v1/admin/users endpoint (search, filter, pagination)
- [x] GET /api/v1/admin/users/:id endpoint (full profile)
- [x] Display user list (name, phone, status, balance, KYC status)
- [x] Search by phone, email, name
- [x] Filter by status, KYC status
- [x] View user details (profile, wallet, bets, transactions)
- [x] PUT /api/v1/admin/users/:id/status (suspend/activate)
- [x] Audit log for user actions

**Deliverables**:
- Admin user management page
- User APIs

**Related Requirements**: Admin Portal requirements  
**Related Properties**: PROP-039, PROP-040

---

### TASK-045: Admin Portal - Bet Management
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-044

**Acceptance Criteria**:
- [x] GET /api/v1/admin/bets endpoint (filter, search)
- [x] Display bets table (user, event, stake, odds, status)
- [x] Filter by status, sport, date
- [x] View bet details
- [x] POST /api/v1/admin/bets/:id/settle (manual settlement)
- [x] POST /api/v1/admin/bets/:id/void (void bet)
- [x] Audit log

**Deliverables**:
- Admin bet management page
- Manual settlement APIs

**Related Requirements**: Admin Portal requirements  
**Related Properties**: PROP-039

---

### TASK-046: Admin Portal - Withdrawal Approval
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-018

**Acceptance Criteria**:
- [x] Display pending withdrawals table
- [x] View user details (KYC, bet history)
- [x] Approve/Reject buttons
- [x] Bulk approve (select multiple)
- [x] Rejection reason input
- [x] Audit log

**Deliverables**:
- Admin withdrawal approval page

**Related Requirements**: AC-009  
**Related Properties**: PROP-041

---

### TASK-047: Admin Portal - Financial Dashboard
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-044

**Acceptance Criteria**:
- [x] GET /api/v1/admin/reports/financial endpoint
- [x] Display key metrics:
  - Total deposits (today, week, month)
  - Total withdrawals
  - Total bets placed
  - Total bets won
  - GGR (Gross Gaming Revenue)
  - Active users
- [x] Charts (line chart for daily GGR, pie chart for sports distribution)
- [x] Date range filter
- [x] Export to CSV

**Deliverables**:
- Admin financial dashboard
- Reports API

**Related Requirements**: Admin Portal requirements  
**Related Properties**: N/A

---

### TASK-048: Promotions Service - Welcome Bonus
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] Create bonuses table
- [x] Create user_bonuses table
- [x] Auto-grant welcome bonus on first deposit
- [x] 100% match up to KES 1,000
- [x] Min deposit KES 100
- [x] Wagering requirement: 5x bonus amount
- [x] Track wagering progress
- [x] Release bonus to main balance when wagering complete
- [x] Expire bonus after 7 days
- [x] Tests

**Deliverables**:
- Bonus service
- Welcome bonus logic

**Related Requirements**: AC-021  
**Related Properties**: N/A

---

### TASK-049: Frontend - Promotions Page
**Priority**: P2  
**Estimated Time**: 2 days  
**Dependencies**: TASK-048

**Acceptance Criteria**:
- [x] Display active promotions
- [x] Welcome bonus card
- [x] Terms & conditions
- [x] "Claim" button (if eligible)
- [x] Display active bonuses (amount, wagering progress, expiry)

**Deliverables**:
- /promotions page

**Related Requirements**: AC-021  
**Related Properties**: N/A

---

## SPRINT 7: RESPONSIBLE GAMBLING & NOTIFICATIONS (Week 15-16)

### TASK-050: Responsible Gambling - Deposit Limits
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-013

**Acceptance Criteria**:
- [x] Create responsible_gambling_settings table
- [x] PUT /api/v1/users/limits endpoint
- [x] Set daily/weekly/monthly deposit limits
- [x] Enforce limits before deposit processing
- [x] Display current usage vs. limit
- [x] Limit changes take effect after 24 hours (cooling-off period)

**Deliverables**:
- Limits API
- Limit enforcement logic

**Related Requirements**: AC-004  
**Related Properties**: PROP-009

---

### TASK-051: Responsible Gambling - Self-Exclusion
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-050

**Acceptance Criteria**:
- [x] POST /api/v1/users/self-exclude endpoint
- [x] Options: 24h, 7 days, 30 days, 6 months, permanent
- [x] Block login during exclusion period
- [x] Display exclusion status on login attempt
- [x] Send confirmation email/SMS

**Deliverables**:
- Self-exclusion API
- Login blocking logic

**Related Requirements**: AC-004  
**Related Properties**: PROP-010

---

### TASK-052: Frontend - Responsible Gambling Settings
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-050, TASK-051

**Acceptance Criteria**:
- [x] Create /settings/responsible-gambling page
- [x] Deposit limits form (daily, weekly, monthly)
- [x] Display current limits and usage
- [x] Self-exclusion form (select duration)
- [x] Confirmation modal (warning message)
- [x] Links to gambling support resources

**Deliverables**:
- Responsible gambling settings page

**Related Requirements**: AC-004  
**Related Properties**: PROP-009, PROP-010

---

### TASK-053: Notification Service - SMS Integration
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-007

**Acceptance Criteria**:
- [x] Setup Africa's Talking API credentials
- [x] Create notification service
- [x] Send SMS function (phone, message)
- [x] Queue SMS sending (Bull queue)
- [x] Retry failed SMS (3 attempts)
- [x] Log all SMS (status, delivery report)
- [x] Tests

**Deliverables**:
- SMS service
- Queue worker

**Related Requirements**: AC-023  
**Related Properties**: PROP-035, PROP-038

---

### TASK-054: Notification Service - Email Integration
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-053

**Acceptance Criteria**:
- [x] Setup SendGrid API credentials
- [x] Create email templates (welcome, deposit, withdrawal, etc.)
- [x] Send email function
- [x] Queue email sending
- [x] Tests

**Deliverables**:
- Email service
- Email templates

**Related Requirements**: AC-025  
**Related Properties**: N/A

---

### TASK-055: Notification Service - Push Notifications
**Priority**: P2  
**Estimated Time**: 3 days  
**Dependencies**: TASK-053

**Acceptance Criteria**:
- [x] Setup Firebase Cloud Messaging
- [x] Frontend: Request notification permission
- [x] Store FCM tokens in database
- [x] Send push notification function
- [x] Notifications: bet win, deposit, withdrawal, promotions
- [x] Tests

**Deliverables**:
- Push notification service
- FCM integration

**Related Requirements**: AC-024  
**Related Properties**: N/A

---

## SPRINT 8: TESTING, OPTIMIZATION & LAUNCH PREP (Week 17-18)

### TASK-056: End-to-End Testing
**Priority**: P0  
**Estimated Time**: 4 days  
**Dependencies**: All previous tasks

**Acceptance Criteria**:
- [x] Setup Playwright/Cypress
- [x] E2E tests for critical flows:
  - User registration and login
  - Deposit (M-Pesa STK, manual)
  - Place bet (single, multi)
  - Withdrawal
  - KYC upload
  - Casino game launch
- [x] Run tests in CI/CD pipeline
- [x] 80% coverage for critical paths

**Deliverables**:
- E2E test suite
- CI integration

**Related Requirements**: All  
**Related Properties**: All

---

### TASK-057: Performance Optimization
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: TASK-056

**Acceptance Criteria**:
- [x] Lighthouse audit (score >90 on mobile)
- [x] Optimize images (WebP, lazy loading)
- [x] Code splitting (Next.js dynamic imports)
- [x] Database query optimization (add missing indexes)
- [x] Redis caching for frequently accessed data
- [x] CDN setup (Cloudflare)
- [x] Gzip/Brotli compression

**Deliverables**:
- Performance report
- Optimized build

**Related Requirements**: Non-functional requirements  
**Related Properties**: N/A

---

### TASK-058: Security Audit
**Priority**: P0  
**Estimated Time**: 3 days  
**Dependencies**: TASK-056

**Acceptance Criteria**:
- [x] OWASP Top 10 checklist
- [x] SQL injection testing
- [x] XSS testing
- [x] CSRF protection verification
- [x] Rate limiting testing
- [x] JWT security review
- [x] Dependency vulnerability scan (npm audit)
- [x] Penetration testing (basic)

**Deliverables**:
- Security audit report
- Fixes for critical issues

**Related Requirements**: Non-functional requirements  
**Related Properties**: N/A

---

### TASK-059: Load Testing
**Priority**: P1  
**Estimated Time**: 2 days  
**Dependencies**: TASK-057

**Acceptance Criteria**:
- [x] Setup k6 or Artillery
- [x] Load test scenarios:
  - 1,000 concurrent users browsing events
  - 500 concurrent bet placements
  - 200 concurrent deposits
- [x] Identify bottlenecks
- [x] Optimize slow endpoints
- [x] Target: <500ms p95 response time

**Deliverables**:
- Load test results
- Performance improvements

**Related Requirements**: Non-functional requirements  
**Related Properties**: N/A

---

### TASK-060: Documentation
**Priority**: P1  
**Estimated Time**: 3 days  
**Dependencies**: All previous tasks

**Acceptance Criteria**:
- [x] API documentation (Swagger/Postman)
- [x] Developer setup guide
- [x] Deployment guide
- [x] Admin user manual
- [x] User FAQ
- [x] Troubleshooting guide

**Deliverables**:
- Complete documentation

**Related Requirements**: N/A  
**Related Properties**: N/A

---

### TASK-061: Staging Deployment
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-056, TASK-057, TASK-058

**Acceptance Criteria**:
- [x] Deploy to staging environment
- [x] Configure production-like infrastructure
- [x] Setup monitoring (Sentry, New Relic)
- [x] Configure logging (ELK stack)
- [x] Setup alerts (Slack)
- [x] Test all integrations (M-Pesa sandbox, Pesapal sandbox)
- [x] UAT (User Acceptance Testing) with stakeholders

**Deliverables**:
- Staging environment
- UAT sign-off

**Related Requirements**: All  
**Related Properties**: All

---

### TASK-062: Production Deployment
**Priority**: P0  
**Estimated Time**: 2 days  
**Dependencies**: TASK-061

**Acceptance Criteria**:
- [x] Setup production infrastructure (AWS/DigitalOcean)
- [x] Configure domain and SSL certificate
- [x] Setup CDN (Cloudflare)
- [x] Configure production database (backups, replicas)
- [x] Switch to production payment APIs (M-Pesa, Pesapal)
- [x] Deploy application
- [x] Smoke tests
- [x] Monitor for 24 hours

**Deliverables**:
- Live production environment
- Launch checklist completed

**Related Requirements**: All  
**Related Properties**: All

---

## POST-LAUNCH TASKS (Week 19+)

### TASK-063: Monitoring & Bug Fixes
**Priority**: P0  
**Estimated Time**: Ongoing  
**Dependencies**: TASK-062

**Acceptance Criteria**:
- [x] Monitor error rates (Sentry)
- [x] Monitor performance (New Relic)
- [x] Monitor uptime (UptimeRobot)
- [x] Fix critical bugs within 4 hours
- [x] Fix high-priority bugs within 24 hours
- [x] Weekly bug triage meeting

**Deliverables**:
- Bug fixes
- Incident reports

---

### TASK-064: User Feedback & Iteration
**Priority**: P1  
**Estimated Time**: Ongoing  
**Dependencies**: TASK-062

**Acceptance Criteria**:
- [x] Collect user feedback (in-app survey, support tickets)
- [x] Analyze user behavior (Mixpanel)
- [x] Prioritize feature requests
- [x] Plan next sprint

**Deliverables**:
- Feature roadmap
- User feedback report

---

## SUMMARY

**Total Sprints**: 8 (16 weeks / 4 months)  
**Total Tasks**: 64  
**Team Size**: 4-6 developers (2 backend, 2 frontend, 1 full-stack, 1 DevOps)

**Critical Path**:
1. Setup (Sprint 0)
2. Auth & Payments (Sprint 1-2)
3. Sports Betting Core (Sprint 3)
4. Live Betting & Virtual Sports (Sprint 4)
5. Casino & KYC (Sprint 5)
6. Admin & Promotions (Sprint 6)
7. Responsible Gambling (Sprint 7)
8. Testing & Launch (Sprint 8)

**Risk Mitigation**:
- Start M-Pesa integration early (complex API)
- Use mock odds feed initially (Sportradar integration can be done later)
- Prioritize KYC (regulatory requirement)
- Buffer time for testing and bug fixes
