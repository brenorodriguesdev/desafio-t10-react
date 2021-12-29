import { Axios } from './axios'
import { ParticipationModel } from '../domain/models/participation'
import { api } from "../main/config/axios";

const makeResponse = () => ({ data: { status: 200, message: 'any_message ' } })
const makeResponseError = () => ({ response: { data: { message: 'any_message ' }} })

jest.mock('../main/config/axios')
jest.spyOn(api, 'get').mockResolvedValueOnce(makeResponse())


const makeData = (): ParticipationModel => ({
    firstName: 'firstName',
    lastName: 'lastName',
    participation: 10
})

const makeSut = (): Axios => {
    return new Axios()
}

describe('Axios', () => {
    test('Garantir que o post seja chamado com os valores corretos', async () => {
        const sut = makeSut()
        const postSpy = jest.spyOn(api, 'post')
        await sut.post("/participation", makeData())
        expect(postSpy).toHaveBeenCalledWith("/participation", makeData())
    })

    test('Garantir que o post seja retornado com os valores corretos', async () => {
        const sut = makeSut()
        jest.spyOn(api, 'post').mockResolvedValueOnce(makeResponse())
        const response = await sut.post("/participation", makeData())
        expect(response).toEqual(makeResponse().data)
    })

    test('Garantir que se o post retornar uma exceção retornar um error', async () => {
        const sut = makeSut()
        jest.spyOn(api, 'post').mockRejectedValueOnce(makeResponseError())
        const response = await sut.post("/participation", makeData())
        expect(response).toEqual(new Error(makeResponseError().response.data.message))
    })

    test('Garantir que o get seja chamado com os valores corretos', async () => {
        const sut = makeSut()
        const getSpy = jest.spyOn(api, 'get')
        await sut.get("/participation", {})
        expect(getSpy).toHaveBeenCalledWith("/participation", { params: {} })
    })

    test('Garantir que o get seja retornado com os valores corretos', async () => {
        const sut = makeSut()
        jest.spyOn(api, 'get').mockResolvedValueOnce(makeResponse())
        const response = await sut.get("/participation", makeData())
        expect(response).toEqual(makeResponse().data)
    })

    test('Garantir que se o get retornar uma exceção retornar um error', async () => {
        const sut = makeSut()
        jest.spyOn(api, 'get').mockRejectedValueOnce(makeResponseError())
        const response = await sut.get("/participation", makeData())
        expect(response).toEqual(new Error(makeResponseError().response.data.message))
    })
})
