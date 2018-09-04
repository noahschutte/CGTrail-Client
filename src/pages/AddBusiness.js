import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { saveBusiness } from '../actions/businessActions';
import AddBusinessForm from '../components/AddBusinessForm';

class AddBusiness extends Component {
  state = {
    alumClass: '',
    alumDegree: '',
    alumField: '',
    alumName: '',
    alumTitle: '',
    name: '',
    url: '',
    description: '',
    locations: [],
  }

  addLocationForm = (locationForm) => {
    this.setState(() => ({
      ...this.state,
      locations: [
        ...this.state.locations,
        locationForm,
      ],
    }));
  }

  handleChange = (name, event) => {
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value });
  }

  handleNestedLocationChange = (name, event, index) => {
    const value = event.target.value;
    const location = this.state.locations[index];

    if (name === 'name' || name === 'phone' || name === 'coords') {
      location[name] = value;
      const locations = [
        ...this.state.locations.slice(0, index),
        {
          ...location,
        },
        ...this.state.locations.slice(index + 1),
      ];
      this.setState(() => ({
        ...this.state,
        locations,
      }));
    } else {
      location.address[name] = value;
      const locations = [
        ...this.state.locations.slice(0, index),
        {
          ...location,
        },
        ...this.state.locations.slice(index + 1),
      ];
      this.setState(() => ({
        ...this.state,
        locations,
      }));
    }
  }

  saveBusiness = () => {
    this.props.saveBusiness(this.state, this.props.token);
  }

  render() {
    const { locations } = this.state;
    return (
      <AddBusinessForm
        addLocationForm={this.addLocationForm}
        saveBusiness={this.saveBusiness}
        handleChange={this.handleChange}
        handleNestedLocationChange={this.handleNestedLocationChange}
        locations={locations}
      />
    );
  }
}

AddBusiness.propTypes = {
  saveBusiness: PropTypes.func,
  token: PropTypes.string,
};

const mapStateToProps = ({ users }) => {
  return { token: users.jwt };
};

export default connect(mapStateToProps, { saveBusiness })(AddBusiness);
