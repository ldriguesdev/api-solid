import type { IGymsRepository } from '@/repositories/gyms-repository'
import type { Gym } from '@prisma/client'

interface FetchNearByGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface FetchNearByGymsUseCaseResponse {
  gyms: Gym[]
}

class FetchNearByGymsUseCase {
  constructor(gymsRepository: IGymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearByGymsUseCaseRequest) {}
}
