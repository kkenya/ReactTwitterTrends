import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({});

class ShowTrend extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      trend: this.props.trend,
    });
  }

  render() {
    const { trend, tweets } = this.props;

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
        </Grid>
      </Card>
    );
  }
}

ShowTrend.propTypes = {
  trend: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowTrend);