import express from 'express';
import { z } from 'zod';
import { getProjectsCollection } from '../../infra/MongoDB.js';
import auth from '../../middlewares/Auth.js';

const router = express.Router();

export const projectSchema = z.object({
    title: z.string().min(1),
    shortdescription: z.string().min(1).max(100),
    longdescription: z.string().min(1),
    status: z.enum(["draft", "active", "archived"]),
    visibility: z.enum(["private", "public"]),
    role : z.enum(["FullStack Dev", "FrontEnd Dev", "BackEnd Dev", "Designer", "Project Manager"]),
    stack: z.array(z.string().min(1)),
    teamSize : z.number().min(1),
    repoUrl: z.string().url(),
});


router.post('/', auth, async (req, res) => {

    const resultParsed = projectSchema.safeParse(req.body);

    if (!resultParsed.success) {
        return res.status(400).json({ error : resultParsed.error });
    }

    const data = resultParsed.data;

    try {


        const col = await getProjectsCollection();
        const result = await col.insertOne({
            title : data.title,
            shortdescription : data.shortdescription,
            longdescription : data.longdescription,
            status : data.status,
            visibility : data.visibility,
            role : data.role,
            stack : data.stack,
            teamSize : data.teamSize,
            repoUrl : data.repoUrl,
            createdAt: new Date(),
        });
        
        res.status(201).json({ message: "Projet créée avec succès", id: result.insertedId });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default router;