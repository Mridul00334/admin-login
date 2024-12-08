import './App.css';
import React,{useState} from 'react';
import Login from "./Component/Login";
import { ThemeSettings } from './theme/Theme';
import SideDrawer from './shared/SideDrawer';
import { ThemeProvider, CssBaseline } from '@mui/material';
function App() {
  const theme = ThemeSettings();
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    {!isLoggedIn? <Login setIsLoggedIn={setIsLoggedIn}/>:<SideDrawer
   />}
     </ThemeProvider>
  );
}

export default App;
