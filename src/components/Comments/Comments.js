import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment/Comment";

const Comments = ({setCommentId}) => {
    const[comments, setComments] =useState([]);
    useEffect(()=> {
        commentsService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment} setCommentId={setCommentId}/>)}
        </div>
    )

}

export {Comments};