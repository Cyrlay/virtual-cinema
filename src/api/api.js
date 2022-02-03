import axios from "axios";

export const key = '855e9e9c' // key from omdbapi website.

export default axios.create({
    baseURL:`http://www.omdbapi.com/`
})