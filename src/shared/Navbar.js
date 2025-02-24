import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Collapse, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

function Navbar() {
  const navigate = useNavigate();
  const customizer = useSelector((state) => state.customizer);
  const [openMenus, setOpenMenus] = useState({});

  const handleClick = (text) => {
    setOpenMenus((prev) => ({
      ...prev,
      [text]: !prev[text]
    }));
  };

  function setRoute(e, val) {
    e.preventDefault();
    console.log(val);
    if (val === "User") {
      navigate('/');
    } else if (val === "Overview") {
      navigate('/overview');
    }
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open
      PaperProps={{
        sx: {
          width: customizer.SidebarWidth, // Customizable width
          backgroundColor: customizer.activeMode === 'dark' ? customizer.darkBackground900 : customizer.activeSidebarBg,
          color: customizer.activeSidebarBg === '#ffffff' ? '' : 'black',
          border: '0 !important',
          boxShadow: (theme) => theme.shadows[8],
          height: '100%', // Ensure it spans full height
          position: 'relative', // Ensure correct stacking context
        },
      }}
    >
      <Box sx={{
        backgroundColor: customizer.activeMode === 'dark' ? customizer.darkBackground900 : customizer.activeSidebarBg,
        height: '100%',
        paddingTop: '20px' // Adding top padding for spacing
      }}>
        <List sx={{ padding: '0' }}>
          {sidebarItems.map((item) => (
            <React.Fragment key={item.text}>
              <ListItem
                button
                onClick={() => handleClick(item.text)}
                sx={{
                  padding: '8px 16px',
                  marginBottom: '8px',
                  '&:hover': {
                    backgroundColor: customizer.activeMode === 'dark' ? '#333' : '#f0f0f0',
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: '30px' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {openMenus[item.text] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      key={subItem}
                      sx={{
                        paddingLeft: '32px',
                        marginBottom: '4px',
                        '&:hover': {
                          backgroundColor: customizer.activeMode === 'dark' ? '#444' : '#f5f5f5',
                        }
                      }}
                    >
                      <ListItemText
                        primary={subItem}
                        onClick={(e) => setRoute(e, subItem)}
                        sx={{ fontSize: '14px' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Navbar;
