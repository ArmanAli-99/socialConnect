import {dummyapi} from '../components/util'
import PostList from '../components/PostList' ;
import Container from '@mui/material/Container' ;
import { useEffect, useState } from 'react';

const Home = ()=>{
    const[posts,setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const loadMore= async()=>{
        const res = await dummyapi.get(`/post?page=${pageNumber}`);
        const postArr = res?.data?.data??[];
        setPosts((oldPost) => [...oldPost,...postArr]);
        setPageNumber((pageNum)=>pageNum+1);
       
    }
    useEffect(()=>{
        (async()=>{
            const response = await dummyapi.get('/post');
            const data = response.data.data;
            setPosts(data);
            setPageNumber(1);
        })()
    },[])
    
    return (
        <>
            <Container fixed>
                <PostList posts={posts} loadMore={loadMore}/>
            </Container>
        </>
    )
}

export default Home;