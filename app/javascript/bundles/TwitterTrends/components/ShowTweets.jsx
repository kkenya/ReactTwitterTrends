import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ShowTweet from './ShowTweet';

const styles = theme => ({});

class ShowTweets extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tweets: [],
    });
  }

  componentDidMount() {
    const config = {
      headers: {
        'Accept': 'application/json',
      },
    };

    fetch('/tweet', config)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new error('network response was not ok');
      })
      .then(json => {
        console.log(json);
        this.setState({
          tweets: json,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { tweets } = this.state;

    return (
      <List component="nav">
        {tweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              <ShowTweet tweet={tweet}/>
            </div>
          );
        })}
      </List>
    );
  }
}

ShowTweets.propTypes = {
};

export default withStyles(styles)(ShowTweets);

