import './index.css';
import { HeaderComponent, TableComponent } from '../../components';

function HomePage() {
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
