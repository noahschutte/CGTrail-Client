import React, { Component } from 'react';
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

  render() {
    return this.props.isFetching || !this.props.businesses.length ? <LoadingSpinner /> : (
      <div>
        <BusinessNames businessNames={this.props.businesses.map(business => business.BusinessName).sort()} />
      </div>
    );
  }
}

const mapStateToProps = ({ businesses }) => {
  return { businesses: businesses.businesses, isFetching: businesses.isFetching };
}

export default connect(mapStateToProps, { getBusinesses })(BusinessList);