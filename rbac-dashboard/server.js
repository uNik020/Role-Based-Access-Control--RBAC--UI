//Express Server for json database
// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // File paths
// const rolesFilePath = './services/roles.json';
// const usersFilePath = './services/users.json';

// // Helper to read JSON file
// const readJsonFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

// // Helper to write to JSON file
// const writeJsonFile = (filePath, data) =>
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// // API to get roles
// app.get('/roles', (req, res) => {
//   const roles = readJsonFile(rolesFilePath);
//   res.json(roles);
// });

// // API to add a role
// app.post('/roles', (req, res) => {
//   const roles = readJsonFile(rolesFilePath);
//   const newRole = req.body;

//   roles.push(newRole);
//   writeJsonFile(rolesFilePath, roles);

//   res.status(201).json(newRole);
// });

// // API to get users
// app.get('/users', (req, res) => {
//   const users = readJsonFile(usersFilePath);
//   res.json(users);
// });

// // API to add a user
// app.post('/users', (req, res) => {
//   const users = readJsonFile(usersFilePath);
//   const newUser = req.body;

//   users.push(newUser);
//   writeJsonFile(usersFilePath, users);

//   res.status(201).json(newUser);
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
