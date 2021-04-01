import React, { Component } from "react";
import PropTypes from "prop-types";

class Delegate extends Component {
  render() {
    const { firstName, lastName, age, city } = this.props;
    return (
      <div className="container">
        <div className="person-container">
          <p className="person-data">{firstName}</p>
          <p className="person-data">{lastName}</p>
          <p className="person-data">{age}</p>
          <p className="person-data">{city}</p>
        </div>
      </div>
    );
  }
}

Delegate.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};

export default Delegate;
