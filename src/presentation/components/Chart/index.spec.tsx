/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, RenderResult } from "@testing-library/react"
import { ChartComponent } from "."
import { ParticipationContext } from "../../contexts/participations"


function makeSut(): RenderResult {
    return render(<ParticipationContext.Provider value={{
        participations: [{
            id: 1,
            firstName: 'firstName',
            lastName: 'lastName',
            participation: 10
          },
          {
            id: 2,
            firstName: 'firstName',
            lastName: 'lastName',
            participation: 10
          }],
        setParticipations: jest.fn,
        grafico: {
            options: {
                labels: []
            },
            series: [],
        }
    }}>
        <ChartComponent />
    </ParticipationContext.Provider>)
}

describe('TableComponent', () => {
    test('Estado inicial', async () => {
        const { container } = makeSut()
        expect(container.getElementsByClassName('chart').length).toBe(1);
    })
})