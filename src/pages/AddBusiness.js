import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddBusinessForm from '../components/AddBusinessForm';

class AddBusiness extends Component {
  state = {
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

  render() {
    const { locations } = this.state;
    return (
      <AddBusinessForm
        addLocationForm={this.addLocationForm}
        locations={locations}
      />
    );
  }
}

export default connect(null)(AddBusiness);
