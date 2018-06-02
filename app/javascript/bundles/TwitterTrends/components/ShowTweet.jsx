import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// todo purecomponent
class ShowTweet extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tweet: this.props.tweet,
    });
  }
  // formatDate = (created) => {
  //   created.split(' ');
  // };

  render() {
    const { tweet } = this.state;
    // todo remove
    console.log(tweet);

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
  }
}

// ShowTweet.propTypes = {
//   tweet: PropTypes.object.isRequired(),
// };

export default ShowTweet;
