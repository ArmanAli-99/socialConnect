import React from 'react';
import { Container, Stack, Avatar, Typography } from '@mui/material';

const ProfileDetail = (props) =>{
   
    return(
        <Container  sx={{ maxWidth: 520 }}>
            <Stack direction="row" mt={4} mb={4} spacing={5}>
                <Avatar alt="Remy Sharp" src={props?.detail?.picture} sx={{ width: "12rem", height: "12rem" }} />
                <Stack ml={4} spacing={1}>
                    <Typography variant='h3'>{props?.detail?.firstName} {props?.detail?.lastName}</Typography>
                    <Typography variant='h4'>{props?.detail?.location?.city}, {props?.detail?.location?.country}</Typography>
                    <Typography variant='h6'>{props?.detail?.email}</Typography>
                    <Typography variant='p'> Joined Since: {new Date(props?.detail?.registerDate).getUTCFullYear()}</Typography>                   
                </Stack>
            </Stack>
        </Container>
    )
}

export default ProfileDetail;