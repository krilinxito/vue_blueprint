import express from 'express';

import {getAllPaises, getPaisById, createPais, updatePais, deletePais} from '../controllers/paisController.js';

const router = express.Router();

router.get('/paises', getAllPaises);
router.get('/paises/:id', getPaisById);
router.post('/paises', createPais);
router.put('/paises/:id', updatePais);
router.delete('/paises/:id', deletePais);

export default router;
