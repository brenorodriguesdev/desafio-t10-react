import './index.css';

function TableComponent() {
    return (
        <table cellSpacing={0} cellPadding={0} className="table">
            <tr>
                <th></th>
                <th>First name</th>
                <th>Last name</th>
                <th>Participation</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Carlos</td>
                <td>Moura</td>
                <td>5%</td>
            </tr>

            <tr>
                <td>2</td>
                <td>Fernanda</td>
                <td>Oliveira</td>
                <td>15%</td>
            </tr>

            <tr>
                <td>3</td>
                <td>Hugo</td>
                <td>Silva</td>
                <td>20%</td>
            </tr>

            <tr>
                <td>4</td>
                <td>Eliza</td>
                <td>Souza</td>
                <td>20%</td>
            </tr>

            <tr>
                <td>5</td>
                <td>Anderson</td>
                <td>Santos</td>
                <td>40%</td>
            </tr>


        </table>
    );
}

export { TableComponent };
