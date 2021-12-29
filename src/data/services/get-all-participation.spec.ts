import { makeHttpClient } from '../../tests/factories/http-client'
import { HttpClient } from '../contracts/http-client'
import { GetAllParticipationService } from './get-all-participation'

interface SutTypes {
    httpClient: HttpClient
    sut: GetAllParticipationService
}

const makeSut = (): SutTypes => {
    const httpClient = makeHttpClient()

    const sut = new GetAllParticipationService(httpClient)
    return {
        httpClient,
        sut
    }
}

describe('GetAllParticipationService', () => {
    test('Garantir que o get seja chamado com os valores corretos', async () => {
        const { sut, httpClient } = makeSut()
        const getSpy = jest.spyOn(httpClient, 'get')
        await sut.get()
        expect(getSpy).toHaveBeenCalledWith("/participation", {})
    })

    test('Garantir que se o get retornar uma exceção o serviço repassará a exceção', async () => {
        const { sut, httpClient } = makeSut()
        jest.spyOn(httpClient, 'get').mockImplementationOnce(() => { throw new Error() })
        const promise = sut.get()
        await expect(promise).rejects.toThrow()
    })

    test('Garantir que se o get retornar uma Error o serviço retornará uma exceção', async () => {
        const { sut, httpClient } = makeSut()
        jest.spyOn(httpClient, 'get').mockResolvedValueOnce(new Error())
        const promise = sut.get()
        await expect(promise).rejects.toThrow()
    })
})