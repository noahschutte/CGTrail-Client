import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddBusinessForm from '../components/AddBusinessForm';

class AddBusiness extends Component {
  render() {
    return (
      <AddBusinessForm />
    );
  }
}

export default connect(null)(AddBusiness);
