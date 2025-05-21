import express from 'express';

import { getAllAutores, getAutorById, createAutor, updateAutor, deleteAutor} from '../controllers/autorController.js';

const router = express.Router();

router.get('/autores', getAllAutores);
router.get('/autores/:id', getAutorById);
router.post('/autores', createAutor);
router.put('/autores/:id', updateAutor);
router.delete('/autores/:id', deleteAutor);

export default router;
