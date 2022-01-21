import axios from "axios";

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'e1a19e7c59b5d94d5e0ce9fe91aa3b77',
        language: 'en-US'
    }
})

export default movieDb