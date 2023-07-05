import axios from "axios";
import {owuBaseURL} from "../constants/urls";

 const owuApiService=axios.create({baseURL:owuBaseURL});

 export {
     owuApiService
 }