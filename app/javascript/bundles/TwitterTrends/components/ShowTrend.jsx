import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ShowTweets from './ShowTweets';

class ShowTrend extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      trend: this.props.trend,
    });
  }

  render() {
    const { trend } = this.props;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {trend.name}
          </Typography>
          <Typography color="textSecondary">
            {trend.tweet_volume}
          </Typography>
        </CardContent>
        <Grid item xs={10} key={trend.id}>
          <ShowTweets />
        </Grid>
      </Card>
    );
  }
}

// ShowTrend.propTypes = {
//   trend: PropTypes.object.isRequired,
// };

export default ShowTrend;