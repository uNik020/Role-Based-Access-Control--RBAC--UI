import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
    <div className={`app subpixel-antialiased ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex w-full h-auto bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
        <Sidebar />
        <div className="ml-52 p-4 my-14 flex-1  bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <h1 className="font-sans text-zinc-950 dark:text-white text-4xl font-bold mb-4 text-center">
            RBAC Dashboard
          </h1>
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/roles" element={<RolesPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
