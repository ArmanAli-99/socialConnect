import React from 'react';
import {Card, LinearProgress} from '@mui/material'

const PostDetail=(props)=>{
    return(
        <> 
            {props.detail !== undefined ? (
                <Card style={{ maxWidth: 520 }}>
                    <img src={props?.detail?.image} alt="Post" style={{width:'100%', borderRadius:'5px'} }/> 
                </Card>
            ) :(<LinearProgress/>)}
            
        </>
    )
}
export default PostDetail;