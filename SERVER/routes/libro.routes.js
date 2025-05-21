import express from 'express';

import { getLibroById } from '../controllers/libroController.js';

const router = express.Router();
router.get('/libros/:id', getLibroById);

export default router;