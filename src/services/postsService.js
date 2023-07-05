import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getById:(id)=>apiService.get(urls.posts.byId(id))
}
export {
    postsService
}