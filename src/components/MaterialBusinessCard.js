import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const styles = {
  card: {
    maxWidth: 345,
    height: '75%',
    position: 'absolute',
    right: '5%',
    bottom: '10%',
    overflow: 'auto',
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '75%', // 4:3
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
    margin: 'auto',
  },
  description: {
    fontWeight: 'bold',
    marginTop: '15px',
  },
  businessName: {
    fontWeight: 'bold',
    padding: '15px',
  },
  businessURL: {
    textDecoration: 'none',
    color: 'black',
  },
  UrlWrapper: {
    paddingTop: '15px',
  },
  // cardActions: {
  //   position: 'absolute',
  //   bottom: 0,
  // },
  alumDetails: {
    fontWeight: 500,
  },
  alumClass: {
    fontWeight: 500,
    padding: '10px',
  },
};

const MaterialBusinessCard = ({ classes, business, closeCard }) => {
  return (
    <div id='card-wrapper'>
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          {/* <CardMedia
            className={classes.media}
            title={business.name}
          /> */}
          <CardContent>
            <Typography className={classes.alumDetails} variant='subheading'>
              {business.alumName ? `${business.alumName}, ${business.alumDegree}` : null}
            </Typography>
            <Typography className={classes.alumClass} variant='subheading'>
              {business.alumClass ? 'Class of ' + business.alumClass : null}
            </Typography>
            <img src={business.Logo_Url} className={classes.logo} />
            {/* <Typography className={classes.businessName} variant="display1">
              {business.name}
            </Typography> */}
            <Typography className={classes.UrlWrapper} variant='subheading'>
              <a target='_blank' className={classes.businessURL} href={business.url}>
                {business.url}
              </a>
            </Typography>
            <Typography className={classes.description} variant='subheading'>
              {business.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            {
              business.alumName
                ? <Button size='small' color='primary'>
                  { business.alumName ? `Learn more about ${business.alumName}` : null}
                </Button>
                : null
            }
            <Button onClick={closeCard} size='small' color='primary'>
            Close
            </Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>
  );
};

MaterialBusinessCard.propTypes = {
  business: PropTypes.object,
  classes: PropTypes.object.isRequired,
  closeCard: PropTypes.func,
};

export default withStyles(styles)(MaterialBusinessCard);
