import { loginUser } from '../services/loginService.js';

export async function loginController(req, res) {
  const { email, password } = req.body;

  try {
    const userData = await loginUser(email, password);
    res.status(200).json({ message: `Bem-vindo, ${userData.name}`, token: userData.token });
  } catch (error) {
    if (error.message === 'Email ou senha inválidos!') {
      return res.status(401).json({ message: error.message });
    }
    res.status(500).json({ message: 'Erro ao fazer login.', error: error.message });
  }
}
