import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TweetsList from './TweetsList';

// todo pure component
class ShowTrend extends Component {
  render() {
    const { trends, match } = this.props;
    const trend = trends[match.params.id];
    // todo remove
    console.log(trend);
    const tweet_volume = trend.tweet_volume ?
      <Typography color="textSecondary">
        Tweet volume {trend.tweet_volume}
      </Typography>
      : null;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {trend.name}
          </Typography>
          {tweet_volume}
        </CardContent>
        <Grid item xs={10} key={trend.id}>
          <TweetsList />
        </Grid>
      </Card>
    );
  }
}

ShowTrend.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      tweet_volume: PropTypes.number,
    }),
  ),
  match: PropTypes.object.isRequired,
};

export default ShowTrend;