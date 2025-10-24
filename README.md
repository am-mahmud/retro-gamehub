# 🎮 GameHub – React Gaming Platform

> A modern gaming web app built with React, Vite, Tailwind CSS, and Firebase.  
> GameHub lets users explore games, authenticate securely, and enjoy a visually interactive experience powered by animations and notifications.

---

## 📁 Project Overview

**GameHub** is a dynamic, component-driven React application that displays a list of games, supports authentication via Firebase (email/password + Google login), and provides interactive UI features such as animations and toast notifications.

---

## ⚙️ Tech Stack

| Category | Technology | Purpose |
|-----------|-------------|----------|
| **Frontend Framework** | [React 19](https://react.dev/) | Component-based UI framework |
| **Build Tool** | [Vite](https://vitejs.dev/) | Fast build tool and dev server |
| **Routing** | [React Router v7](https://reactrouter.com/) | Page navigation and route protection |
| **Backend & Auth** | [Firebase v12](https://firebase.google.com/) | Authentication and hosting |
| **HTTP Client** | [Axios](https://axios-http.com/) | API/data fetching (from `games.json` or remote endpoints) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) | Modern responsive styling and UI components |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Scalable icon library |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/) | Motion effects and UI animations |
| **Marquee Effect** | [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) | Smooth scrolling banners |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast messages and alerts |
| **Linting** | [ESLint](https://eslint.org/) | Code quality and syntax checking |

---

## 🧩 Folder Structure

```
📦 game-hub
│
├── public/
│   ├── gamehub.ico
│   ├── games.json             # Static data for games (mock API)
│
├── src/
│   ├── assets/                # Images, icons, and static files
│   ├── components/            # Reusable UI components
│   │   ├── Banner/
│   │   ├── GameCard/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Loader/ ...
│   │
│   ├── contexts/              # Context API for global state
│   │   ├── AuthContext/       # Context creation
│   │   └── AuthProvider/      # Firebase auth logic
│   │
│   ├── firebase/              # Firebase configuration files
│   ├── hooks/                 # Custom React hooks
│   │   └── useFetchGames.js
│   ├── layouts/               # Shared layout components
│   │   └── MainLayout.jsx
│   ├── pages/                 # Application pages (Home, Games, About, etc.)
│   ├── routes/                # Routing configuration
│   ├── index.css              # Global CSS (Tailwind entry)
│   └── main.jsx               # Application entry point
│
├── .env                       # Environment variables (Firebase config)
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧠 How It Works

### 🔹 1. Data Fetching – `useFetchGames.js`
Custom React Hook for fetching game data.

```js
import axios from "axios";
import { useEffect, useState } from "react";

const useFetchGames = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("/games.json") // fetch from public folder
      .then(res => setAllGames(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { allGames, loading, error };
};

export default useFetchGames;
```

**How it works:**
- Automatically runs once on mount (`useEffect` with empty dependency array).
- Fetches data from `/games.json` using `axios`.
- Returns `{ allGames, loading, error }` to consuming components.
- Ideal for components like `AllGames`, `Home`, or `GameList`.

---

### 🔹 2. Authentication Context – `AuthContext.js`
Creates a **global React context** to share authentication data and functions.

```js
import { createContext } from "react";
export const AuthContext = createContext(null);
```

---

### 🔹 3. Authentication Provider – `AuthProvider.jsx`
Wraps the app with **Firebase authentication logic**.

```js
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, sendPasswordResetEmail, updateProfile, onAuthStateChanged } from 'firebase/auth';
```

**Core Functions:**
| Function | Description |
|-----------|-------------|
| `createUser(email, password)` | Register new user |
| `logInUser(email, password)` | Email/password login |
| `logInWithGoogle()` | Google OAuth login |
| `signOutUser()` | Logout current user |
| `forgetPassword(email)` | Sends password reset email |
| `updateUserProfile(name, photoURL)` | Updates user’s profile info |
| `onAuthStateChanged()` | Monitors login/logout in real time |

**Context Value:**
```js
const authInfo = {
  user,
  loading,
  createUser,
  logInUser,
  logInWithGoogle,
  signOutUser,
  forgetPassword,
  updateUserProfile,
};
```

This context is provided globally in `main.jsx`:
```jsx
<AuthProvider>
  <RouterProvider router={router} />
  <ToastContainer ... />
</AuthProvider>
```

This means **any component** can access `user` or auth functions using:
```js
const { user, logInUser, signOutUser } = useContext(AuthContext);
```

---

### 🔹 4. Application Entry – `main.jsx`

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2500} theme="dark" />
    </AuthProvider>
  </StrictMode>,
)
```

**Purpose:**
- Wraps the entire app with `AuthProvider` for global state.
- Adds `RouterProvider` for client-side routing.
- Initializes `React Toastify` for UI alerts.

---

## 🧭 Data Flow Diagram (Simplified)

```
User Action → React Router → Page Component
     ↓
useFetchGames() or AuthContext functions
     ↓
Axios / Firebase API Calls
     ↓
Response updates local state → Rerender components
```

---

## 🔧 Environment Setup

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

---

## 🔐 Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).  
2. Enable **Email/Password** and **Google** authentication providers.  
3. Add your Firebase config to `src/firebase/firebase.config.js`:
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: import.meta.env.VITE_API_KEY,
     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_SENDER_ID,
     appId: import.meta.env.VITE_APP_ID,
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   ```

4. Create a `.env` file:
   ```
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   ...
   ```

---

## 🎨 UI & Styling

- Tailwind CSS handles layout and responsive design.
- DaisyUI provides ready-made components.
- Framer Motion and GSAP animate transitions.
- Toastify handles feedback (e.g., success/error messages).

---

## 🧰 Future Improvements
- Add route protection for authenticated pages (e.g., Profile, Developer).
- Migrate `games.json` to Firebase Firestore for real-time updates.
- Add search and filtering in `AllGames` page.
- Optimize loading states and error handling.

---

## 👨‍💻 Author
**Asif Mahmud**  
Front-End Developer | React Enthusiast
