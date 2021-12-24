import { ParticipationModel } from '../../domain/models/participation'
import { CreateParticipationUseCase } from '../../domain/useCases/create-participation'
import { HttpClient } from '../contracts/http-client'

export class CreateParticipationService implements CreateParticipationUseCase {
  constructor(private readonly httpClient: HttpClient) { }
  async create(data: ParticipationModel): Promise<void> {
    const result = await this.httpClient.post("/participation", data)
    if (result instanceof Error) {
      throw result
    }
  }
}
