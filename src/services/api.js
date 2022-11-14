import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28916923-d414eade46dc2c6542ccb3cb8';
const IMAGES_PER_PAGE = 12;

export const getImages = async (query, page) => {
    const config = {
        params: {
            q: query,
            page: page,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: IMAGES_PER_PAGE,
        },
    };
    const response = await axios.get(BASE_URL, config);
    return response.data;
};
