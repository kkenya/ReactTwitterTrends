import React, { Component } from 'react';
import List from '@material-ui/core/List';

import ShowTweet from './ShowTweet';

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
    // todo remove
    console.log(this.state.tweets);

    return (
      <List component="nav">
        {tweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              {/*<ShowTweet tweet={tweet} />*/}
            </div>
          );
        })}
      </List>
    );
  }
}

export default ShowTweets;

