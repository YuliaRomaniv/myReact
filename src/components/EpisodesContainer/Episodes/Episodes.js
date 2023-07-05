import {useDispatch, useSelector} from "react-redux";
import  {useEffect} from 'react';
import {episodesActions} from "../../../redux";
import {episodeService} from "../../../services";
import {useSearchParams} from "react-router-dom";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const dispatch=useDispatch();
    const {episodes}=useSelector(state=>state.episodes);
    const [query, setQuery] = useSearchParams({page:'1'})
    useEffect(()=>{
        episodeService.getAll(query.get('page')).then(({data})=>{dispatch(episodesActions.set(data))
        setQuery(prev => ({...prev,  page:prev.get('page')}))
        })
    }, [query, dispatch, setQuery])
    return (
        <div className={css.Episodes}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {
    Episodes

};