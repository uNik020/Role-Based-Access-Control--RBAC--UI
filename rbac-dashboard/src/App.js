import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="app subpixel-antialiased">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded shadow-xl"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <h1 className="font-sans text-zinc-950 text-5xl font-bold mb-4 text-center">
          RBAC Dashboard
        </h1>
        {/* Routes will render the pages here */}
        <UsersPage />
        <RolesPage />

      </div>
    </div>
  );
}

export default App;
