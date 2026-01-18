import express from 'express';
import { z } from 'zod';
import { getProjectsCollection } from '../../infra/MongoDB.js';
import auth from '../../middlewares/auth.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

export const projectUpdateSchema = z.object({
    title: z.string().min(1).optional(),
    shortdescription: z.string().min(1).max(100).optional(),
    longdescription: z.string().min(1).optional(),
    status: z.enum(["draft", "active", "archived"]).optional(),
    visibility: z.enum(["private", "public"]).optional(),
    role : z.enum(["FullStack Dev", "FrontEnd Dev", "BackEnd Dev", "Designer", "Project Manager"]).optional(),
    stack: z.array(z.string().min(1)).optional(),
    teamSize : z.number().min(1).optional(),
    repoUrl: z.string().url().optional(),
});

router.put('/:id', auth,  async (req, res) => {

    const resultParsed = projectUpdateSchema.safeParse(req.body);

    if (!resultParsed.success) {
        return res.status(400).json({ error : resultParsed.error });
    }

    const data = resultParsed.data;

    try {
        const col = await getProjectsCollection();

        const result = await col.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: data }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Projet non trouvé" });
        }

        res.status(200).json({ message: "Projet mis à jour avec succès" });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default router;