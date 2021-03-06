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

const App = ({ trends }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ShowHeader />
      <div className="trendsTableBody">
        <Grid container justify="center" spacing={16}>
          <Grid item xs={10}>
            <TrendsTable data={trends} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
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
        <Route path="/" exact render={() => <App trends={trends} />} />
        <Route path="/twitter_trends" exact render={() => <App trends={trends} />} />
        <Route path="/twitter_trends/:id/tweets" component={ShowTrend} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

