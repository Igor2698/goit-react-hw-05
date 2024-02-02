import axios from "axios";


const myApiKey = "_AiRSIY1NkArfviHXnExPDwLlwLW0JfB7M8tMnbOXVM";
const BASE_URL = 'https://api.unsplash.com/'


export const fetchImages = async (image, page) => {
    const response = await axios.get(`${BASE_URL}search/photos?client_id=${myApiKey}&query=${image}&per_page=20&orientation=landscape&page=${page}`);
    return response.data;
};