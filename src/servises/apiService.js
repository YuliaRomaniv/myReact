import axios from "axios";
import {baseURL} from "../constanse/urls";

const apiService=axios.create({baseURL});

export {
    apiService
}