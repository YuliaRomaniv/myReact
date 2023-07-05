import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {Comments} from "../../components/Comments/Comments";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    const [commentId, setCommentId]= useState(null)
    return (
        <div className={css.CommentsPage}>
            <Comments setCommentId={setCommentId}/>
            <Outlet context={{commentId}}/>
        </div>
    );
};

export default CommentsPage;