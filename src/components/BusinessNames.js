import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    flexWrap: 'wrap',
  },
  display1: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginTop: '10px',
  },
};

const BusinessNames = ({ businessNames, classes }) => {
  return (
    <div className={classes.root}>
      {businessNames.map((business, index) => {
        return (
          <Typography className={classes.display1} color='inherit' variant='display1' key={index}>
            {business}
          </Typography>
        );
      })}
    </div>
  );
};

BusinessNames.propTypes = {
  businessNames: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(BusinessNames);
