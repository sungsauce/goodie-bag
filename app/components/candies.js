import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCandies } from "../reducers";

class Candies extends Component {
  componentDidMount() {
    this.props.fetchInitialCandies();
  }
  render() {
    return (
      <ul>
        {this.props.candies.map(candy => (
          <li key={candy.id}>{candy.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.candies
});

const mapDispatchToProps = dispatch => ({
  fetchInitialCandies: () => dispatch(fetchCandies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candies);

// export default Candies
