import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { RegisterService } from '@/services/register.service'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  const usersRepository = new PrismaUsersRepository()
  const registerService = new RegisterService(usersRepository)

  try {
    await registerService.execute({
      email,
      name,
      password,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
