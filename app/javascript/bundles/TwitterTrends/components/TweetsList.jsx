import React, { Component } from 'react';
import List from '@material-ui/core/List';

import ShowTweet from './ShowTweet';

class TweetsList extends Component {
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
        this.setState({
          tweets: json,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { tweets } = this.state;

    return (
      // todo タイトル大きくする
      // todo tweet_volumeの表示
      // todo 画像を取得し並べる
      // todo スクロールView画面サイズに合わせる
      <List component="nav">
        {tweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              <ShowTweet tweet={tweet} />
            </div>
          );
        })}
      </List>
    );
  }
}

export default TweetsList;

