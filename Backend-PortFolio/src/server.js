import express from 'express';
import dotenv from 'dotenv';
import { ensureRedisConnected } from "./infra/RedisClient.js"; 

// Routes Users
import CreateUser from './routes/users/CreateUser.js';
import LoginUser from './routes/users/LoginUser.js';
import ReadUser from './routes/users/ReadUser.js';
import DeleteUser from './routes/users/DeleteUser.js';
import UpdateUser from './routes/users/UpdateUser.js';

// Route Projects
import CreateProject from './routes/projects/CreateProject.js';
import ReadProject from './routes/projects/ReadProject.js';
import DeleteProject from './routes/projects/DeleteProject.js';
import UpdateProject from './routes/projects/UpdateProject.js';

dotenv.config();
await ensureRedisConnected();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Routes Users
app.use('/SignUP', CreateUser);
app.use('/SignIN', LoginUser);
app.use('/Profil', ReadUser);
app.use('/DeleteAccount', DeleteUser);
app.use('/UpdatePwd', UpdateUser);

// Route Projects
app.use('/CreateProject', CreateProject);
app.use('/Projects', ReadProject);
app.use('/Projects', DeleteProject);
app.use('/UpdateProject', UpdateProject);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

