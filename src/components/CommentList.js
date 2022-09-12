import React from 'react';
import Comment from './Comment';


const CommentList = (props) => {
    return (
       <>
            {props?.commentsList?.map((singleComment,idx)=>{
                return(
                    <Comment singleComment={singleComment} key={idx}/>
                )
            })}
       </>
    )
}
export default CommentList;