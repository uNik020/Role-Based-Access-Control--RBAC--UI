import React, { useState } from 'react';
import mockUsers from '../services/mockUsers';
import '../styles/users.css';

const UsersPage = () => {
  const [users, setUsers] = useState(mockUsers);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });
  const [editingUser, setEditingUser] = useState(null);
  const [errors, setErrors] = useState({}); // New state for validation errors

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  // Validation function
  const validateUser = (user) => {
    const newErrors = {};
    // Validate Name
    if (!user.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(user.name)) { // Regex to allow only letters and spaces
      newErrors.name = "Name can only contain letters and spaces.";
    }
    // Validate Email (Basic validation)
    if (!user.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is not valid.";
    }
    // Validate Role
    if (!user.role.trim()) {
      newErrors.role = "Role is required.";
    } else if (!/^[A-Za-z\s]+$/.test(user.role)) { // Regex to allow only letters and spaces
      newErrors.role = "Role can only contain letters and spaces.";
    }
    return newErrors;
  };

  // Function to add a new user
  const handleAddUser = () => {
    const validationErrors = validateUser(newUser);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return; // Stop execution if validation fails
    }

    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { ...newUser, id }]);
    setNewUser({ name: '', email: '', role: '', status: 'Active' }); // Reset form
    setErrors({}); // Clear errors after success
  };

  // Function to save the edited user
  const handleSaveEdit = () => {
    const validationErrors = validateUser(editingUser);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }

    setUsers(
      users.map((user) => (user.id === editingUser.id ? editingUser : user))
    );
    setEditingUser(null); // Exit editing mode
    setErrors({}); // Clear errors after success
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingUser(null); // Clear editing state
    setErrors({}); // Clear errors when canceling
  };

  // Function to delete a user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen rounded-xl mx-10 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Users Management</h2>

        {/* Add/Edit User Section */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-xl mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingUser ? 'Edit User' : 'Add New User'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={editingUser ? editingUser.name : newUser.name}
                onChange={handleInputChange}
                className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={editingUser ? editingUser.email : newUser.email}
                onChange={handleInputChange}
                className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Role"
                name="role"
                value={editingUser ? editingUser.role : newUser.role}
                onChange={handleInputChange}
                className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>

            <div className="flex space-x-2">
              {editingUser ? (
                <>
                  <button
                    onClick={handleSaveEdit}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleAddUser}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Add User
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">ID</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Email</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Role</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Status</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{user.id}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{user.name}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{user.email}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{user.role}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{user.status}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <button
                      onClick={() => setEditingUser(user)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-gray-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
