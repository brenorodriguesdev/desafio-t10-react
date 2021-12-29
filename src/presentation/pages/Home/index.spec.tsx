/* eslint-disable testing-library/no-node-access */
import { render, RenderResult } from "@testing-library/react"
import { HomePage } from "."
import { GetAllParticipationUseCaseSpy, makeGetAllParticipationUseCaseSpy } from "../../../tests/factories/get-all-participation"
import { ParticipationContext } from "../../contexts/participations"

interface SutType {
    getAllParticipationUseCase: GetAllParticipationUseCaseSpy
    sut: RenderResult
}


function makeSut(): SutType {
    const getAllParticipationUseCase = makeGetAllParticipationUseCaseSpy()
    return {
        getAllParticipationUseCase,
        sut: render(<ParticipationContext.Provider value={{
            participations: [],
            setParticipations: jest.fn,
            grafico: {
                options: {
                    labels: []
                },
                series: [],
            }
        }}>
            <HomePage getAllParticipationUseCase={getAllParticipationUseCase} />
        </ParticipationContext.Provider>)
    }
}
describe('HomePage', () => {
    test('Estado inicial', async () => {
        const { sut } = makeSut()
        const { container } = sut
        expect(container.getElementsByClassName('main').length).toBe(1);
        expect(container.getElementsByClassName('container').length).toBe(1);
        expect(container.getElementsByClassName('subtitle').length).toBe(1);
        expect(container.getElementsByClassName('containerData').length).toBe(1);
    })

    test('Verificar se o get foi chamado', async () => {
        const { getAllParticipationUseCase } = makeSut()
        expect(getAllParticipationUseCase.callsCount).toBe(1)
    })
})