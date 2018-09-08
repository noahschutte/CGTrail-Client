import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from '../components/LoadingSpinner';
import { getBusinesses } from '../actions/businessActions';
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
        <BusinessNames isLoggedIn={this.props.isLoggedIn} businessNames={this.props.businesses.map(business => business.name).sort()} />
      </div>
    );
  }
}

const mapStateToProps = ({ businesses, users }) => {
  return {
    businesses: businesses.businesses,
    isFetching: businesses.isFetching,
    isLoggedIn: users.isLoggedIn,
  };
};

BusinessList.propTypes = {
  businesses: PropTypes.array,
  getBusinesses: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, { getBusinesses })(BusinessList);
