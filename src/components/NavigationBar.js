import {AppBar, Toolbar, Typography, Container} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const NaviagationBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/'>
            <AdbIcon sx={{ display: { xs: 'flex'}, mr: 1 }} style={{color:'white'}}/>
          </Link>
          <Link to='/'>
            <Typography
              variant="h5"
              noWrap             
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 800,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              SocialApp
            </Typography>
          </Link>
          <ThemeSwitcher/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NaviagationBar;
