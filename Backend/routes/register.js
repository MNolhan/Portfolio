import express, { Router } from 'express';
import { z } from 'zod';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

const router = express.Router();

const pool = mysql.createPool({
    host : "127.0.0.1",
    user : "root",
    password : "root",
    database : "appdb",
    port : 3306,
});

const ParseSchema = z.object({
    name : z.string().min(1),
    firstname : z.string().min(1),
    email : z.string().email(),
    password : z.string().min(7)
});

router.post("/", async (req, res) => {
    
    try {
        const{ name, firstname, email, password } = ParseSchema.parse(req.body);

        const [rows] = await pool.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        if (rows.length > 0) {
            res.status(400)
            return res .json("Cet email est déjà attribué à un compte");
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
            "INSERT INTO users (name, firstname, email, password) Values (?, ?, ?, ?)", [name, firstname, email, hashpassword]
        );

        res.status(201);
        res.json("Utilisateur créer avec succès !");

    } catch (error) {

        res.status(500)
        res.json({ error: error.message });

    }

})

export default router;