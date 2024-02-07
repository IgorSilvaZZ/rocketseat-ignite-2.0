import { FastifyRequest, FastifyReply } from 'fastify';
import { hash } from 'bcryptjs';

import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export async function register(req: FastifyRequest, rep: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  const userWithSameEmail = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    return rep.status(409).send(409);
  }

  const password_hash = await hash(password, 6);

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  });

  return rep.status(201).send();
}
