import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    // flexGrow: 1, // フレックスアイテムの伸び率
    marginBottom: 5,
  },
  item: {
    margin: 10,
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class TwitterTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: this.props.trends,
      spacing: '16',
    };
    console.log(this.props.trends);
  }

  renderTrends = (trends) => {
    const { classes } = this.props;
    const items = [];

    trends.map((trend) => {
      items.push(
        <Grid item xs={2} key={trend.name} className={classes.item}>
          <Card>
            <CardContent>
              <Typography>
                {trend.name}
              </Typography>
              <Typography>
                {/*the last 24 hours is also returned for many trends if this is available.*/}
                {trend.tweet_volume}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });

    return (
      <Grid container className={classes.trends} justify="center" spacing={16}>
        {items}
      </Grid>
    );
  };

  render() {
    const { classes } = this.props;
    const trendsList = this.renderTrends(this.state.trends);

    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  Twitter Trends
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {trendsList}
        </Grid>
      </React.Fragment>
    );
  }
}

TwitterTrends.propTypes = {
  trends: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TwitterTrends);
