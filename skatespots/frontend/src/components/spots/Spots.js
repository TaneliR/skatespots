import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSpots } from "../../actions/spots";

export class Spots extends Component {
  static propTypes = {
    spots: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <h1>Skatespot List</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spots: state.spots.spots
});

export default connect(mapStateToProps)(Spots);
