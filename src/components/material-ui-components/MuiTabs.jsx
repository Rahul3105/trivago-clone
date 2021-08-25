import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//normal import{}";
import {TopCities} from '../home-page-carousel component/TopCities'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        width: '80%',
        margin: 'auto',
        '& > .MuiAppBar-colorPrimary': {
            backgroundColor: 'white !important',
            boxShadow: 'none',
        },
  },
  tabPanel: {
    '& > .MuiBox-root': {
      padding: 0,
      paddingTop: '20px',
    },
  }
}));

export default function MuiTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label='Top Cities' {...a11yProps(0)} />
          <Tab label="Top Destinations" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <TopCities/>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        Item Two
      </TabPanel>
    </div>
  );
}