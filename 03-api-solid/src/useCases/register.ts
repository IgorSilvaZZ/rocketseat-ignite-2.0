import { hash } from 'bcryptjs';

import { prisma } from '@/lib/prisma';

export interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUseCase {
  constructor(private userRepository: any) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userWithSameEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new Error('User already exits!');
    }

    const password_hash = await hash(password, 6);

    await this.userRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
