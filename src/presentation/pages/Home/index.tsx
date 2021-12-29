import './index.css';
import { HeaderComponent, TableComponent, ChartComponent } from '../../components';
import { GetAllParticipationUseCase } from '../../../domain/useCases/get-all-participation';
import { useContext, useEffect } from 'react';
import { ParticipationContext } from '../../contexts/participations';
import { makeCreateParticipationService } from '../../../main/factories/services/create-participation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

                    <ChartComponent />

                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export { HomePage };
