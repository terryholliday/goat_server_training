# The French Goat Training Portal

An immersive training application for The French Goat restaurant staff. Built with React, TypeScript, Vite, and Firebase.

## Features

- **11 Training Sections**: General info, sequence of service, culinary terms, menu knowledge, wine knowledge, and quizzes
- **User Authentication**: Email/password login with Firebase Auth
- **Progress Tracking**: Firestore-backed progress that persists across sessions
- **Manager Dashboard**: View staff training status, quiz scores, and exam results
- **80% Pass Threshold**: Quizzes require 80% to mark as complete
- **Final Exam**: Comprehensive exam covering all training topics
- **Mobile Responsive**: Works on all device sizes

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- A Firebase project (see Firebase Setup below)

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local with your Firebase config

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app.

## Firebase Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the wizard
3. Enable Google Analytics (optional)

### 2. Enable Authentication

1. In Firebase Console, go to **Build > Authentication**
2. Click "Get started"
3. Go to **Sign-in method** tab
4. Enable **Email/Password** provider

### 3. Create Firestore Database

1. Go to **Build > Firestore Database**
2. Click "Create database"
3. Start in **production mode** (we'll deploy security rules)
4. Choose a location closest to your users

### 4. Get Configuration

1. Go to **Project Settings** (gear icon)
2. Under "Your apps", click the web icon (`</>`)
3. Register your app with a nickname
4. Copy the `firebaseConfig` object

### 5. Configure Environment

Create `.env.local` in the project root:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Deployment

### Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### Deploy to Firebase Hosting

```bash
# Build production bundle
npm run build

# Initialize Firebase (first time only)
firebase init
# Select: Hosting, Firestore
# Use existing project: your-project-id
# Public directory: dist
# Single-page app: Yes
# Overwrite: No

# Deploy
firebase deploy
```

### Deploy Security Rules Only

```bash
firebase deploy --only firestore:rules
```

## Creating a Manager Account

After deploying, to create a manager account:

1. Sign up through the app normally
2. Go to Firebase Console > Firestore Database
3. Find your user document in the `users` collection
4. Change `role` from `"staff"` to `"manager"`
5. Refresh the app - you'll see the Manager Dashboard button

## Project Structure

```
├── App.tsx              # Main app with routing
├── firebase.ts          # Firebase initialization
├── types.ts             # TypeScript interfaces
├── constants.ts         # Training content data
├── contexts/
│   └── AuthContext.tsx  # Authentication state
├── services/
│   └── trainingProgress.ts  # Firestore CRUD
├── components/
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   ├── CourseDashboard.tsx
│   ├── Quiz.tsx
│   ├── FinalExamSection.tsx
│   ├── ManagerDashboard.tsx
│   └── [section components]
├── firebase.json        # Hosting config
├── firestore.rules      # Security rules
└── firestore.indexes.json
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## License

© 2024 The French Goat. All Rights Reserved.
