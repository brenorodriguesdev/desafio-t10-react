import { ParticipationModel } from '../models/participation'

export interface CreateParticipationUseCase {
  create: (data: ParticipationModel) => Promise<void>
}
