import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  IconButton,
  Avatar,
  Badge
} from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#16181c',
        minHeight: 60,
        borderRadius: 0 // Remove corner rounding
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Section */}
        <Box component="img" src='src/assets/Logo.svg'/>

        {/* Navigation Tabs Section */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#6ec207',
              height: 3,
              borderRadius: '4px'
            },
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '100px'
          }}
        >
          <Tab
            icon={<HomeIcon />}
            component={Link}
            to="/"
            sx={{
              color: activeTab === 0 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<SearchIcon />}
            component={Link}
            to="/search"
            sx={{
              color: activeTab === 1 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<PersonIcon />}
            sx={{
              color: activeTab === 2 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<EmailIcon />}
            sx={{
              color: activeTab === 3 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
          <Tab
            icon={<NotificationsIcon />}
            sx={{
              color: activeTab === 4 ? '#fff' : '#aaa',
              '&.Mui-selected': { color: '#6ec207' },
              minWidth: 100
            }}
          />
        </Tabs>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Typography variant="body1" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
              Diogo Forlan
            </Typography>
            <Avatar alt="Diogo Forlan" src="/avatar.jpg" />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
