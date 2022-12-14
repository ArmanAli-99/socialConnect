import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar } from '@mui/material';
import {IconButton, Typography, Stack, Chip} from '@mui/material';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {likePost, dislikePost} from '../slice'

export default function PostCard(props) {
  const dispatch = useDispatch();
  const isLiked = useSelector(state => state.likedPosts.some(e => e===props.singlePost?.id));
  
  const likeDislikePost = () =>{
    if(isLiked) {
      dispatch(dislikePost(props.singlePost.id))
    }else{
      dispatch(likePost(props.singlePost.id));
    }
  }
  return (
          <Card sx={{ maxWidth: 520 }}>
          <CardHeader
            avatar={
              <Link to={`/Profile/${props?.singlePost?.owner?.id}`}> 
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src = {props.singlePost?.owner?.picture}/>
              </Link>
            }
            title={<Link to={`/Profile/${props?.singlePost?.owner?.id}`}>
              {props.singlePost?.owner?.firstName} {props?.singlePost?.owner?.lastName}
              </Link>} 
            subheader={props?.singlePost?.publishDate}
          />
          <CardMedia
            component="img"
            image={props.singlePost?.image}
            alt="Paella dish"
            onDoubleClick = {likeDislikePost}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props?.singlePost?.text};
            </Typography>
            <Stack direction="row" spacing={1} mt={1}>
              {props.singlePost.tags.map((singleTag,idx)=>{
                return(
                    <Chip key={idx} label={`#${singleTag}`} size="small" variant="outlined"  style={{textTransform: 'capitalize'}}  />
                )
              })}
            </Stack>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={likeDislikePost}>
              <FavoriteIcon style={{color: isLiked ? "red": "inherit"}} />
            </IconButton>
            <Typography variant="caption" display="block" gutterBottom>
            {props?.singlePost?.likes + (isLiked? 1:0)} Likes
            </Typography>
            <Link to={`/Post/${props.singlePost?.id}`} style={{marginLeft:'auto'}}> 
              <IconButton >
                <CommentIcon/>
              </IconButton>
            </Link>
          </CardActions>
        </Card>
   
  );
}
