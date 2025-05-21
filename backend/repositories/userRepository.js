const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findById(id) {
  return await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
}

async function findByEmail(email) {
  return await prisma.user.findUnique({
    where: { email },
  });
}

async function createUser(data) {
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      pass: data.pass,
    },
  });
}

module.exports = {
  findById,
  findByEmail,
  createUser,
};
