# REMWaste-Skip


# Skip Hire Page Redesign

A modern, responsive redesign of a skip hire selection page built with React and TypeScript, featuring a clean UI/UX with mobile-first design principles.

## 🎯 Project Overview

This project is a complete redesign of a skip hire selection page that maintains all original functionality while delivering a fresh, modern user experience. The application fetches real skip data from the WeWantWaste API and presents it in an intuitive, responsive interface.

## ✨ Key Features

- **Complete Visual Redesign**: Modern gradient backgrounds, card-based layouts, and contemporary styling
- **Fully Responsive**: Optimized for both mobile and desktop experiences
- **Interactive Skip Selection**: Hover effects, selection states, and visual feedback
- **Floating Cart**: Persistent cart component that follows the user's selection
- **Error Handling**: Comprehensive error states with retry functionality
- **Loading States**: Smooth loading animations and skeleton screens

## 🚀 Technical Stack

- **React 18** with Hooks (useState, useEffect)
- **TypeScript** for type safety
- **Tailwind CSS** for styling and responsive design
- **Lucide React** for modern icons
- **Custom Components** for reusable UI elements

## 📱 Responsive Design


### Component Structure
```
src/
├── Components/
│   ├── ErrorMessage.tsx        # Error handling component
│   ├── FloatingCart.tsx        # Persistent cart component
│   ├── LoadingSpinner.tsx      # Loading state component
│   ├── ProgressStep.tsx        # Step indicator component
│   └── SkipCard.tsx            # Individual skip display card
|── Pages/
│   ├── SkipHirePage.tsx        # Main application component
├── utils/
│   ├── getSkips.ts             # API integration
│   └── skips_utils.ts          # Utility functions
└── App.tsx                     # Main application Entry
```

### Key Technical Decisions

1. **TypeScript Integration**: Full type safety with proper interfaces for Skip objects and component props
3. **Error Boundaries**: Comprehensive error handling with user-friendly messages
4. **Performance Optimization**: Efficient re-renders and proper dependency arrays
5. **Clean Code Principles**: Readable, maintainable code with proper naming conventions

## 🎨 Design Philosophy

### Visual Design
- **Card-Based Layout**: Clean, separated content areas with shadows and rounded corners
- **Consistent Spacing**: Systematic use of Tailwind's spacing scale
- **Typography Hierarchy**: Clear information hierarchy with varied font weights and sizes

### User Experience
- **Progressive Disclosure**: Information revealed as needed
- **Visual Feedback**: Clear selection states and hover effects
- **Intuitive Navigation**: Logical flow with clear next steps
- **Loading States**: Never leave users wondering what's happening

## 🔗 API Integration

The application fetches skip data from:
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

### Data Structure
```typescript
interface Skip {
  id: string | number;
  size: string;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/MedAmineBenSalah01/REMWaste-Skip

# Navigate to project directory
cd my-skip-hire-app/

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production
```bash
npm run build
```



## 🧪 Testing Approach

The application includes comprehensive error handling and has been tested across:
- Multiple device sizes and orientations
- Different network conditions (slow 3G, offline scenarios)
- Various browsers (Chrome, Firefox, Safari, Edge)
- Accessibility testing with screen readers

## 🔮 Future Enhancements

Potential improvements for future iterations:
- Unit and integration tests with Jest/React Testing Library
- Advanced animations with Framer Motion
- Progressive Web App (PWA) capabilities
- Advanced filtering and sorting options
- Integration with payment processing
- Real-time availability updates



**Live Demo**: [Sandbox Link]
**Repository**: https://github.com/MedAmineBenSalah01/REMWaste-Skip