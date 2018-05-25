import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});

class ShowTrend extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: this.props.data,
    });
  }

  render() {
    const {data} = this.props;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {data.name}
          </Typography>
          <Typography color="textSecondary">
            {data.tweet_volume}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

ShowTrend.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowTrend);