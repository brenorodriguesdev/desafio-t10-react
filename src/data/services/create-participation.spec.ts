import { ParticipationModel } from '../../domain/models/participation'
import { makeHttpClient } from '../../tests/factories/http-client'
import { HttpClient } from '../contracts/http-client'
import { CreateParticipationService } from './create-participation'

interface SutTypes {
    httpClient: HttpClient
  sut: CreateParticipationService
}

const makeSut = (): SutTypes => {
  const httpClient = makeHttpClient()

  const sut = new CreateParticipationService(httpClient)
  return {
    httpClient,
    sut
  }
}

const makeData = (): ParticipationModel => ({
  firstName: 'firstName',
  lastName: 'lastName',
  participation: 10
})

describe('CreateParticipationService', () => {
  test('Garantir que o post seja chamado com os valores corretos', async () => {
    const { sut, httpClient } = makeSut()
    const postSpy = jest.spyOn(httpClient, 'post')
    await sut.create(makeData())
    expect(postSpy).toHaveBeenCalledWith("/participation", makeData())
  })

  test('Garantir que se o post retornar uma exceção o serviço repassará a exceção', async () => {
    const { sut, httpClient } = makeSut()
    jest.spyOn(httpClient, 'post').mockImplementationOnce(() => { throw new Error() })
    const promise = sut.create(makeData())
    await expect(promise).rejects.toThrow()
  })

  test('Garantir que se o post retornar uma Error o serviço retornará uma exceção', async () => {
    const { sut, httpClient } = makeSut()
    jest.spyOn(httpClient, 'post').mockResolvedValueOnce(new Error())
    const promise = sut.create(makeData())
    await expect(promise).rejects.toThrow()
  })
})