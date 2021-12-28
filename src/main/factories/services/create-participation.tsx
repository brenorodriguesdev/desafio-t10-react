import { CreateParticipationService } from "../../../data/services/create-participation"
import { Axios } from "../../../infra/axios"

export const makeCreateParticipationService = (): CreateParticipationService => {
    const axios = new Axios()
    return new CreateParticipationService(axios)
}