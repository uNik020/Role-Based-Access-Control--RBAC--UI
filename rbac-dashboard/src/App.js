import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import routing components
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
    <>
    <Navbar />
    <div className="app subpixel-antialiased">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 px-4 py-2 my-14 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded shadow-xl"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      <Sidebar />
      <div className="ml-52 p-4 my-14"> {/* Add margin for the sidebar */}
        <h1 className="font-sans text-zinc-950 text-4xl font-bold mb-4 text-center">
          RBAC Dashboard
        </h1>
        {/* Render Routes */}
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/roles" element={<RolesPage />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
