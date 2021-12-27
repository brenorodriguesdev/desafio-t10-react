import { useContext } from 'react';
import { ParticipationContext } from '../../contexts/participations';
import './index.css';

function TableComponent() {

    const { participations } = useContext(ParticipationContext)

    return (
        <table cellSpacing={0} cellPadding={0} className="table">
            <tr>
                <th></th>
                <th>First name</th>
                <th>Last name</th>
                <th>Participation</th>
            </tr>
            
            {
                participations.map(participation => (
                    <tr>
                        <td>{participation.id}</td>
                        <td>{participation.firstName}</td>
                        <td>{participation.lastName}</td>
                        <td>{participation.participation}</td>
                    </tr>
                ))
            }

        </table>
    );
}

export { TableComponent };
