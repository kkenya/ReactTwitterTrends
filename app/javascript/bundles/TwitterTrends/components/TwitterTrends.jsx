import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import ShowHeader from './ShowHeader';
import TrendsTable from './TrendsTable';
import ShowTrend from './ShowTrend';

// todo cssファイルに分離
const styles = theme => ({
  root: {
    flexGrow: 1, // フレックスアイテムの伸び率
    marginBottom: 5,
  },
  trends: {
    marginTop: theme.spacing.unit * 3,
  },
});

const TwitterTrends = ({ trends }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ShowHeader />
      <Grid container justify="center" className="root" spacing={16}>
        <Grid item xs={10} className="trends">
          <TrendsTable data={trends} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

TwitterTrends.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tweet_volume: PropTypes.number,
    }),
  ),
};

const Router = ({ trends }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <TwitterTrends trends={trends} />} />
        <Route path="/:id" render={({match}) => <ShowTrend trends={trends} match={match}/>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

