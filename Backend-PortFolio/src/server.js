import express from 'express';
import dotenv from 'dotenv';

// Routes Users
import CreateUser from './routes/users/CreateUser.js';
import LoginUser from './routes/users/LoginUser.js';
import ReadUser from './routes/users/ReadUser.js';
import DeleteUser from './routes/users/DeleteUser.js';
import UpdateUser from './routes/users/UpdateUser.js';

// Route Projects

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/SignUP', CreateUser);
app.use('/SignIN', LoginUser);
app.use('/Profil', ReadUser);
app.use('/DeleteAccount', DeleteUser);
app.use('/UpdatePwd', UpdateUser);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

