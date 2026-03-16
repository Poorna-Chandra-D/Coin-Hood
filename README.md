<div align="center">

# 🚀 Coin Hood

### Your Gateway to Intelligent Cryptocurrency Trading

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.4-6DB33F?logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<p align="center">
  <i>A secure, modern, and AI-powered cryptocurrency trading platform built with cutting-edge technologies</i>
</p>

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Screenshots](#-screenshots) • [Contributing](#-contributing)

</div>

---

## 📖 About

**Coin Hood** is a full-stack cryptocurrency trading platform designed to provide traders with real-time market data, secure wallet management, and intelligent trading insights. Whether you're a beginner or an experienced trader, Coin Hood offers an intuitive interface with powerful features to manage your crypto portfolio effectively.

## ✨ Features

### 🔐 **Security First**
- **Two-Factor Authentication (2FA)** for enhanced account security
- **Spring Security** integration with JWT token authentication
- **Google OAuth** support for seamless login
- Secure password reset and recovery

### 💼 **Portfolio Management**
- Real-time portfolio tracking and valuation
- Detailed transaction history and activity logs
- Watchlist functionality to monitor favorite cryptocurrencies
- Asset allocation visualization

### 💰 **Wallet & Transactions**
- Integrated wallet system with deposit and withdrawal capabilities
- Payment gateway integration
- Admin panel for withdrawal management
- Real-time balance updates

### 📊 **Market Intelligence**
- Live cryptocurrency data powered by **CoinGecko API**
- Advanced search and filtering capabilities
- Detailed coin information and market statistics
- Real-time price tracking and charts

### 🎨 **Modern UI/UX**
- Dark mode optimized interface
- Responsive design for all devices


### 👥 **Role-Based Access**
- User and Admin role separation
- Admin dashboard for platform management
- Secure route protection

## 🛠 Tech Stack

### Frontend
- **React.js** - UI library for building interactive interfaces
- **Vite** - Next-generation frontend tooling
- **Redux** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Re-usable component library
- **Axios** - HTTP client for API requests

### Backend
- **Spring Boot 3.2.4** - Java framework for enterprise applications
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database abstraction layer
- **MySQL** - Relational database
- **Maven** - Dependency management

### APIs & Services
- **CoinGecko API** - Real-time cryptocurrency data
- **Payment Gateway Integration** - Secure transactions

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18+)
- **Java JDK** (v17+)
- **MySQL** (v8+)
- **Maven** (v3.8+)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Poorna-Chandra-D/Coin-Hood.git
   cd Coin-Hood/cryptotradingplatform
   ```

2. **Configure Database**
   
   Update `application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/coinhood
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

3. **Install Dependencies & Run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:5454`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../Frontend-React
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure API Endpoint**
   
   Update `src/Api/api.js` if needed:
   ```javascript
   export const API_BASE_URL = 'http://localhost:5454'
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

## 📁 Project Structure

```
Coin-Hood/
├── Frontend-React/          # React frontend application
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── Redux/          # State management
│   │   ├── Api/            # API configuration
│   │   └── components/     # Reusable components
│   └── public/             # Static assets
│
└── cryptotradingplatform/   # Spring Boot backend
    ├── src/main/java/      # Java source files
    ├── src/main/resources/ # Application properties
    └── pom.xml             # Maven configuration
```

## 🎯 Key Pages

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home & Market Dashboard | User |
| `/portfolio` | Portfolio Management | User |
| `/wallet` | Wallet & Transactions | User |
| `/market/:id` | Coin Details & Trading | User |
| `/watchlist` | Saved Cryptocurrencies | User |
| `/activity` | Transaction History | User |
| `/profile` | User Profile Settings | User |
| `/admin/withdrawal` | Withdrawal Management | Admin |

## 🔒 Authentication Flow

1. **Register** - Create account with email/password or Google OAuth
2. **Email Verification** - Verify email address
3. **2FA Setup** - Optional two-factor authentication
4. **Login** - Secure JWT-based authentication
5. **Password Reset** - Secure password recovery via email

## 🌟 Highlights

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Beautiful UI** - Modern dark theme with smooth animations
- 🔐 **Enterprise Security** - Spring Security with JWT & 2FA
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🚀 **Production Ready** - Optimized builds and deployment configs

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Poorna Chandra D**

- GitHub: [@Poorna-Chandra-D](https://github.com/Poorna-Chandra-D)

## 🙏 Acknowledgments

- [CoinGecko API](https://www.coingecko.com/en/api) for cryptocurrency data
- [Shadcn/UI](https://ui.shadcn.com/) for beautiful components
- [Spring Boot](https://spring.io/projects/spring-boot) for robust backend framework

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by [Poorna Chandra D](https://github.com/Poorna-Chandra-D)

</div>
