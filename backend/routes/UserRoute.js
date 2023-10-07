import express  from "express";
import { 
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from "../controllers/NoteController.js";

const router = express.Router();

router.get('/api/notes', getNotes);
router.get('/api/notes/:id', getNoteById);
router.post('/api/notes', createNote);
router.patch('/api/notes/:id', updateNote);
router.delete('/api/notes/:id', deleteNote);

export default router;