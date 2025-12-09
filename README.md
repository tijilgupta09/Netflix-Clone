# Netflix Clone

A fully responsive Netflix clone built using **React**, **Vite**, and **Firebase**. This application fetches real-time movie and TV show data from the **TMDB API** and features user authentication and a dynamic user interface.

## 🚀 Features

* **User Authentication**: Sign Up and Sign In functionality using **Firebase Authentication**.
* **Browse Content**: Dynamic rows of movies/shows categorized by genre (Trending, Top Rated, Action, etc.).
* **TMDB Integration**: Fetches data dynamically from The Movie Database API.
* **Responsive Design**: optimized for desktop, tablet, and mobile viewing.
* **Modern State Management**: Uses React Hooks (`useState`, `useEffect`).

## 🛠️ Tech Stack

* **Frontend Library**: React (with Vite)
* **Build Tool**: Vite
* **Styling**: CSS / Custom Styles
* **Backend / Auth**: Firebase
* **Data Source**: TMDB API

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v14 or higher)
* [npm](https://www.npmjs.com/) or yarn

You will also need:
1.  **TMDB API Key**: Sign up at [The Movie Database](https://www.themoviedb.org/) and generate an API key.
2.  **Firebase Project**: Create a project at [Firebase Console](https://console.firebase.google.com/) and enable Authentication.

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/tijilgupta09/Netflix-Clone.git](https://github.com/tijilgupta09/Netflix-Clone.git)
    cd Netflix-Clone
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your API keys. Since this project uses Vite, prefix your variables with `VITE_`.

    ```env
    VITE_TMDB_API_KEY=your_tmdb_api_key_here
    VITE_FIREBASE_API_KEY=your_firebase_api_key_here
    VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the application**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

## 📂 Project Structure

Based on the current file organization:

```text
Netflix-Clone/
├── public/              # Static public assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable UI components (Rows, Banner, Navbar)
│   ├── pages/           # Page views (Home, Login, Profile)
│   ├── App.jsx          # Main application component
│   ├── firebase.js      # Firebase configuration and initialization
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── eslint.config.js     # Linting configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration