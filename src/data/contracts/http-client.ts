export interface HttpClient {
  post(route: string, body: any): Promise<any>
  get(route: string, params: any): Promise<any>
}