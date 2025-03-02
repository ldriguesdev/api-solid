import { describe, expect, it } from 'vitest'
import { RegisterService } from './register.service'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'

describe('Register Service', () => {
  it('should hash user password upon registration', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerService = new RegisterService(usersRepository)

    const { user } = await registerService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    console.log(user.password_hash)

    const isPasswordCorrectlyHashed = await compare('12345', user.password_hash)

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
