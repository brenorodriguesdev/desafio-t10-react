import { HttpClient } from "../../data/contracts/http-client"

export const makeHttpClient = (): HttpClient => {
    class HttpClientStub implements HttpClient {
      async post (): Promise<any> {
        return await new Promise(resolve => resolve({ message: 'any_response' }))
      }
  
      async get (): Promise<any> {
        return await new Promise(resolve => resolve({ message: 'any_response' }))
      }
    }
    return new HttpClientStub()
  }