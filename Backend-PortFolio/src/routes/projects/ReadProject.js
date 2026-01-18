import express from "express";
import auth from "../../middlewares/auth.js";
import { getProjectsCollection } from "../../infra/MongoDB.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    
    try {
        const col =  await getProjectsCollection();
        const projects = await col.find({}).toArray();

        return res.status(200).json(projects);

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

router.get("/:id",auth ,async (req, res) => {
    
    try {
        const col = await getProjectsCollection();
        const project = await col.findOne({ _id: new ObjectId(req.params.id) });

        return res.status(200).json(project);

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

export default router;