import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Profile  from './pages/Profile';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import {Routes, Route} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';


function App() {
  const theme = useSelector(state => state.theme);
  const themeObject = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <>    
      <ThemeProvider theme={themeObject}>
        <CssBaseline>
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile/:id' element={<Profile/>}/>
            <Route path='/Post/:id' element={<Detail/>}/>
          </Routes>
          <Footer/>
        </CssBaseline>
      </ThemeProvider>
    </>    
  );
}

export default App;
