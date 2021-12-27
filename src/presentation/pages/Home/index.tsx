import './index.css';
import { HeaderComponent, TableComponent } from '../../components';
import { GetAllParticipationUseCase } from '../../../domain/useCases/get-all-participation';
import { useContext, useEffect } from 'react';
import { ParticipationContext } from '../../contexts/participations';

interface HomePageProps {
    getAllParticipationUseCase: GetAllParticipationUseCase
}

function HomePage({ getAllParticipationUseCase }: HomePageProps) {

    const { setParticipations } = useContext(ParticipationContext)

    useEffect(() => {
        async function getAllParticipations() {
            try {
                const participations = await getAllParticipationUseCase.get()
                setParticipations(participations)
            } catch (error) {
                setParticipations([])
            }
        }

        getAllParticipatios()
    })
        
    return (
        <div className="main">
            <HeaderComponent />
            <main className="container">
                <h1>DATA</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="containerData">

                    <TableComponent />

                    <div className="chart">
                        <canvas id="myChart"></canvas>
                    </div>

                </div>
            </main>
        </div>
    );
}

export { HomePage };
