import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from '../components/LoadingSpinner';
import { deleteBusiness, getBusinesses } from '../actions/businessActions';
import BusinessNames from '../components/BusinessNames';

class BusinessList extends Component {
  componentDidMount() {
    if (!this.props.businesses.length && !this.props.isFetching) {
      this.props.getBusinesses();
    }
  }

  componentDidUpdate() {
    if (!this.props.businesses.length && !this.props.isFetching) {
      this.props.getBusinesses();
    }
  }

  render() {
    return this.props.isFetching || !this.props.businesses.length ? <LoadingSpinner /> : (
      <div>
        <BusinessNames
          businesses={this.props.businesses}
          deleteBusiness={this.props.deleteBusiness}
          isLoggedIn={this.props.isLoggedIn}
          token={this.props.jwt}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ businesses, users }) => {
  return {
    businesses: businesses.businesses,
    isFetching: businesses.isFetching,
    isLoggedIn: users.isLoggedIn,
    jwt: users.jwt,
  };
};

BusinessList.propTypes = {
  businesses: PropTypes.array,
  deleteBusiness: PropTypes.func,
  getBusinesses: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isFetching: PropTypes.bool,
  jwt: PropTypes.string,
};

export default connect(mapStateToProps, { deleteBusiness, getBusinesses })(BusinessList);
