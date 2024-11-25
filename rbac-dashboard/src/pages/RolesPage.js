import React, { useState } from 'react';

const RolesPage = () => {
  const [roles, setRoles] = useState([]); // State to store roles
  const [newRole, setNewRole] = useState({ name: '', permissions: [] }); // State for new role data
  const [editingRole, setEditingRole] = useState(null); // State for role being edited
  const [newPermission, setNewPermission] = useState(''); // State for individual permission input

  // Handle input changes for role name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingRole) {
      setEditingRole({ ...editingRole, [name]: value });
    } else {
      setNewRole({ ...newRole, [name]: value });
    }
  };

  // Handle adding a new permission
  const handleAddPermission = () => {
    if (newPermission.trim()) {
      if (editingRole) {
        setEditingRole({
          ...editingRole,
          permissions: [...editingRole.permissions, newPermission],
        });
      } else {
        setNewRole({
          ...newRole,
          permissions: [...newRole.permissions, newPermission],
        });
      }
      setNewPermission(''); // Reset permission input
    }
  };

  // Handle removing a permission
  const handleRemovePermission = (index) => {
    if (editingRole) {
      const updatedPermissions = [...editingRole.permissions];
      updatedPermissions.splice(index, 1);
      setEditingRole({ ...editingRole, permissions: updatedPermissions });
    } else {
      const updatedPermissions = [...newRole.permissions];
      updatedPermissions.splice(index, 1);
      setNewRole({ ...newRole, permissions: updatedPermissions });
    }
  };

  // Add a new role
  const handleAddRole = () => {
    if (!newRole.name.trim()) {
      alert('Role name cannot be empty!');
      return;
    }

    const newId = roles.length ? roles[roles.length - 1].id + 1 : 1; // Generate a unique ID
    setRoles([...roles, { id: newId, ...newRole }]); // Add the new role
    setNewRole({ name: '', permissions: [] }); // Reset the form
  };

  // Save changes to an edited role
  const handleSaveEdit = () => {
    setRoles(
      roles.map((role) => (role.id === editingRole.id ? editingRole : role))
    );
    setEditingRole(null);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingRole(null);
  };

  // Delete a role
  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-xl">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Roles Management</h2>

        {/* Add/Edit Role Section */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-xl mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingRole ? 'Edit Role' : 'Add New Role'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Role Name"
              name="name"
              value={editingRole ? editingRole.name : newRole.name}
              onChange={handleInputChange}
              className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Permissions Management */}
          <div className="mt-4">
            <h4 className="text-md font-semibold mb-2">Manage Permissions</h4>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Add Permission"
                value={newPermission}
                onChange={(e) => setNewPermission(e.target.value)}
                className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 flex-1"
              />
              <button
                onClick={handleAddPermission}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Add Permission
              </button>
            </div>
            <ul className="mt-2">
              {(editingRole ? editingRole.permissions : newRole.permissions).map(
                (permission, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-2 rounded mb-2"
                  >
                    {permission}
                    <button
                      onClick={() => handleRemovePermission(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mt-4">
            {editingRole ? (
              <>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition ml-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleAddRole}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Add Role
              </button>
            )}
          </div>
        </div>

        {/* Roles Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">ID</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Permissions</th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{role.id}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{role.name}</td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    {role.permissions.join(', ')}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">
                    <button
                      onClick={() => setEditingRole(role)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(role.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2"
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
