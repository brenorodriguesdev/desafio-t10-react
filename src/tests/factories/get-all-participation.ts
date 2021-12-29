import { ParticipationModel } from "../../domain/models/participation"
import { GetAllParticipationUseCase } from "../../domain/useCases/get-all-participation"

export class GetAllParticipationUseCaseSpy implements GetAllParticipationUseCase {
    callsCount = 0

    async get(): Promise<ParticipationModel[]> {
        this.callsCount++
        return await new Promise(resolve => resolve([{
            id: 1,
            firstName: 'fistName',
            lastName: 'lastName',
            participation: 10
        }]))
    }
}

export const makeGetAllParticipationUseCaseSpy = (): GetAllParticipationUseCaseSpy => {
    return new GetAllParticipationUseCaseSpy()
}