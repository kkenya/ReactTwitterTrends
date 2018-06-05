import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import ShowHeader from './ShowHeader';
import TrendsTable from './TrendsTable';
import ShowTrend from './ShowTrend';

const styles = theme => ({
  root: {
    // todo 不要なら削除
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
          <TrendsTable data={trends} />
        </Grid>
        <Grid item xs={10}>
          {/*todo remove トレンドの表示をテストする*/}
          <ShowTrend
            trend={trends[0]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

TwitterTrends.propTypes = {
  trends: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(TwitterTrends);

// todo remove
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact  component={TwitterTrends} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
