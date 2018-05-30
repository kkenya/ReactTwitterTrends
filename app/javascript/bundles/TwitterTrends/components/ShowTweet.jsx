import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  tableCell: {
    textAlign: 'right',
  },
});

const ShowTweet = ({ tweet }) => {
  // formatDate = (created) => {
  //   created.split(' ');
  // };

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={tweet.user.name}
              src={tweet.user.profile_image_url_https}
            />
          }
          title={`${tweet.user.name} (@${tweet.user.screen_name})`}
          // title={
          //   <div>
          //     <Typography variant="title" gutterBottom>
          //       {tweet.user.name}
          //     </Typography>
          //     <Typography variant="headline" gutterBottom>
          //       {`@${tweet.user.screen_name}`}
          //     </Typography>
          //   </div>
          // }
          subheader={tweet.created_at}
        />
        <CardContent>
          <Typography component="p">
            {tweet.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

// ShowTweet.propTypes = {
//   tweet: PropTypes.object.isRequired(),
// };

export default ShowTweet;
