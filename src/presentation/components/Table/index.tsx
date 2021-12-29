import { useContext } from 'react';
import { ParticipationContext } from '../../contexts/participations';
import './index.css';

function TableComponent() {

    const { participations } = useContext(ParticipationContext)

    return (
        <table cellSpacing={0} cellPadding={0} className="table">
            
            <thead>
                <tr>
                    <th></th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Participation</th>
                </tr>
            </thead>

            <tbody>
                {
                    participations.map(participation => (
                        <tr key={participation.id} className="item">
                            <td>{participation.id}</td>
                            <td>{participation.firstName}</td>
                            <td>{participation.lastName}</td>
                            <td>{participation.participation}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    );
}

export { TableComponent };
