import React from 'react';
import {useOutletContext} from "react-router-dom";

const PostDetail = ({post}) => {
    const {id, title}=post;
   const {commentId} = useOutletContext()
    return (
        <div>
            <h3>CommentId: {commentId}</h3>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {PostDetail};