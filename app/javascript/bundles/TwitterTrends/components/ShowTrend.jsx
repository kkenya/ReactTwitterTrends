import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TweetsList from './TweetsList';

class ShowTrend extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      trend: this.props.trend,
    });
  }

  render() {
    const { trend } = this.props;
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
  trend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tweet_volume: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })
};

export default ShowTrend;