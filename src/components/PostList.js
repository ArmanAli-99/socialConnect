import PostCard from "./PostCard";
import  {Button, Stack} from '@mui/material';

const PostList = (props) => {
    return (
            <Stack spacing={3} mt={3} mb={2} alignItems='center' >
                {props.posts.map((singlePost, idx) => {
                    return (
                        <PostCard key={idx} singlePost={singlePost}/>
                    )
                })}
                <Button variant="text" onClick={props.loadMore}>LOAD MORE...</Button>
            </Stack>
    )
}

export default PostList