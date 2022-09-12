import React from 'react';
import PostDetail from '../components/PostDetail'
import CommentList from '../components/CommentList';
import { dummyapi } from '../components/util';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container,Stack, Typography } from '@mui/material';
import {useEffect,useState} from 'react';

const Detail = () =>{
    const {id} = useParams();
    const [detail,setDetail] = useState();
    const [comments, setComments] = useState();

    useEffect(()=>{
        (async()=>{
            const response = await dummyapi.get(`/post/${id}`);
            const data = response?.data;
            setDetail(data);
        })();

        (async()=>{
            const response = await dummyapi.get(`/post/${id}/comment`);
            const data = response?.data?.data;
           setComments(data);
        })()
    },[id])

    return(
        <>
            <Container style = {{maxWidth:'520px', textAlign:'center'}} >
                <Stack mt={4} gap={4} >
                    <PostDetail detail={detail}/>
                    <Typography variant='h6'>{detail?.text}
                        <Typography variant='caption'>
                            <Link to={`/profile/${detail?.owner?.id}`}>{" "}-{" "}{detail?.owner?.firstName} {detail?.owner?.lastName}                             </Link>
                        </Typography>
                    </Typography>
                    <CommentList commentsList = {comments}/>
                </Stack>
            </Container>
        </>
    )
}
export default Detail;