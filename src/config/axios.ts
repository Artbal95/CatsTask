import axios from "axios"

const Axios = axios.create({
    baseURL: "https://api.thecatapi.com/v1"
})

export default Axios