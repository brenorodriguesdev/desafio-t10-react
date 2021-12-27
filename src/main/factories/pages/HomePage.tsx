import { ParticipationProvider } from "../../../presentation/contexts/participations";
import { HomePage } from "../../../presentation/pages";
import { makeGetAllParticipationService } from "../services/get-all-participation";

export function makeHomePage() {
    return (
        <ParticipationProvider>
            <HomePage getAllParticipationUseCase={makeGetAllParticipationService()} />
        </ParticipationProvider>
    )
}