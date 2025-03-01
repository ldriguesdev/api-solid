import type { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'

interface RegisterServiceParams {
  name: string
  email: string
  password: string
}

export class RegisterService {
  constructor(private userRepository: UsersRepository) {}

  async execute({ email, name, password }: RegisterServiceParams) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.userRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('E-mail already exists.')
    }

    await this.userRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
