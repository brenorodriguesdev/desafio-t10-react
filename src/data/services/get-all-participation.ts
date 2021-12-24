import { ParticipationModel } from '../../domain/models/participation'
import { GetAllParticipationUseCase } from '../../domain/useCases/get-all-participation'
import { HttpClient } from '../contracts/http-client'

export class GetAllParticipationService implements GetAllParticipationUseCase {
  constructor(private readonly httpClient: HttpClient) { }
  async get(): Promise<ParticipationModel[]> {
    const participations = await this.httpClient.get("/participation", {})
    if (participations instanceof Error) {
      throw participations
    }
    return participations
  }
}
