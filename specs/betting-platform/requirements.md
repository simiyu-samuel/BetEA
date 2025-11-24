# Requirements Specification: East African Betting Platform

## 1. PROJECT OVERVIEW

**Project Name**: BetEA (East African Betting Platform)  
**Target Market**: Kenya (primary), Tanzania, Uganda (expansion)  
**Launch Timeline**: MVP in 4 months  
**Primary Users**: Mobile-first bettors aged 18-45 in East Africa

## 2. BUSINESS REQUIREMENTS

### 2.1 Core Value Proposition
- Mobile-optimized betting platform for East African market
- Seamless M-Pesa integration (STK Push + Manual)
- Low minimum bets (KES 10+)
- Focus on popular local and international sports
- Fast payouts via mobile money

### 2.2 Revenue Model
- House edge on sports betting (5-8% margin)
- Casino games commission (2-5% GGR)
- Virtual sports revenue
- Compliance: 20% withholding tax on winnings (Kenya), 7.5% excise duty on stakes

### 2.3 Regulatory Requirements
- **Kenya**: BCLB (Betting Control and Licensing Board) license
- **KYC/AML**: ID verification (National ID, Passport)
- **Age Verification**: 18+ mandatory
- **Responsible Gambling**: Self-exclusion, deposit limits, reality checks
- **Data Protection**: Kenya Data Protection Act 2019 compliance
- **Tax Reporting**: Automated withholding tax calculation and reporting

## 3. FUNCTIONAL REQUIREMENTS

### 3.1 User Management

#### AC-001: User Registration
**Priority**: P0 (Critical)  
**Description**: Users can register using phone number or email  
**Acceptance Criteria**:
- User provides: phone number (Kenyan format: 254XXXXXXXXX), email, password, date of birth
- Phone verification via SMS OTP
- Email verification link sent
- Age validation (18+ only)
- Terms & conditions acceptance required
- Auto-create wallet with KES 0 balance

#### AC-002: KYC Verification
**Priority**: P0 (Critical)  
**Description**: Users must verify identity before withdrawal  
**Acceptance Criteria**:
- Upload National ID or Passport photo
- Selfie verification
- Manual admin review (MVP) or automated (future)
- Withdrawal blocked until KYC approved
- Deposits allowed before KYC (up to KES 10,000 limit)

#### AC-003: User Login
**Priority**: P0 (Critical)  
**Acceptance Criteria**:
- Login via phone/email + password
- "Remember me" option
- Password reset via SMS/email
- Session timeout after 24 hours of inactivity
- Optional 2FA via SMS (future)

#### AC-004: Responsible Gambling Tools
**Priority**: P1 (High)  
**Acceptance Criteria**:
- Set daily/weekly/monthly deposit limits
- Set loss limits
- Self-exclusion (24h, 7 days, 30 days, 6 months, permanent)
- Reality check pop-ups every 60 minutes
- Links to gambling support resources

### 3.2 Payment Integration

#### AC-005: M-Pesa STK Push Deposit
**Priority**: P0 (Critical)  
**Description**: Automated M-Pesa payment via STK push  
**Acceptance Criteria**:
- User enters amount (min KES 50, max KES 150,000)
- System triggers STK push to user's phone
- User enters M-Pesa PIN on phone
- Payment confirmation within 30 seconds
- Wallet credited automatically
- Transaction receipt via SMS and in-app
- Handle timeout (60 seconds) and cancellation

#### AC-006: Manual M-Pesa Deposit
**Priority**: P0 (Critical)  
**Description**: User sends M-Pesa to Paybill/Till number  
**Acceptance Criteria**:
- Display Paybill number and account number (user ID)
- User sends M-Pesa manually
- System receives callback from M-Pesa API
- Auto-credit wallet within 2 minutes
- Manual reconciliation dashboard for admin (failed callbacks)

#### AC-007: Pesapal Integration
**Priority**: P1 (High)  
**Description**: Alternative payment via Pesapal (cards, mobile money)  
**Acceptance Criteria**:
- Redirect to Pesapal payment page
- Support Visa/Mastercard, Airtel Money, M-Pesa
- Handle success/failure callbacks
- Auto-credit on success

#### AC-008: M-Pesa Withdrawal
**Priority**: P0 (Critical)  
**Acceptance Criteria**:
- Min withdrawal: KES 100, Max: KES 150,000/day
- KYC must be approved
- Deduct 20% withholding tax automatically
- Process via M-Pesa B2C API
- Confirmation within 5 minutes
- SMS notification on success/failure
- Daily withdrawal limit enforcement

#### AC-009: Withdrawal Approval Workflow
**Priority**: P1 (High)  
**Acceptance Criteria**:
- First withdrawal: manual admin approval
- Subsequent withdrawals: auto-approve if < KES 10,000
- Large withdrawals (>KES 50,000): manual review
- Admin can approve/reject with reason
- User notified via SMS/email

### 3.3 Sports Betting

#### AC-010: Browse Sports & Events
**Priority**: P0 (Critical)  
**Acceptance Criteria**:
- Display sports: Football, Basketball, Tennis, Rugby, Cricket
- Filter by: Today, Tomorrow, Live, Upcoming
- Search by team name
- Show: teams, date/time, available markets, odds
- Mobile-optimized list view

#### AC-011: Pre-Match Betting
**Priority**: P0 (Critical)  
**Acceptance Criteria**:
- Market types: 1X2, Double Chance, Over/Under, Both Teams to Score, Correct Score
- Odds format: Decimal (default for Kenya)
- Add selections to bet slip
- Bet slip shows: selections, stake, potential win, total odds
- Min stake: KES 10, Max stake: KES 100,000 (configurable per event)
- Validate sufficient balance
- Confirm bet placement
- Bet confirmation with bet ID

#### AC-012: Live Betting
**Priority**: P1 (High)  
**Acceptance Criteria**:
- Real-time odds updates via WebSocket
- Live score display
- Match clock/time
- Odds change indicator (up/down arrows)
- Auto-suspend betting during key moments (goals, penalties)
- Same bet slip flow as pre-match

#### AC-013: Multi-Bet (Accumulator)
**Priority**: P0 (Critical)  
**Acceptance Criteria**:
- Add multiple selections to bet slip
- Calculate combined odds (multiply)
- Show potential win
- Min 2 selections, Max 20 selections
- All selections must win for payout

#### AC-014: Bet History
**Priority**: P1 (High)  
**Acceptance Criteria**:
- View all bets: Pending, Won, Lost, Void
- Filter by: date range, sport, status
- Show: bet ID, date, selections, stake, odds, potential win, status
- Tap to view bet details

#### AC-015: Cash Out
**Priority**: P2 (Medium - Future)  
**Acceptance Criteria**:
- Available for selected events (admin configurable)
- Show current cash out value
- Partial or full cash out
- Instant settlement

### 3.4 Virtual Sports

#### AC-016: Virtual Football
**Priority**: P1 (High)  
**Acceptance Criteria**:
- Matches every 3 minutes
- 12 teams in league
- Markets: 1X2, Over/Under, Both Teams to Score
- 2D/3D match visualization
- RNG-certified random results
- Instant settlement after match

#### AC-017: Virtual Horse Racing
**Priority**: P2 (Medium)  
**Acceptance Criteria**:
- Races every 5 minutes
- 8-12 horses per race
- Markets: Win, Place, Forecast, Tricast
- Animated race visualization

### 3.5 Casino Games

#### AC-018: Casino Lobby
**Priority**: P1 (High)  
**Acceptance Criteria**:
- Categories: Slots, Table Games, Jackpots
- Min 20 games at launch
- Game thumbnails with name, provider, RTP
- Search and filter
- Demo mode (optional)

#### AC-019: Game Integration
**Priority**: P1 (High)  
**Acceptance Criteria**:
- Integrate 3rd party provider (e.g., SoftSwiss, Pragmatic Play)
- Launch game in iframe/modal
- Real-time balance updates
- Return to lobby button

#### AC-020: Jackpot Games
**Priority**: P2 (Medium)  
**Acceptance Criteria**:
- Display current jackpot amount
- Real-time jackpot ticker
- Winner announcements

### 3.6 Promotions & Bonuses

#### AC-021: Welcome Bonus
**Priority**: P1 (High)  
**Acceptance Criteria**:
- 100% first deposit bonus up to KES 1,000
- Min deposit: KES 100
- Wagering requirement: 5x bonus amount
- Valid for 7 days
- Sports betting only (min odds 1.5)

#### AC-022: Free Bet Promotion
**Priority**: P2 (Medium)  
**Acceptance Criteria**:
- Admin creates free bet campaign
- Target: new users, specific user segments
- Free bet amount and expiry
- Wagering requirements
- Auto-apply to eligible users

### 3.7 Notifications

#### AC-023: SMS Notifications
**Priority**: P0 (Critical)  
**Acceptance Criteria**:
- Deposit confirmation
- Withdrawal confirmation
- Bet win notification
- Bonus credited
- KYC status update
- Use Africa's Talking SMS API

#### AC-024: Push Notifications
**Priority**: P1 (High)  
**Acceptance Criteria**:
- Bet settlement
- Live match starting
- Promotional offers
- Firebase Cloud Messaging

#### AC-025: Email Notifications
**Priority**: P2 (Medium)  
**Acceptance Criteria**:
- Weekly statement
- Promotional newsletters
- Account security alerts

## 4. NON-FUNCTIONAL REQUIREMENTS

### 4.1 Performance
- Page load time: < 3 seconds on 3G
- API response time: < 500ms (p95)
- Support 10,000 concurrent users (MVP)
- 99.5% uptime SLA

### 4.2 Security
- HTTPS only
- Password hashing (bcrypt)
- JWT authentication
- Rate limiting (100 req/min per IP)
- SQL injection protection
- XSS protection
- CSRF tokens
- Regular security audits

### 4.3 Scalability
- Horizontal scaling capability
- Database read replicas
- Redis caching layer
- CDN for static assets
- Queue-based bet processing

### 4.4 Mobile Optimization
- Responsive design (mobile-first)
- PWA installable
- Offline mode (view bet history)
- Touch-optimized UI
- Max 2MB initial page load

### 4.5 Localization
- Languages: English, Swahili
- Currency: KES (primary), TZS, UGX
- Date/time: EAT timezone
- Phone number formats: Kenyan, Tanzanian, Ugandan

### 4.6 Monitoring & Logging
- Application logs (errors, warnings)
- Transaction logs (all payments)
- Bet placement logs
- User activity logs
- Performance monitoring (APM)
- Alerting (Slack/email)

## 5. INTEGRATION REQUIREMENTS

### 5.1 Payment Gateways
- **M-Pesa Daraja API** (Safaricom - Kenya)
- **Pesapal API v3**
- **Africa's Talking** (SMS)

### 5.2 Odds Feed Providers
- **BetGenius** or **Sportradar** (real sports odds)
- Custom simulation engine (virtual sports)

### 5.3 Casino Game Providers
- **SoftSwiss** or **Pragmatic Play** or **Evolution Gaming**

### 5.4 KYC/AML
- Manual review (MVP)
- **Smile Identity** or **Onfido** (future automation)

## 6. COMPLIANCE CHECKLIST

- [ ] BCLB license application submitted
- [ ] Terms & Conditions (legal review)
- [ ] Privacy Policy (KDPA compliant)
- [ ] Responsible Gambling Policy
- [ ] AML/CFT procedures documented
- [ ] Tax calculation and reporting system
- [ ] Age verification mechanism
- [ ] Self-exclusion system
- [ ] Geo-blocking (Kenya only for MVP)
- [ ] Audit trail for all transactions

## 7. SUCCESS METRICS

### 7.1 User Acquisition
- 10,000 registered users in first 3 months
- 30% deposit conversion rate
- CAC < KES 500

### 7.2 Engagement
- 40% DAU/MAU ratio
- Avg 5 bets per user per week
- 60% retention after 30 days

### 7.3 Financial
- GGR: KES 5M in first 3 months
- Avg deposit: KES 500
- Avg withdrawal time: < 10 minutes

### 7.4 Technical
- 99.5% uptime
- < 1% payment failure rate
- < 0.1% bet processing errors

## 8. OUT OF SCOPE (MVP)

- Native iOS/Android apps (PWA only)
- Live casino (dealer games)
- Esports betting
- Cryptocurrency payments
- Affiliate program
- Multi-language beyond English/Swahili
- Advanced analytics dashboard
- AI-driven odds optimization
- Social features (chat, leaderboards)
