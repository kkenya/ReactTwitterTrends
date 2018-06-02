import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ShowHeader from './ShowHeader';
import ShowTrends from './ShowTrends';
import ShowTrend from './ShowTrend';

const styles = theme => ({
  root: {
    // flexGrow: 1, // フレックスアイテムの伸び率
    marginBottom: 5,
  },
  trends: {
    marginTop: theme.spacing.unit * 3,
  },
});

const TwitterTrends = ({ trends, classes }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ShowHeader />
      <Grid container justify="center" className={classes.root} spacing={16}>
        <Grid item xs={10} className={classes.trends}>
          <ShowTrends data={trends} />
        </Grid>
        <Grid item xs={10}>
          <ShowTrend
            trend={trends[0]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// TwitterTrends.propTypes = {
//   trends: PropTypes.array.isRequired,
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(TwitterTrends);
