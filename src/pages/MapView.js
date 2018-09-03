import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';

import MaterialBusinessCard from '../components/MaterialBusinessCard';
import images from '../assets/images';
import { closeCard, getBusinesses, selectBusinessMarker } from '../actions/businessActions';

class MapView extends Component {
  componentDidMount() {
    this.props.getBusinesses();
  }

  onMapClick = () => {
    this.props.closeCard();
  }

  render() {
    return (
      <div className='mapContainer'>
        <Map onClick={this.onMapClick} className='Google-Map' google={this.props.google} zoom={14} ControlPosition='BOTTOM_LEFT' initialCenter={{ lat: 39.757538, lng: -104.939617 }} centerAroundCurrentLocation >
          {this.props.businesses.map(business => {
            return business.Location.map(location => {
              return (
                <Marker
                  id='marker'
                  onClick={() => this.props.selectBusinessMarker(business)}
                  position={{ lat: location.Coordinates[0], lng: location.Coordinates[1] }}
                  icon={{ url: images.Imgur_Icon }}
                />
              );
            });
          })}
        </Map>
        { this.props.business ? <MaterialBusinessCard closeCard={this.props.closeCard} business={this.props.business} /> : null }
      </div>
    );
  }
}

const mapStateToProps = ({ businesses }) => {
  return { business: businesses.business, businesses: businesses.businesses, isFetching: businesses.isFetching };
};

const GoogleMapsApiKey = process.env.REACT_APP_MAPS_API_KEY;

MapView.propTypes = {
  business: PropTypes.object,
  businesses: PropTypes.array,
  closeCard: PropTypes.func,
  getBusinesses: PropTypes.func,
  google: PropTypes.object,
  selectBusinessMarker: PropTypes.object,
};

export default connect(mapStateToProps, { closeCard, getBusinesses, selectBusinessMarker })(GoogleApiWrapper({ apiKey: GoogleMapsApiKey })(MapView));
