import React from 'react';
import './index.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BG from './static/bg_home.png';
import MyMap from './Map.js';
import { positions } from '@material-ui/system';

const styles = theme => ({
  bg: {
    height: '100vh',
    width: '100%',
    backgroundPposition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'absolute'
  }
});

const BackgroundImagePage = ({ classes, children }) => {
  return <MyMap className={classes.bg}> </MyMap>;
};

export default withStyles(styles)(BackgroundImagePage);
