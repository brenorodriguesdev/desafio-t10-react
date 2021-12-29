import { ParticipationModel } from "../../domain/models/participation"
import { CreateParticipationUseCase } from "../../domain/useCases/create-participation"

export class CreateParticipationUseCaseSpy implements CreateParticipationUseCase {
    callsCount = 0
    data: any = {}

    create (data: ParticipationModel): Promise<void> {
        this.callsCount++
        this.data = data
        return new Promise(resolve => resolve())
    }
}

export const makeCreateParticipationUseCaseSpy = (): CreateParticipationUseCaseSpy => {
    return new CreateParticipationUseCaseSpy()
}