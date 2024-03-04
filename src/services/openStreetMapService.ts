import axios from 'axios';
import { ApiURL } from '@/constants';
import { LocationInfoModel } from '@/models';

const openStreetMapService = {
    getLocationsByLonLat: async ({ lat, lon }: { lat: number; lon: number }): Promise<LocationInfoModel> => {
        return axios({
            baseURL: `${ApiURL.OPEN_STREET_MAP_URL}/reverse`,
            method: 'GET',
            params: {
                format: 'json',
                lat,
                lon,
            },
        })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
};

export default openStreetMapService;
