import { createContext, useEffect, useState } from "react";
import { ParticipationModel } from "../../domain/models/participation";

interface ParticipationContextProps {
    participations: ParticipationModel[]
    setParticipations: (participations: ParticipationModel[]) => void

    grafico: any
    setGrafico: (grafico: any) => void
}
const ParticipationContext = createContext<ParticipationContextProps>({} as ParticipationContextProps)

function ParticipationProvider({ children }: any) {
    const [participations, setParticipations] = useState<ParticipationModel[]>([])

    const [grafico, setGrafico] = useState({
        options: {
            labels: []
        },
        series: [],
    });

    useEffect(() => {

        let labels: any = []
        let series: any = []

        participations.forEach(participation => labels.push(participation.firstName))
        participations.forEach(participation => series.push(Number(participation.participation)))

        let options: any = {
            dataLabels: {
                enabled: false
            },
            labels
        }
        
        setGrafico({
            options,
            series,
        })

    }, [[participations]])

    return (
        <ParticipationContext.Provider value={{
            participations,
            setParticipations,
            grafico,
            setGrafico
        }}>
            {children}
        </ParticipationContext.Provider>
    )
}


export { ParticipationContext, ParticipationProvider }