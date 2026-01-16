import express from 'express';
import dotenv from 'dotenv';

// Routes Users
import CreateUser from './routes/users/CreateUser.js';
import LoginUser from './routes/users/LoginUser.js';

// Route Projects

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/SignUP', CreateUser);
app.use('/SignIN', LoginUser);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

