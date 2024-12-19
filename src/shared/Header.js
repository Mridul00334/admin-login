import React from 'react';
import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleSidebar,
  toggleMobileSidebar,
  setDarkMode,
} from '../store/customizer/CustomizerSlice';
import logo from '../assets/logo.png';
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons';
import Profile from "./Profile";

// components


const Header = (props) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  // drawer
  const customizer = useSelector((state) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="#F7F7F7" style={{borderBottom:"inset",zIndex:"20000"}}>
      <ToolbarStyled>
   
      <Box px={3}>
            <img src={logo} alt="logo" />
          </Box>
        
       
       
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile setIsLoggedIn={props.setIsLoggedIn} userData={props.userData} />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
  toggleSidebar: PropTypes.func,
};

export default Header;
