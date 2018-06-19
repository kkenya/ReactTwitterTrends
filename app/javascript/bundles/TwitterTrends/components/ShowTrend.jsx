import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ShowHeader from './ShowHeader';
import TweetsList from './TweetsList';

const ShowTrend = ({ match, location }) => {
  const trend = location.state.trend;
  const tweet_volume = trend.tweet_volume ?
    <Typography component="h2" color="textSecondary">
      Tweet volume {trend.tweet_volume}
    </Typography>
    : null;

  // todo タイトル大きくする
  // todo 画像を取得し並べる
  // todo スクロールView画面サイズに合わせる
  return (
    <div>
      <ShowHeader />
      <Grid container justify="center" spacing={8}>
        <Grid item xs={10}>
          <Grid container justify="center" direction="row" className="showTrend">
            <Grid item xs={5}> <Typography gutterBottom variant="headline" component="h1">
              {trend.name}
            </Typography>
              {tweet_volume}
            </Grid>
            <Grid item xs={5} className="tweetList">
              <TweetsList trend={trend} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

ShowTrend.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      trend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        tweet_volume: PropTypes.number,
      }),
    }),
  }),
};

export default ShowTrend;