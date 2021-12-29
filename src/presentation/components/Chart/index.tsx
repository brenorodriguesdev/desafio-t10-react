import './index.css';
import Charts from 'react-apexcharts';
import { useContext } from 'react';
import { ParticipationContext } from '../../contexts/participations';

function ChartComponent() {

    const { grafico } = useContext(ParticipationContext)


    return (
        <div className="chart">
            {grafico.series.length > 0 && <Charts series={grafico.series} options={grafico.options} type="donut" width="350" />}
        </div>
    );
}

export { ChartComponent };
