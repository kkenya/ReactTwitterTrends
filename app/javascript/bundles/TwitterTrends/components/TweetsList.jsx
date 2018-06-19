import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactOnRails from 'react-on-rails';
import List from '@material-ui/core/List';

import ShowTweet from './ShowTweet';

class TweetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const { trend } = this.props;
    // Build form data and format it in way Rails API expects
    const formData = new FormData();
    formData.append('tweet[trend_name]', trend.name);

    // Include CSRF token for form_authenticity validation
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      'X-CSRF-Token': ReactOnRails.authenticityToken()
    };

    const config = {
      body: formData,
      headers: headers,
      method: 'POST',
      credentials: 'same-origin'
    };

    axios.post('/tweets', formData, config)
      .then((response) => {
        console.log(response);
        this.setState({
          tweets: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <div>
        </div>
      );
    }
    const { tweets } = this.state;

    return (
      // todo タイトル大きくする
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

// todo modify error
// TweetsList.PropTypes = {
//   match: PropTypes.object.isRequired(),
// };

export default TweetsList;

