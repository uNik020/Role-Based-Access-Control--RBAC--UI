import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-52 h-screen bg-gray-800 text-white p-5 fixed">
      <h2 className="text-center text-xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="text-white text-lg hover:text-blue-400 transition"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            to="/roles"
            className="text-white text-lg hover:text-blue-400 transition"
          >
            Roles
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
