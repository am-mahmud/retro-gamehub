## 🎮 GameHub – Retro Gaming Platform

#### GameHub is a modern retro-styled gaming platform built with React, Vite, Tailwind CSS, and Firebase.
It features fast routing, secure authentication, smooth animations, game listings, and an immersive UI inspired by classic arcade themes.

### 🔗 Links

Live Demo:
GitHub Repo: https://github.com/am-mahmud/retro-gamehub

### 🚀 Features

#### 🔐 Firebase Authentication (Email/Password + Google Login)
#### 🎮 Game Browser with filtering and dynamic UI
#### ⚡ Fast Performance powered by Vite
#### 🎨 Retro UI using Tailwind + DaisyUI
#### 🌀 Smooth Animations via Framer Motion + GSAP
#### 🎛️ Global State Management using React Context
#### 🔔 Toast Notifications for user feedback



### 🛠️ Tech Stack

#### React 19 – Component-based UI
#### Vite – Ultra-fast dev/build tool
#### React Router v7 – Routing and route guards
#### Firebase v12 – Authentication + hosting
#### Tailwind CSS + DaisyUI – Styling system
#### Axios – HTTP client
#### Framer Motion  – Animations
#### React Toastify – Notifications

### 🔐 Authentication Workflow

- GameHub integrates Firebase Auth with:
- Create account
- Login with email/password
- Google login
- Reset password
- Update profile
- Realtime auth state listener (onAuthStateChanged)
- Auth context exposes:

##### { user, loading, createUser, logInUser, logInWithGoogle, signOutUser, forgetPassword, updateUserProfile }

- This allows any component to perform secure actions and read user data globally.

### 🧠 Data System (Games)

- Game data is fetched via a custom hook:

##### useFetchGames() → { allGames, loading, error }

- Fetches from games.json (or any API endpoint)
- Provides loading + error states
- Used across pages like Home, Games, and details screens


### ⚙️ Setup & Installation
- npm install
- npm run dev

#### Build for production:

- npm run build
- npm run preview

### 🌩 Firebase Setup

- Create a Firebase project
- Enable Email/Password + Google Auth
- Add Firebase config to firebase.config.js
- Add credentials to .env:

##### VITE_API_KEY=...
##### VITE_AUTH_DOMAIN=...
##### VITE_PROJECT_ID=...
##### VITE_APP_ID=...


👤 Author

Asif Mahmud