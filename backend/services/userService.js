const { z } = require('zod');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const userRepository = require('../repositories/userRepository');

const userSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  pass: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

async function getUserById(id) {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }
  return user;
}

async function createUser(data) {
  const result = userSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.errors.map(e => e.message).join(', ');
    throw new Error(`Erro de validação: ${errorMessages}`);
  }

  const existingUser = await userRepository.findByEmail(data.email);
  if (existingUser) {
    throw new Error('E-mail já está em uso');
  }

  const hashedPass = await bcrypt.hash(data.pass, 10);

  const userToCreate = {
    ...data,
    pass: hashedPass,
  };

  return await userRepository.createUser(userToCreate);
}

async function login({ email, pass }) {
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const passwordMatch = await bcrypt.compare(pass, user.pass);
  if (!passwordMatch) {
    throw new Error('Senha incorreta');
  }

  const { pass: _, ...userWithoutPassword } = user;

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { user: userWithoutPassword, token };
}


module.exports = {
  getUserById,
  createUser,
  login
};

