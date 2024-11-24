import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UsersPage from './pages/UsersPage';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="app">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded shadow">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Sidebar />
      <div className="main-content">
        <h1>RBAC Dashboard</h1>
        {/* Routes will render the pages here */}
        <UsersPage />
      </div>
    </div>
  );
}

export default App;
