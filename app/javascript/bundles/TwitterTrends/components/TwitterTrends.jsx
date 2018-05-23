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
    flexGrow: 1, // todo
  },
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
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
    const items = [];
    trends.map((trend) => {
      items.push(<li key={trend}>{trend}</li>);
    });

    return (
      <ul>
        {items}
      </ul>
    );
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const trendsList = this.renderTrends(this.state.trends);

    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Twitter Trends
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {trendsList}
          </Grid>
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
