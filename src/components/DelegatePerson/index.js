import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

class Delegate extends Component {
  toggleDelegate = (e) => {
    e.target.closest(".container").classList.toggle("strike");
  };

  render() {
    const { firstName, lastName, age, city, id } = this.props;
    return (
      <div data-key={id} onClick={this.props.onClick} className="container">
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
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired
};

export default Delegate;
