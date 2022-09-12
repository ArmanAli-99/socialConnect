import ProfileDetail from '../components/ProfileDetail'
import PostList from '../components/PostList'
import { dummyapi } from '../components/util';
import {useParams} from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const params = useParams();
    const [posts,setposts] = useState([])
    const [pageNumber, setPageNumber] = useState([]);
    const [detail, setDetail] = useState({});
    
    useEffect(()=>{
        (async()=>{
            const response = await dummyapi.get(`/user/${params.id}`);
            const data = response.data;
            setDetail(data);
        })();

        (async()=>{
            const response = await dummyapi.get(`/user/${params.id}/post`);
            const data = response.data.data;
            setposts(data);
            setPageNumber(1);
        })()
    },[params.id])

    const loadMore = async()=>{
        const response = await dummyapi.get(`/user/${params.id}/post?page=${pageNumber}`)
        const postArr = response?.data?.data??[]
        setposts(oldPost=>[...oldPost,...postArr]) 
        setPageNumber(page => page+1);
    }   

    return (
        <Container  sx={{ maxWidth: 520 }}>
            <ProfileDetail detail={detail}/>
            <hr/>
            <Typography variant='h5' style={{textAlign:'center'}}>Posts Feed</Typography>
            <PostList posts={posts} loadMore={loadMore}/>
        </Container> 
        
    )
}
export default Profile;