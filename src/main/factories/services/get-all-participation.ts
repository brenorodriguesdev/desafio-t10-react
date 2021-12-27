import { Axios } from "axios"
import { GetAllParticipationService } from "../../../data/services/get-all-participation"

export const makeGetAllParticipationService = (): GetAllParticipationService => {
    const axios = new Axios()
    return new GetAllParticipationService(axios)
}