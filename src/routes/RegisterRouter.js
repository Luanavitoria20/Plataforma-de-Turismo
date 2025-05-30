import express from 'express';
import { registerUserController } from '../controllers/userController.js';
import { registerAdminController } from '../controllers/adminController.js';
import { validate } from '../middleware/validate.js';
import { RegisterUserSchema, RegisterAdminSchema } from '../schemas/registerSchema.js';

const router = express.Router();

router.post('/auth/register', validate(RegisterUserSchema), registerUserController);
router.post('/auth/register-admin', validate(RegisterAdminSchema), registerAdminController);

export default router;

