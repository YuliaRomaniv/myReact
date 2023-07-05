import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const  todosService = {
    getAll:()=>apiService.get(urls.todos)
}
export {
    todosService
}