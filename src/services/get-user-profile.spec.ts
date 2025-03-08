import { describe, expect, it } from 'vitest'
import { hash } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { GetUserProfileService } from './get-user-profile.service'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

describe('Get User Profile Service', () => {
  it('should be able to get user profile', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new GetUserProfileService(usersRepository)

    const createdUser = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    await expect(user.name).toEqual('John Doe')
  })

  it('should not be able to get user profile with wrong id', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new GetUserProfileService(usersRepository)

    await expect(() =>
      sut.execute({
        userId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
