import React, { useState } from 'react';

const RolesPage = () => {
  const [roles, setRoles] = useState([]); // State to store roles
  const [newRole, setNewRole] = useState({ name: '', permissions: [] }); // State for new role data
  const [editingRole, setEditingRole] = useState(null); // State for role being edited

  // Function to handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingRole) {
      setEditingRole({ ...editingRole, [name]: value });
    } else {
      setNewRole({ ...newRole, [name]: value });
    }
  };

  // Function to add a new role
  const handleAddRole = () => {
    if (!newRole.name.trim()) {
      alert("Role name cannot be empty!");
      return;
    }

    const newId = roles.length ? roles[roles.length - 1].id + 1 : 1; // Generate a unique ID
    setRoles([...roles, { id: newId, ...newRole }]); // Add the new role to the state
    setNewRole({ name: '', permissions: [] }); // Reset the form
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Roles Management</h2>

        {/* Add/Edit Role Section */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingRole ? 'Edit Role' : 'Add New Role'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Role Name"
              name="name"
              value={editingRole ? editingRole.name : newRole.name}
              onChange={handleInputChange}
              className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={editingRole ? () => {} : handleAddRole} // Edit functionality to be added later
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {editingRole ? 'Save Role' : 'Add Role'}
            </button>
          </div>
        </div>

        {/* Roles Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">ID</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{role.name}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                      onClick={() => setEditingRole(role)} // Edit functionality (to be implemented next)
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      onClick={() =>
                        setRoles(roles.filter((r) => r.id !== role.id))
                      } // Delete functionality
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

export default RolesPage;
