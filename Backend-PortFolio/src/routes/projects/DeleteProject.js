import express from "express";
import auth from "../../middlewares/auth.js";
import { getProjectsCollection } from "../../infra/MongoDB.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.delete("/:id", auth, async (req, res) => {
    
    try {
        const col = await getProjectsCollection();

        const result = await col.deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Projet non trouvé" });
        }

        return res.status(200).json({ message: "Projet supprimé avec succès" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

export default router;