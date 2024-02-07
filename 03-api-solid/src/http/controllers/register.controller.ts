import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

import { RegisterUserUseCase } from '@/useCases/register';
import { UserPrismaRepository } from '@/repositories/UserPrismaRepository';

export async function register(req: FastifyRequest, rep: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  try {
    const prismaUsersRepository = new UserPrismaRepository();
    const registerUserUseCase = new RegisterUserUseCase(prismaUsersRepository);

    await registerUserUseCase.execute({
      name,
      email,
      password,
    });

    return rep.status(201).send();
  } catch (error) {
    return rep.status(409).send();
  }
}
