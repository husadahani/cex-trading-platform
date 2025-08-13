# CEX Trading Platform

A modern, responsive cryptocurrency trading platform built with Next.js, React, and TypeScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Built-in dark/light theme toggle
- **Modular Architecture**: Each page is a separate component for better maintainability
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, utility-first CSS framework
- **Lucide Icons**: Beautiful, customizable icons

## Pages

### Core Features
- **Dashboard**: Overview of portfolio, recent trades, and balance
- **Markets**: Real-time cryptocurrency market data
- **Trade**: Advanced trading interface with buy/sell functionality
- **Wallet**: Asset management and quick actions

### Finance Features
- **Spot Trading**: Spot market trading interface
- **Futures**: Futures trading with position management
- **Earn**: Staking and earning products
- **Cards**: Virtual card management
- **P2P Trading**: Peer-to-peer trading interface

### Management Features
- **Transaction History**: Complete transaction logs
- **Account**: Profile and account settings
- **Security**: Two-factor authentication and security settings
- **KYC Verification**: Identity verification process
- **Settings**: Platform preferences and configurations
- **Help Center**: Support and documentation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cex-trading-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard page
│   ├── markets/           # Markets page
│   ├── trade/             # Trading page
│   ├── wallet/            # Wallet page
│   ├── spot/              # Spot trading page
│   ├── futures/           # Futures trading page
│   ├── earn/              # Earn page
│   ├── cards/             # Cards page
│   ├── p2p/               # P2P trading page
│   ├── history/           # Transaction history page
│   ├── account/           # Account page
│   ├── security/          # Security page
│   ├── kyc/               # KYC verification page
│   ├── settings/          # Settings page
│   └── help/              # Help center page
├── components/            # Reusable components
│   ├── layout/            # Layout components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   ├── markets/           # Markets components
│   ├── trade/             # Trading components
│   ├── wallet/            # Wallet components
│   ├── spot/              # Spot trading components
│   ├── futures/           # Futures trading components
│   ├── earn/              # Earn components
│   ├── cards/             # Cards components
│   ├── p2p/               # P2P trading components
│   ├── history/           # History components
│   ├── account/           # Account components
│   ├── security/          # Security components
│   ├── kyc/               # KYC components
│   ├── settings/          # Settings components
│   └── help/              # Help components
├── lib/                   # Utility functions and data
├── types/                 # TypeScript type definitions
└── globals.css            # Global styles
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Headless UI**: Unstyled, accessible UI components

## Customization

### Colors
The platform uses a custom color scheme defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#5D5CDE',
  success: '#00c853',
  danger: '#ff3d00'
}
```

### Dark Mode
Dark mode is automatically detected based on system preferences and can be toggled programmatically.

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please refer to the Help Center within the application or contact the development team.
# cex-trading-platform
# cex-trading-platform
