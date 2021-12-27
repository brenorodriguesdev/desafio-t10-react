import './index.css';
import { HeaderComponent, TableComponent } from '../../components';
import { GetAllParticipationUseCase } from '../../../domain/useCases/get-all-participation';

interface HomePageProps {
    getAllParticipationUseCase: GetAllParticipationUseCase
}

function HomePage({ getAllParticipationUseCase }: HomePageProps) {
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
