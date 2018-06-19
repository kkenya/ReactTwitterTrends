import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';

class ShowTweet extends Component {
  constructor(props) {
    super(props);
  }

  renderMedia = () => {
    const extendedEntities = this.props.tweet.extended_entities;
    const list = [];

    if (extendedEntities) {
      for (const i in extendedEntities.media) {
        console.log(extendedEntities.media[i].media_url_https);
        list.push(
          <img
            key={i}
            width="80%"
            src={extendedEntities.media[i].media_url_https}/>
        );
      }
    }

    return list;
  };

  // renderHashTags = () => {
  //   const hashTags = this.props.tweet.entities.hashtags;
  //   const list = [];
  //
  //   if (hashTags) {
  //     for (const i in hashTags) {
  //       list.push(<div key={i}>#{hashTags[i].text}</div>);
  //     }
  //   }
  //
  //   return list;
  // };

  render() {
    const { tweet } = this.props;
    const renderMedia = this.renderMedia();
    // const renderHashTags = this.renderHashTags();

    return (
      <div className="tweetContainer">
        <Card>
          <Grid container>
            <Grid item xs={2} className="tweetAvatar">
              <Avatar
                alt={tweet.user.name}
                src={tweet.user.profile_image_url_https}
                className="tweetAvatar"
              />
            </Grid>
            <Grid item xs={10}>
              <CardContent>
                <Typography color="primary">
                  {tweet.user.name}
                </Typography>
                <Typography color="textSecondary">
                  @{tweet.user.screen_name}
                </Typography>
                <Typography component="p" align="left" className="tweetText">
                  {tweet.text}
                </Typography>
                <div>
                  {renderMedia}
                </div>
                <div>
                  {/* todo textのハッシュタグを削除する*/}
                  {/*{renderHashTags}*/}
                </div>
                <Typography color="textSecondary">
                  {tweet.created_at}
                </Typography>
                <div>
                  <RepeatIcon className="tweetIcons" />
                  {tweet.retweet_count}
                  <FavoriteIcon className="tweetIcons" />
                  {tweet.favorite_count}
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  };
}

ShowTweet.propTypes = {
  tweet: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      screen_name: PropTypes.string.isRequired,
      profile_image_url_https: PropTypes.string.isRequired,
    }),
    retweet_count: PropTypes.number.isRequired,
    favorite_count: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }),
};

export default ShowTweet;
