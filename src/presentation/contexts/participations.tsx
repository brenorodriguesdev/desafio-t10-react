import { createContext, useState } from "react";
import { ParticipationModel } from "../../domain/models/participation";

interface ParticipationContextProps {
    participations: ParticipationModel[]
    setParticipations: (participations: ParticipationModel[]) => void
}
const ParticipationContext = createContext<ParticipationContextProps>({} as ParticipationContextProps)

function ParticipationProvider({ children }: any) {
    const [participations, setParticipations] = useState<ParticipationModel[]>([])


    return (
        <ParticipationContext.Provider value={{
            participations,
            setParticipations
        }}>
            {children}
        </ParticipationContext.Provider>
    )
}


export { ParticipationContext, ParticipationProvider }