import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

import config from '../.config';
import images from '../assets/images';

class MapView extends Component {

  render() {
    return (
      <div className="mapContainer">
        <Map className="Google-Map" google={this.props.google} zoom={14} ControlPosition="BOTTOM_LEFT" initialCenter={{ lat: 39.757538, lng: -104.939617 }} centerAroundCurrentLocation >
          {this.props.businesses.map(business => {
            return business.Location.map(location => {
              return <Marker id="marker" onClick={() => console.log('clicked: ', location)} position={{ lat: location.Coordinates[0], lng: location.Coordinates[1] }} icon={{ url: images.Imgur_Icon }} business={{ business }} />
            })
          })}
        </Map>
      </div>
    );
  }
}

const mapStateToProps = ({ businesses }) => {
  return { businesses: businesses.businesses, isFetching: businesses.isFetching };
}

const GoogleMapsApiKey = config.REACT_APP_GOOGLE_MAPS_API_KEY;
export default connect(mapStateToProps)(GoogleApiWrapper({ apiKey: GoogleMapsApiKey })(MapView))
