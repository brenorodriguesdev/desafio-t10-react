import { HttpClient } from "../data/contracts/http-client";
import { api } from "../main/config/axios";

export class Axios implements HttpClient {
    async post(route: string, body: any): Promise<any> {
        try {
            const response = await api.post(route, body)
            return response.data
        } catch (error: any) {
            if (!error.response) {
                return new Error(error.message)
            }

            return new Error(error.response.data.message)
        }
    }

    async get(route: string, params: any): Promise<any> {
        try {
            const response = await api.get(route, {
                params
            })
            return response.data
        } catch (error: any) {
            if (!error.response) {
                return new Error(error.message)
            }
            
            return new Error(error.response.data.message)
        }
    }
}