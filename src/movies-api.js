import axios from "axios";



const BASE_URL = 'https://api.themoviedb.org/3/'

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjVkZGI3YjM0OWEwYTE0MDUwYTU1ZGFhMTNlMWVhNCIsInN1YiI6IjY1MDA1OTM3NTU0NWNhMDBlMWFmYzE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bVkymFIf18xjoa5zzCMSl-g7c4wZxWVQ_7YATpHv88'
    }
};


export const fetchMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/movie/day?language=en-US`, options)
    return response;
};

export const fetchMoviesByQuery = async (query) => {
    const response = await axios.get(`${BASE_URL}search/movie?query=${query}&language=en-US`, options);
    return response
}

export const fetchOneMovie = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}`, options);
    return response;
}

export const fetchCredits = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits?language=en-US`, options);
    return response
}

export const fetchReviews = async (id) => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews?language=en-US`, options);
    return response
}