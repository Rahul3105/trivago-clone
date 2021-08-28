import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
    width: '100%',
    margin: 'auto',
    '& > .MuiAppBar-colorPrimary': {
      backgroundColor: 'white !important',
      boxShadow: 'none',
    },
    "& .MuiTabs-flexContainer ": {
      borderBottom: '1px solid gainsboro',

    },
  },
    tab: {
      fontSize: '11px',
      fontWeight: '800',
      color: '#697379',
    },
    tabPanel: {
      '& > .MuiBox-root': {
        padding: 0,
        paddingTop: '20px',
      },
      
    },

}));

export default function MuiTabs({section, title}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {title.map((item, ind) => <Tab className={ classes.tab } label={item} {...a11yProps(ind)} />)}
        </Tabs>
      </AppBar>
      {section.map((item, ind) => {
        return  <TabPanel value={value} index={ind} className={classes.tabPanel}>
          {item}
        </TabPanel>
      })}
    </div>
  );
}