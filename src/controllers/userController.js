import { registerUser } from '../services/userService.js';
import { checkEmailExists } from '../services/loginService.js';

export async function registerUserController(req, res) {
  const { name, email, password, phone } = req.body;

  try {
    if (await checkEmailExists(email)) {
      return res.status(400).json({ error: 'Email já cadastrado, escolha outro.' });
    }

    const user = await registerUser({ name, email, password, phone });
    res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário.', details: error.message });
  }
}
