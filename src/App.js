import './App.css';
import React,{useState,useEffect} from 'react';
import Login from "./Component/Login";
import { ThemeSettings } from './theme/Theme';
import SideDrawer from './shared/SideDrawer';
import { ThemeProvider, CssBaseline } from '@mui/material';
function App() {
  const theme = ThemeSettings();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if user is logged in from localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [userData, setUserData] = useState(() => {
    // Check if user is logged in from localStorae
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? storedUserData : null;
  });


  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem("userData",userData)
  }, [isLoggedIn]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    {!isLoggedIn? <Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>:<SideDrawer
    setIsLoggedIn={setIsLoggedIn} userData={userData}
   />}
     </ThemeProvider>
  );
}

export default App;
