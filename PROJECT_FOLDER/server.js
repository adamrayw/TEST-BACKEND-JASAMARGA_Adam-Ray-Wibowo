const express = require('express');
const app = express();
const db = require('./config/database.js');

app.use(express.json());
app.use('/employees', require('./routes/employeeRoutes'));

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})