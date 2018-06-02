import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const ShowTweet = ({ tweet }) => {
  // formatDate = (created) => {
  //   created.split(' ');
  // };

  return (
    <div className="tweetContainer">
      <Card>
        <Grid container>
          <Grid item xs={1} className="tweetAvatar">
            <Avatar
              alt={tweet.user.name}
              src={tweet.user.profile_image_url_https}
              className="tweetAvatar"
            />
          </Grid>
          <Grid item xs={11} className="tweetContent">
            <CardContent>
              <Typography color="primary">
                {tweet.user.name}
              </Typography>
              <Typography color="textSecondary">
                {tweet.user.screen_name}
              </Typography>
              <Typography color="textSecondary">
                {tweet.created_at}
              </Typography>
              <Typography component="p" align="left">
                {tweet.text}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

ShowTweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      screen_name: PropTypes.string.isRequired,
      profile_image_url_https: PropTypes.string.isRequired,
    }),
    created_at: PropTypes.string.isRequired,
  }),
};

export default ShowTweet;
