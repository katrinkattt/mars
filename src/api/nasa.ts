import axios from 'axios';
import { MarsPhoto } from '@/types/api';

const API_KEY = 'hkrLZcTsxQZT9GYZgsD0K3Rp70GPPNBqdQXMewtq';
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1';
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
export const fetchMarsPhotos = async (
  date: string,
  camera?: string,
): Promise<MarsPhoto[]> => {
  try {
    const params = {
      sol: 1000,
      api_key: API_KEY,
      earth_date: date,
      ...(camera && { camera }),
    };

    const response = await axios.get(BASE_URL + '/rovers/curiosity/photos', { params });
    return response.data.photos;
  } catch (error) {
    //@ts-ignore
    console.error('Error fetching Mars photos:', error?.response?.data?.error?.message);
    throw error;
  }
};