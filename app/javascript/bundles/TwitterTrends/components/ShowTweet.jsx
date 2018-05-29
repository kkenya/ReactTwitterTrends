import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
              <ListItem>
                <ListItemText primary={tweet.user.name} />
              </ListItem>
              <ListItem>
                <ListItemText primary={tweet.text} />
              </ListItem>
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

