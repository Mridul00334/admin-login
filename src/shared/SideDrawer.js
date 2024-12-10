import React, { useState } from 'react';
import { Box, Typography, Drawer, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import Tree from "../Component/tree";
import Header from './Header';
import User from "../Component/User";

import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const sidebarItems = [
  {
    text: 'Registration',
    icon: <DashboardIcon />,
    subItems: ['User']
  },
  {
    text: 'Categories',
    icon: <AssignmentIcon />,
    subItems: ['Overview', 'Add business']
  }
];

function SideDrawer(props) {
 
  const customizer = useSelector((state) => state.customizer);
  const [openMenus, setOpenMenus] = useState({});

  const handleClick = (text) => {
    setOpenMenus(prev => ({
      ...prev,
      [text]: !prev[text]
    }));
  };



  return (<>
    <Header setIsLoggedIn={props.setIsLoggedIn} userData={props.userData} />
    <Box sx={{ display: 'flex' }}>
    <Router>

      {/* Drawer */}
     
<Navbar/>
      {/* Main Content */}
     
        <Box sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', height: '100vh' }}>


          <Routes>
            <Route path="/overview" element={
              <><Typography variant="h4" gutterBottom>
                Education List
              </Typography>
                <Tree />
              </>} />
            <Route path="/" element={<User />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  </>
  );
}

export default SideDrawer;
