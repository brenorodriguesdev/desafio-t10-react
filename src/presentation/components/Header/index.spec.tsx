/* eslint-disable testing-library/no-node-access */
import { render, RenderResult, screen, fireEvent, waitFor } from "@testing-library/react"
import { HeaderComponent } from "."
import { CreateParticipationUseCaseSpy, makeCreateParticipationUseCaseSpy } from "../../../tests/factories/create-participation"
import { ParticipationContext } from "../../contexts/participations"
import { toast } from 'react-toastify';

jest.mock('react-toastify')

interface SutType {
    createParticipationUseCase: CreateParticipationUseCaseSpy
    sut: RenderResult
}


function makeSut(): SutType {
    const createParticipationUseCase = makeCreateParticipationUseCaseSpy()
    return {
        createParticipationUseCase,
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
            <HeaderComponent createParticipationUseCase={createParticipationUseCase} />
        </ParticipationContext.Provider>)
    }
}
describe('HeaderComponent', () => {
    test('Estado inicial', async () => {
        const { sut } = makeSut()
        const { container } = sut
        expect(container.getElementsByClassName('header').length).toBe(1);
        expect(container.getElementsByClassName('input').length).toBe(3);
        expect(container.getElementsByClassName('button').length).toBe(1);
    })

    test('Verificar se o create foi chamado com os valores corretos', async () => {
        const { createParticipationUseCase } = makeSut()
        const inputFirstName = screen.getByTestId("firstName")
        fireEvent.input(inputFirstName, { target: { value: 'firstName' } })
        const inputLastName = screen.getByTestId("lastName")
        fireEvent.input(inputLastName, { target: { value: 'lastName' } })
        const inputParticipation = screen.getByTestId("participation")
        fireEvent.input(inputParticipation, { target: { value: 10 } })
        const form = screen.getByTestId('form')
        const successSpy = jest.spyOn(toast, 'success')

        fireEvent.submit(form)
        await waitFor(() => form)

        expect(createParticipationUseCase.callsCount).toBe(1)
        expect(createParticipationUseCase.data).toEqual({
            firstName: 'firstName',
            lastName: 'lastName',
            participation: 10
        })
        expect(successSpy).toHaveBeenCalledWith('Participation sent', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    })

    test('Se o create retornar uma exceção retornar uma mensagem de error', async () => {
        const { createParticipationUseCase } = makeSut()
        jest.spyOn(createParticipationUseCase, 'create').mockImplementationOnce(() => { throw new Error('Error') })
        const inputFirstName = screen.getByTestId("firstName")
        fireEvent.input(inputFirstName, { target: { value: 'firstName' } })
        const inputLastName = screen.getByTestId("lastName")
        fireEvent.input(inputLastName, { target: { value: 'lastName' } })
        const inputParticipation = screen.getByTestId("participation")
        fireEvent.input(inputParticipation, { target: { value: 10 } })
        const form = screen.getByTestId('form')
        const warnSpy = jest.spyOn(toast, 'warn')

        fireEvent.submit(form)
        await waitFor(() => form)

        expect(warnSpy).toHaveBeenCalledWith('Error', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    })
})