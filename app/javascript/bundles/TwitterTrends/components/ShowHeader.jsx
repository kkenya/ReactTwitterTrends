import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

const ShowHeader = () => {
  return (
    <div className="pageHeader">
      <AppBar position="static">
        <Toolbar className="headerToolbar">
          <Typography variant="title" color="inherit">
            Twitter Trends
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ShowHeader;
