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

  render() {
    return this.props.isFetching || !this.props.businesses.length ? <LoadingSpinner /> : (
      <div>
        <BusinessNames businessNames={this.props.businesses.map(business => business.name).sort()} />
      </div>
    );
  }
}

const mapStateToProps = ({ businesses }) => {
  return { businesses: businesses.businesses, isFetching: businesses.isFetching };
};

BusinessList.propTypes = {
  businesses: PropTypes.array,
  getBusinesses: PropTypes.func,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, { getBusinesses })(BusinessList);
