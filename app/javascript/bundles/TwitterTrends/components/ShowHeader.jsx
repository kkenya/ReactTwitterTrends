import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const ShowHeader = (props) => {
  const {classes} = props;

  return(
      <div className={classes.root}>
          <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Twitter Trends
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
};

ShowHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowHeader);
