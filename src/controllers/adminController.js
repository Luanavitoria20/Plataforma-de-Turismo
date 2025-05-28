import { registerAdmin } from '../services/adminService.js';
import { checkEmailExists } from '../services/loginService.js';


export async function registerAdminController(req, res) {
  const { name, email, password } = req.body;

  try {
    if (await checkEmailExists(email)) {
      return res.status(400).json({ error: 'Email já cadastrado, escolha outro.' });
    }

    const admin = await registerAdmin({ name, email, password });
    res.status(201).json({ message: 'Administrador registrado com sucesso!', admin });
  } catch (error) {
    console.error('Erro ao registrar admin:', error);
    res.status(500).json({ message: 'Erro ao registrar administrador.', details: error.message });
  }
}
