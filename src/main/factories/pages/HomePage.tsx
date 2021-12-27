import { HomePage } from "../../../presentation/pages";
import { makeGetAllParticipationService } from "../services/get-all-participation";

export function makeHomePage() {
    return (
        <HomePage getAllParticipationUseCase={makeGetAllParticipationService()} />
    )
}