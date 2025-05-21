import express from 'express';

import {getAllCiudades, getCiudadById, createCiudad, updateCiudad, deleteCiudad, getCiudadesByIdPais} from '../controllers/ciudadController.js';

const router = express.Router();

router.get('/ciudades', getAllCiudades);
router.get('/ciudades/:id', getCiudadById);
router.post('/ciudades', createCiudad);
router.put('/ciudades/:id', updateCiudad);
router.delete('/ciudades/:id', deleteCiudad);
router.get('/paises/:id_pais/ciudades', getCiudadesByIdPais);

export default router;
