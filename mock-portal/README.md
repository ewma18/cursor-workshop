# Mock Portal - Nuvemshop Partners

A mock portal built with Next.js and Nimbus Design System, replicating the Nuvemshop Partners dashboard.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd mock-portal
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** Nimbus Design System
  - `@nimbus-ds/components` - Core components
  - `@nimbus-ds/patterns` - Layout patterns (Menu, AppShell)
  - `@nimbus-ds/icons` - Icon library
  - `@nimbus-ds/styles` - CSS variables and styles
- **Language:** TypeScript

## Project Structure

```
mock-portal/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles with Nimbus imports
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main dashboard page
│   └── components/
│       ├── Sidebar.tsx      # Navigation sidebar
│       ├── Header.tsx       # Top header with user info
│       ├── StatCard.tsx     # Statistics card component
│       ├── InfoCard.tsx     # Information card component
│       ├── CommissionCard.tsx # Commission highlight card
│       ├── CouponCard.tsx   # Coupon code card with copy
│       └── BadgeCard.tsx    # Badge/achievement card
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Features

- Responsive sidebar navigation using Nimbus Menu pattern
- Dashboard with statistics cards (Aplicativos, Lojas, Comissões)
- Info cards with actions (Link de afiliado, Parceria, Loja demo)
- Coupon code section with copy-to-clipboard functionality
- Specialist badges section
