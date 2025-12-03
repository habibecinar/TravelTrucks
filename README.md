# 🚐 TravelTrucks - Camper Rental Platform

**TravelTrucks** is a modern web application for browsing and renting campers/RVs. Built with React, Redux, and Vite, it provides a seamless user experience for finding the perfect camper for your next adventure.

## 🌟 Features

### Core Functionality
- **🏠 Homepage**: Eye-catching hero section with call-to-action
- **🗂️ Catalog Page**: Browse all available campers with advanced filtering
- **🔍 Advanced Filters**: Filter by location, vehicle type, and equipment
- **📄 Detailed Camper Views**: Complete camper information with image galleries
- **⭐ User Reviews**: 5-star rating system with detailed user feedback  
- **📝 Booking System**: Integrated reservation form with success notifications
- **❤️ Favorites**: Save and manage favorite campers (persistent across sessions)
- **📊 Pagination**: Load more functionality for better performance

### Technical Features
- **🔄 State Management**: Redux Toolkit for global state management
- **🛣️ Routing**: React Router for navigation with proper URL structure
- **📱 Responsive Design**: Mobile-optimized user interface
- **🎨 Modern UI**: Clean, professional design following best practices
- **⚡ Performance**: Optimized loading with pagination and caching
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Technologies Used

- **Frontend**: React 19.2.0
- **State Management**: Redux Toolkit 2.11.0
- **Routing**: React Router DOM 7.9.6
- **HTTP Client**: Axios 1.13.2
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS Modules + Custom CSS
- **Linting**: ESLint 9.39.1

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/TravelTrucks.git
   cd TravelTrucks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Usage Guide

### Navigation
- **Home Page** (`/`): Landing page with hero section
- **Catalog** (`/catalog`): Browse all available campers
- **Camper Details** (`/catalog/:id`): View detailed camper information

### Features Usage

#### Filtering Campers
1. Use the location input to search by city
2. Select vehicle equipment (AC, Kitchen, etc.)
3. Choose vehicle type (Van, Fully Integrated, Alcove)
4. Click "Search" to apply filters

#### Managing Favorites
- Click the heart icon on any camper card
- Favorites persist across browser sessions
- View status in real-time

#### Making Reservations
1. Navigate to a camper's detail page
2. Fill out the booking form
3. Submit to receive confirmation notification

## 📁 Project Structure

```
src/
├── api/                    # API configuration
├── app/                    # Redux store and slices
├── assets/                 # Static assets (icons, images)
├── components/             # Reusable UI components
│   ├── BookingForm/       # Reservation form
│   ├── CamperCard/        # Camper preview cards
│   ├── CamperTabs/        # Features and Reviews tabs
│   ├── Catalog/           # Main catalog component
│   ├── FilterBar/         # Search and filter controls
│   ├── Gallery/           # Image gallery component
│   └── Header/            # Navigation header
├── features/              # Feature-based modules
│   └── campers/           # Camper-related features
│       ├── favorites/     # Favorites management
│       └── filters/       # Filter state management
├── layout/                # Layout components
├── pages/                 # Page components
├── router/                # Routing configuration
└── styles/                # Global styles and variables
```

## 🌐 API Integration

The application integrates with a MockAPI backend:
- **Base URL**: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`
- **Endpoints**:
  - `GET /campers` - Retrieve campers (with filtering)
  - `GET /campers/:id` - Get specific camper details

### API Features
- Server-side filtering by location, type, and equipment
- Pagination support
- Detailed camper information including galleries and reviews

## 🎨 Design System

The application follows a consistent design system:
- **Colors**: Primary red (#E44848), neutral grays
- **Typography**: Inter font family with consistent sizing
- **Spacing**: 8px grid system
- **Components**: Reusable UI components with CSS modules
- **Responsive**: Mobile-first responsive design

## 🔧 State Management

### Redux Store Structure
```javascript
{
  campers: {
    items: [],           // List of campers
    selectedCamper: {},  // Currently viewed camper
    loading: boolean,    // Loading state
    hasMore: boolean,    // Pagination flag
  },
  favorites: {
    items: []           // Array of favorite camper IDs
  },
  filters: {
    location: "",       // Location filter
    equipment: [],      // Selected equipment
    type: ""           // Vehicle type
  }
}
```

## 🚀 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- Any static hosting service

### Deploy to GitHub Pages

#### Option 1: Automatic Deployment (Recommended)
1. Push your code to GitHub
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Visit `https://yourusername.github.io/TravelTrucks/`

#### Option 2: Manual Deployment
```bash
npm run deploy
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Build for Production
```bash
npm run build
```

## 🧪 Quality Assurance

### Code Quality
- ESLint configuration for consistent code style
- Component-based architecture
- Proper error handling and loading states
- Semantic HTML markup

### Performance Optimizations
- Lazy loading for images
- Pagination for large datasets
- Efficient state management
- Optimized bundle size

## 👨‍💻 Author

**Habibe Adıgüzel**  
Frontend Developer

## 📝 License

This project is created for educational purposes as part of a technical assessment.

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Happy Camping! 🏕️**
