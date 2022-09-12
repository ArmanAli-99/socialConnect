import React from 'react';
import {Paper, Typography,Stack,Avatar} from '@mui/material'
import {Link} from 'react-router-dom'
import moment from 'moment';

const Comment = (props)=>{
    return(
        <>
            <Paper>
                <Stack alignItems="flex-start" my={1} mx={4}>
                    <Stack  direction='row' gap={2}>
                        <Link to={`/profile/${props.singleComment.owner.id}`}>
                            <Avatar src={props?.singleComment?.owner?.picture} alt='user pic'/>
                        </Link>
                        <Stack alignItems="flex-start">
                            <Link to={`/profile/${props.singleComment.owner.id}`}>
                                <Typography variant='body1' >{`${props?.singleComment?.owner?.firstName} ${props?.singleComment?.owner?.lastName}`} </Typography>
                            </Link>
                            <Typography variant='caption'>{moment(props?.singleComment.publishDate).fromNow()}</Typography>
                        </Stack>
                    </Stack>
                    <Typography variant='h6' >{props?.singleComment?.message} </Typography>
                </Stack>
            </Paper>
        </>
    )
}
export default Comment