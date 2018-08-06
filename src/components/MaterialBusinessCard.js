import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

const styles = {
  card: {
    maxWidth: 345,
    height: '75%',
    position: 'absolute',
    right: '5%',
    bottom: '10%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    padding: '15px',
    textDecoration: 'none',
    color: 'black',
  },
  cardActions: {
    position: 'absolute',
    bottom: 0,
  },
  alumDetails: {
    fontWeight: 500,
    // padding: '10px',
  },
  alumClass: {
    fontWeight: 500,
    padding: '10px',
  }
};

const MaterialBusinessCard = ({ classes, business}) => {
  console.log('business; ', business);
  return (
    <div id="card-wrapper">
      <MuiThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={business.Primary_Image_Url}
            title={business.BusinessName}
          />
          <CardContent>
            <Typography className={classes.alumDetails} variant="subheading">
              {business.AlumName ? `${business.AlumName}, ${business.Degree}` : null}
            </Typography>
            <Typography className={classes.alumClass} variant="subheading">
              {business.Class ? 'Class of ' + business.Class : null}
            </Typography>
            <img src={business.Logo_Url} className={classes.logo} />
            <Typography className={classes.businessName} variant="display1">
              {business.BusinessName}
            </Typography>
            <Typography variant="subheading">
              <a target="_blank" className={classes.businessURL} href={business.Url}>
                {business.Url}
              </a>
            </Typography>
            <Typography className={classes.description} variant="subheading">
              {business.Description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    </div>
  );
}

MaterialBusinessCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialBusinessCard);
