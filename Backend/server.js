import express from 'express';
import dotenv from 'dotenv';

import Register from './routes/register.js';
// import Login from './routes/login.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/sign-up', Register);
// app.use('/login', Login)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
