import express from 'express';
import {
  createPlaceController,
  getAllPlacesController,
  getPlacesByTypeController,
  updatePlaceController,
  deletePlaceController,
} from '../controllers/placeController.js';
import { authMiddleware } from '../middleware/authMiddleware.js'; 
import { validate } from '../middleware/validate.js';
import { CreatePlaceSchema, UpdatePlaceSchema } from '../schemas/placeSchema.js';

const router = express.Router();

// Todas as rotas protegidas com o authMiddleware
router.post('/', authMiddleware, validate(CreatePlaceSchema), createPlaceController);
router.get('/', authMiddleware, getAllPlacesController);
router.get('/search', authMiddleware, getPlacesByTypeController);
router.put('/:id', authMiddleware, validate(UpdatePlaceSchema), updatePlaceController);
router.delete('/:id', authMiddleware, deletePlaceController);

export default router;
