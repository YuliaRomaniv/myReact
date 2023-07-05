import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment, setCommentId}) => {
    const {id, postId, name} = comment;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`posts/${postId}`);
        setCommentId(id);
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <button onClick={handleClick}>Get Post</button>
        </div>
    );
};

export {Comment};