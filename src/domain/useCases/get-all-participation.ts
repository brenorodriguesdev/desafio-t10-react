import { ParticipationModel } from '../models/participation'

export interface GetAllParticipationUseCase {
  get: () => Promise<ParticipationModel[]>
}
