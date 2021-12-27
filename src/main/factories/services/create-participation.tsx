import { Axios } from "axios"
import { CreateParticipationService } from "../../../data/services/create-participation"

export const makeCreateParticipationService = (): CreateParticipationService => {
    const axios = new Axios()
    return new CreateParticipationService(axios)
}