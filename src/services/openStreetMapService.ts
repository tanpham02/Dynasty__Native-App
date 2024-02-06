import axios from "axios"
import { OPEN_STREET_MAP_URL } from "@/constants/apiURL"
import { LocationInfoModel } from "@/models/locationInfoModel"

export const openStreetMapService = {
    getLocationsByLonLat: async ({ lat, lon }: { lat: number, lon: number }): Promise<LocationInfoModel> => {
        return axios({
            baseURL: `${OPEN_STREET_MAP_URL}/reverse`,
            method: "GET",
            params: {
                format: "json",
                lat,
                lon
            }
        })
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    }
}