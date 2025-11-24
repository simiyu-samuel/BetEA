# Architecture Design: East African Betting Platform

## 1. SYSTEM ARCHITECTURE OVERVIEW

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│  Mobile Web (PWA)  │  Admin Portal  │  Future: Native Apps      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY / LOAD BALANCER                 │
│                    (NGINX / AWS ALB / Cloudflare)                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND SERVICES LAYER                      │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│  Auth Service│ User Service │ Betting      │ Payment Service   │
│              │              │ Engine       │                   │
├──────────────┼──────────────┼──────────────┼───────────────────┤
│ Odds Service │ Casino       │ Notification │ Admin Service     │
│              │ Service      │ Service      │                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│ PostgreSQL   │ Redis Cache  │ MongoDB      │ S3 / Object       │
│ (Primary DB) │ & Sessions   │ (Logs/Docs)  │ Storage (KYC)     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   EXTERNAL INTEGRATIONS                          │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│ M-Pesa API   │ Pesapal API  │ Odds Feed    │ Casino Provider   │
│ (Daraja)     │              │ (Sportradar) │ (SoftSwiss)       │
├──────────────┼──────────────┼──────────────┼───────────────────┤
│ SMS Gateway  │ Email        │ KYC Provider │ Analytics         │
│ (Africa's    │ (SendGrid)   │ (Future)     │ (Mixpanel)        │
│  Talking)    │              │              │                   │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Architecture Principles

**P-001: Microservices Architecture**
- Independent services with clear boundaries
- Each service owns its data
- Communication via REST APIs and message queues
- Independent deployment and scaling

**P-002: Event-Driven Design**
- Asynchronous processing for non-critical operations
- Message queue (RabbitMQ/Redis Pub-Sub) for events
- Event types: BetPlaced, BetSettled, DepositCompleted, WithdrawalRequested

**P-003: API-First Design**
- RESTful APIs with OpenAPI/Swagger documentation
- Versioned APIs (/api/v1/)
- Consistent error handling and response formats
- Rate limiting and authentication on all endpoints

**P-004: Mobile-First Performance**
- Optimized for 3G networks
- Lazy loading and code splitting
- Image optimization and CDN
- Service Worker for offline capability

**P-005: Security by Design**
- Zero-trust architecture
- Encryption at rest and in transit
- Principle of least privilege
- Regular security audits

## 2. TECHNOLOGY STACK

### 2.1 Frontend Stack

**User-Facing Web App (PWA)**
- **Framework**: Next.js 14 (React 18 + TypeScript)
- **State Management**: Zustand (lightweight, simple)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Real-time**: Socket.io client
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios with interceptors
- **PWA**: next-pwa plugin
- **Analytics**: Mixpanel / Google Analytics 4

**Admin Portal**
- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: Ant Design / Mantine
- **Charts**: Recharts / Apache ECharts
- **Tables**: TanStack Table (React Table v8)
- **State**: Zustand + React Query

### 2.2 Backend Stack

**Core Services**
- **Runtime**: Node.js 20 LTS
- **Framework**: NestJS (TypeScript)
- **API Documentation**: Swagger/OpenAPI
- **Validation**: class-validator + class-transformer
- **Authentication**: JWT (access + refresh tokens)
- **Authorization**: CASL (role-based access control)

**Betting Engine** (High-Performance Service)
- **Language**: Node.js (NestJS) or Go (if performance critical)
- **Pattern**: CQRS (Command Query Responsibility Segregation)
- **Concurrency**: Bull Queue for bet processing
- **Idempotency**: Redis-based deduplication

### 2.3 Database & Caching

**Primary Database**
- **PostgreSQL 15**
  - ACID compliance for financial transactions
  - JSONB for flexible data (bet selections, metadata)
  - Partitioning for bet history (by month)
  - Read replicas for reporting

**Caching Layer**
- **Redis 7**
  - Session storage
  - Odds caching (TTL: 5-30 seconds)
  - Rate limiting
  - Pub/Sub for real-time events
  - Leaderboards (sorted sets)

**Document Storage**
- **MongoDB** (optional)
  - Application logs
  - Audit trails
  - Analytics events

**Object Storage**
- **AWS S3 / DigitalOcean Spaces**
  - KYC documents
  - Game assets
  - Static files

### 2.4 Message Queue & Background Jobs

- **Bull** (Redis-based queue)
  - Bet settlement processing
  - Email/SMS sending
  - Withdrawal processing
  - Bonus calculations
  - Report generation

### 2.5 Real-Time Communication

- **Socket.io**
  - Live odds updates
  - Live scores
  - Bet confirmations
  - Notifications
  - Admin dashboard real-time stats

### 2.6 Infrastructure & DevOps

**Hosting**
- **Cloud Provider**: AWS / DigitalOcean / Hetzner
- **Compute**: EC2 / Droplets (Kubernetes for scale)
- **CDN**: Cloudflare (DDoS protection + caching)
- **DNS**: Cloudflare DNS

**Containerization**
- **Docker** for all services
- **Docker Compose** for local development
- **Kubernetes** (future scaling)

**CI/CD**
- **GitHub Actions** or **GitLab CI**
- Automated testing (unit, integration, e2e)
- Automated deployment (staging → production)
- Database migrations (TypeORM/Prisma)

**Monitoring & Logging**
- **Application Monitoring**: Sentry (errors), New Relic / Datadog (APM)
- **Logging**: Winston → Elasticsearch → Kibana (ELK)
- **Metrics**: Prometheus + Grafana
- **Uptime**: UptimeRobot / Pingdom
- **Alerts**: Slack / PagerDuty

## 3. SERVICE ARCHITECTURE

### 3.1 Auth Service

**Responsibilities**:
- User registration and login
- JWT token generation and validation
- Password reset
- 2FA (future)
- Session management

**API Endpoints**:
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh-token
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
POST   /api/v1/auth/verify-phone
POST   /api/v1/auth/verify-email
```

**Database Tables**:
- `users` (id, phone, email, password_hash, status, created_at)
- `sessions` (Redis: user_id → session_data)
- `verification_codes` (phone/email → code, expires_at)

**Properties**:
- **PROP-001**: User registration requires valid Kenyan phone number (254XXXXXXXXX)
- **PROP-002**: Password must be hashed using bcrypt (cost factor 12)
- **PROP-003**: JWT access token expires in 15 minutes, refresh token in 7 days
- **PROP-004**: Phone verification code expires in 5 minutes
- **PROP-005**: Max 3 login attempts before 15-minute lockout

### 3.2 User Service

**Responsibilities**:
- User profile management
- KYC document upload and verification
- Wallet balance management
- Responsible gambling settings
- Transaction history

**API Endpoints**:
```
GET    /api/v1/users/profile
PUT    /api/v1/users/profile
POST   /api/v1/users/kyc/upload
GET    /api/v1/users/kyc/status
GET    /api/v1/users/wallet/balance
GET    /api/v1/users/transactions
PUT    /api/v1/users/limits (deposit/loss limits)
POST   /api/v1/users/self-exclude
```

**Database Tables**:
- `user_profiles` (user_id, full_name, dob, national_id, address)
- `kyc_documents` (user_id, document_type, file_url, status, reviewed_by)
- `wallets` (user_id, balance, currency, locked_balance)
- `transactions` (id, user_id, type, amount, status, reference, created_at)
- `responsible_gambling_settings` (user_id, daily_limit, weekly_limit, self_exclusion_until)

**Properties**:
- **PROP-006**: User must be 18+ (verified from DOB)
- **PROP-007**: KYC required before first withdrawal
- **PROP-008**: Wallet balance cannot go negative
- **PROP-009**: Deposit limit enforced before payment processing
- **PROP-010**: Self-exclusion prevents login until expiry

### 3.3 Payment Service

**Responsibilities**:
- M-Pesa STK Push integration
- M-Pesa C2B (manual) integration
- Pesapal integration
- Withdrawal processing (M-Pesa B2C)
- Transaction reconciliation
- Tax calculation (20% withholding)

**API Endpoints**:
```
POST   /api/v1/payments/deposit/mpesa-stk
POST   /api/v1/payments/deposit/pesapal
POST   /api/v1/payments/withdraw
GET    /api/v1/payments/transactions
POST   /api/v1/payments/callbacks/mpesa (webhook)
POST   /api/v1/payments/callbacks/pesapal (webhook)
```

**Database Tables**:
- `deposits` (id, user_id, amount, method, status, reference, created_at)
- `withdrawals` (id, user_id, amount, tax_amount, net_amount, status, mpesa_receipt, created_at)
- `payment_callbacks` (id, provider, payload, processed, created_at)

**Properties**:
- **PROP-011**: M-Pesa STK Push timeout is 60 seconds
- **PROP-012**: Deposit credited only after successful callback
- **PROP-013**: Withdrawal deducts 20% tax automatically
- **PROP-014**: Min deposit KES 50, max KES 150,000
- **PROP-015**: Min withdrawal KES 100, max KES 150,000/day
- **PROP-016**: First withdrawal requires manual approval
- **PROP-017**: Failed callbacks logged for manual reconciliation

### 3.4 Betting Engine Service

**Responsibilities**:
- Bet placement and validation
- Bet settlement
- Odds calculation
- Multi-bet (accumulator) logic
- Cash out calculation (future)
- Bet history

**API Endpoints**:
```
POST   /api/v1/bets/place
GET    /api/v1/bets/history
GET    /api/v1/bets/:id
POST   /api/v1/bets/:id/cashout (future)
GET    /api/v1/bets/active
```

**Database Tables**:
- `bets` (id, user_id, type, stake, total_odds, potential_win, status, settled_at)
- `bet_selections` (bet_id, event_id, market_id, selection, odds, result)
- `bet_settlements` (bet_id, win_amount, settled_by, settled_at)

**Properties**:
- **PROP-018**: Bet placement is idempotent (duplicate prevention via request_id)
- **PROP-019**: Bet stake deducted from wallet atomically
- **PROP-020**: Multi-bet odds = product of all selection odds
- **PROP-021**: All selections must win for multi-bet payout
- **PROP-022**: Bet cannot be placed if event started (pre-match) or odds changed
- **PROP-023**: Settlement credits wallet + creates transaction record
- **PROP-024**: Void bet refunds stake to wallet

### 3.5 Odds Service

**Responsibilities**:
- Fetch odds from external provider (Sportradar/BetGenius)
- Cache odds in Redis
- Real-time odds updates via WebSocket
- Event and market management
- Virtual sports simulation

**API Endpoints**:
```
GET    /api/v1/odds/sports
GET    /api/v1/odds/events?sport=football&date=today
GET    /api/v1/odds/events/:id/markets
WS     /api/v1/odds/live (WebSocket)
GET    /api/v1/odds/virtual/football
```

**Database Tables**:
- `sports` (id, name, slug, active)
- `events` (id, sport_id, home_team, away_team, start_time, status, score)
- `markets` (id, event_id, type, name, status)
- `odds` (market_id, selection, odds, updated_at) - cached in Redis
- `virtual_matches` (id, league, teams, result, rng_seed, created_at)

**Properties**:
- **PROP-025**: Odds cached in Redis with 10-second TTL (pre-match), 2-second TTL (live)
- **PROP-026**: Odds updates broadcast via WebSocket to connected clients
- **PROP-027**: Events auto-suspend 5 seconds before start time
- **PROP-028**: Virtual football matches generated every 3 minutes
- **PROP-029**: Virtual match results use cryptographically secure RNG
- **PROP-030**: Odds margin (overround) configurable per sport (default 5%)

### 3.6 Casino Service

**Responsibilities**:
- Game catalog management
- Game session initialization
- Balance updates from game provider
- Jackpot tracking
- RTP monitoring

**API Endpoints**:
```
GET    /api/v1/casino/games
GET    /api/v1/casino/games/:id/launch
POST   /api/v1/casino/callbacks/balance (webhook from provider)
GET    /api/v1/casino/jackpots
```

**Database Tables**:
- `casino_games` (id, provider, name, type, rtp, thumbnail_url, active)
- `game_sessions` (id, user_id, game_id, session_token, balance_start, balance_end)
- `game_transactions` (session_id, type, amount, balance_after, created_at)

**Properties**:
- **PROP-031**: Game launch creates session token valid for 24 hours
- **PROP-032**: Balance updates from provider are idempotent
- **PROP-033**: Game session ends on user logout or 24-hour expiry
- **PROP-034**: RTP displayed for all games (regulatory requirement)

### 3.7 Notification Service

**Responsibilities**:
- SMS sending (Africa's Talking)
- Email sending (SendGrid)
- Push notifications (Firebase)
- Notification templates
- Delivery tracking

**API Endpoints**:
```
POST   /api/v1/notifications/send
GET    /api/v1/notifications/history
```

**Database Tables**:
- `notifications` (id, user_id, type, channel, template, status, sent_at)
- `notification_templates` (id, name, channel, content, variables)

**Properties**:
- **PROP-035**: SMS sent via Africa's Talking API
- **PROP-036**: Critical notifications (deposit, withdrawal) sent immediately
- **PROP-037**: Promotional notifications batched (max 1/day per user)
- **PROP-038**: Failed SMS retried 3 times with exponential backoff

### 3.8 Admin Service

**Responsibilities**:
- User management (view, suspend, verify KYC)
- Bet review and settlement override
- Withdrawal approval
- Event and odds management
- Financial reports
- System configuration

**API Endpoints**:
```
GET    /api/v1/admin/users
GET    /api/v1/admin/users/:id
PUT    /api/v1/admin/users/:id/status
POST   /api/v1/admin/kyc/:id/approve
GET    /api/v1/admin/bets
POST   /api/v1/admin/bets/:id/settle
GET    /api/v1/admin/withdrawals/pending
POST   /api/v1/admin/withdrawals/:id/approve
GET    /api/v1/admin/reports/financial
POST   /api/v1/admin/events/:id/suspend
```

**Database Tables**:
- `admin_users` (id, username, role, permissions, created_at)
- `audit_logs` (id, admin_id, action, entity_type, entity_id, changes, created_at)

**Properties**:
- **PROP-039**: All admin actions logged in audit trail
- **PROP-040**: Role-based access control (super_admin, risk_manager, support, finance)
- **PROP-041**: Withdrawal approval requires finance role
- **PROP-042**: KYC approval requires support or super_admin role

## 4. DATA MODELS

### 4.1 Core Entities

**User**
```typescript
{
  id: UUID
  phone: string (unique, indexed)
  email: string (unique, indexed)
  password_hash: string
  status: enum (active, suspended, self_excluded)
  kyc_status: enum (pending, approved, rejected)
  created_at: timestamp
  updated_at: timestamp
}
```

**Wallet**
```typescript
{
  user_id: UUID (FK)
  balance: decimal(10,2)
  currency: string (KES)
  locked_balance: decimal(10,2) // for pending bets
  updated_at: timestamp
}
```

**Bet**
```typescript
{
  id: UUID
  user_id: UUID (FK)
  type: enum (single, multi)
  stake: decimal(10,2)
  total_odds: decimal(10,2)
  potential_win: decimal(10,2)
  status: enum (pending, won, lost, void, cashed_out)
  placed_at: timestamp
  settled_at: timestamp
}
```

**Event**
```typescript
{
  id: UUID
  sport_id: UUID (FK)
  home_team: string
  away_team: string
  start_time: timestamp
  status: enum (scheduled, live, finished, cancelled)
  score: jsonb // {home: 2, away: 1}
  external_id: string (from odds provider)
}
```

**Transaction**
```typescript
{
  id: UUID
  user_id: UUID (FK)
  type: enum (deposit, withdrawal, bet_stake, bet_win, bonus)
  amount: decimal(10,2)
  balance_before: decimal(10,2)
  balance_after: decimal(10,2)
  status: enum (pending, completed, failed)
  reference: string (M-Pesa code, bet ID, etc.)
  metadata: jsonb
  created_at: timestamp
}
```

### 4.2 Database Indexes

```sql
-- Users
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);

-- Bets
CREATE INDEX idx_bets_user_id ON bets(user_id);
CREATE INDEX idx_bets_status ON bets(status);
CREATE INDEX idx_bets_placed_at ON bets(placed_at DESC);

-- Transactions
CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_type ON transactions(type);
CREATE INDEX idx_transactions_created_at ON transactions(created_at DESC);

-- Events
CREATE INDEX idx_events_sport_id ON events(sport_id);
CREATE INDEX idx_events_start_time ON events(start_time);
CREATE INDEX idx_events_status ON events(status);
```

## 5. SECURITY ARCHITECTURE

### 5.1 Authentication Flow

```
1. User submits phone + password
2. Auth Service validates credentials
3. Generate JWT access token (15 min expiry) + refresh token (7 days)
4. Store refresh token in Redis with user_id
5. Return both tokens to client
6. Client stores tokens (localStorage/secure cookie)
7. Client includes access token in Authorization header
8. API Gateway validates token on each request
9. On access token expiry, client uses refresh token to get new access token
```

### 5.2 Payment Security

- **Idempotency**: All payment requests include unique `request_id`
- **Webhook Verification**: Validate M-Pesa/Pesapal signatures
- **Double-Entry Accounting**: Every transaction has debit + credit
- **Atomic Operations**: Use database transactions for wallet updates
- **Reconciliation**: Daily automated reconciliation with payment providers

### 5.3 Bet Integrity

- **Odds Lock**: Odds locked at bet placement time
- **Event Status Check**: Prevent bets on started/finished events
- **Balance Validation**: Atomic check-and-deduct wallet balance
- **Duplicate Prevention**: Request ID + 5-minute deduplication window
- **Settlement Verification**: Cross-check with odds provider results

## 6. SCALABILITY STRATEGY

### 6.1 Horizontal Scaling

- **Stateless Services**: All services are stateless (session in Redis)
- **Load Balancer**: NGINX/ALB distributes traffic across instances
- **Database Read Replicas**: Read-heavy queries (bet history, events) use replicas
- **Redis Cluster**: Sharded Redis for high-throughput caching

### 6.2 Caching Strategy

```
Layer 1: Browser Cache (static assets, 1 hour)
Layer 2: CDN Cache (Cloudflare, 5 minutes)
Layer 3: Redis Cache (odds, user sessions, 10-60 seconds)
Layer 4: Database Query Cache (PostgreSQL, 1 minute)
```

### 6.3 Performance Optimization

- **Database Connection Pooling**: Max 20 connections per service
- **Query Optimization**: Indexed queries, avoid N+1 problems
- **Lazy Loading**: Frontend loads data on-demand
- **Image Optimization**: WebP format, responsive images
- **Code Splitting**: Separate bundles for sports/casino/admin

## 7. DISASTER RECOVERY

### 7.1 Backup Strategy

- **Database**: Automated daily backups (retained 30 days)
- **Point-in-Time Recovery**: WAL archiving (PostgreSQL)
- **KYC Documents**: S3 versioning enabled
- **Configuration**: Infrastructure as Code (Terraform/Pulumi)

### 7.2 High Availability

- **Multi-AZ Deployment**: Services across 2+ availability zones
- **Database Failover**: Automatic failover to standby (< 60 seconds)
- **Health Checks**: Load balancer removes unhealthy instances
- **Circuit Breaker**: Prevent cascade failures (external API timeouts)

## 8. MONITORING & OBSERVABILITY

### 8.1 Key Metrics

**Application Metrics**:
- Request rate (req/sec)
- Response time (p50, p95, p99)
- Error rate (%)
- Active users (concurrent)

**Business Metrics**:
- Bets placed per minute
- Deposit success rate
- Withdrawal processing time
- GGR (Gross Gaming Revenue)

**Infrastructure Metrics**:
- CPU/Memory usage
- Database connections
- Redis hit rate
- Queue depth

### 8.2 Alerting Rules

```
CRITICAL:
- API error rate > 5% for 5 minutes
- Database connection pool exhausted
- Payment gateway down
- Withdrawal processing stopped

WARNING:
- API response time p95 > 1 second
- Redis memory > 80%
- Disk space > 85%
- Failed SMS > 10% in 1 hour
```

## 9. DEPLOYMENT ARCHITECTURE

### 9.1 Environments

**Development**:
- Local Docker Compose
- Mock external APIs
- Seeded test data

**Staging**:
- Production-like infrastructure
- Sandbox payment APIs (M-Pesa, Pesapal)
- Automated E2E tests

**Production**:
- Multi-AZ deployment
- Live payment APIs
- Blue-green deployment strategy

### 9.2 CI/CD Pipeline

```
1. Developer pushes code to GitHub
2. GitHub Actions triggers:
   - Lint (ESLint, Prettier)
   - Unit tests (Jest)
   - Build Docker images
3. Deploy to Staging
4. Run E2E tests (Playwright)
5. Manual approval gate
6. Deploy to Production (blue-green)
7. Health check
8. Switch traffic to new version
9. Monitor for 15 minutes
10. Rollback if errors detected
```

## 10. COST ESTIMATION (MVP - 3 Months)

| Item | Monthly Cost (USD) |
|------|-------------------|
| Cloud Hosting (DigitalOcean/AWS) | $200-500 |
| Database (Managed PostgreSQL) | $100-200 |
| Redis (Managed) | $50-100 |
| CDN (Cloudflare Pro) | $20 |
| Odds Feed (Sportradar) | $500-1000 |
| Casino Provider (SoftSwiss) | Revenue share (10-15%) |
| M-Pesa API | Transaction fees (1-2%) |
| SMS (Africa's Talking) | $0.01/SMS (~$100) |
| Email (SendGrid) | $15 |
| Monitoring (Sentry, New Relic) | $50-100 |
| **Total** | **$1,035-2,035/month** |

*Note: Excludes BCLB license fee (~$50,000 one-time)*
