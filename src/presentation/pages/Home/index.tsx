import './index.css';
import { HeaderComponent, TableComponent } from '../../components';
import { GetAllParticipationUseCase } from '../../../domain/useCases/get-all-participation';
import { useContext, useEffect } from 'react';
import { ParticipationContext } from '../../contexts/participations';
import { makeCreateParticipationService } from '../../../main/factories/services/create-participation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Charts from 'react-apexcharts';

interface HomePageProps {
    getAllParticipationUseCase: GetAllParticipationUseCase
}

function HomePage({ getAllParticipationUseCase }: HomePageProps) {


    const { setParticipations, grafico } = useContext(ParticipationContext)

    useEffect(() => {
        async function getAllParticipations() {
            try {
                const participations = await getAllParticipationUseCase.get()
                setParticipations(participations)

            } catch (error) {
                setParticipations([])
            }
        }

        getAllParticipations()
    }, [getAllParticipationUseCase, setParticipations])

    return (
        <div className="main">
            <HeaderComponent createParticipationUseCase={makeCreateParticipationService()} />
            <main className="container">
                <h1>DATA</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="containerData">

                    <TableComponent />

                    <div className="chart">
                        <Charts series={grafico.series} options={grafico.options} type="donut" width="350" />
                    </div>

                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export { HomePage };
