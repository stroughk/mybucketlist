import React from "react";
import { connect } from "react-redux";

import { addWish } from "../actions/addWish";
import AddWishForm from "../components/AddWishForm";

class AddWishFormContainer extends React.Component {
  state = {
    content: "",
    fulfilled: "Not fulfilled"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addWish(this.state, this.props.category.id);
    this.setState({
      content: "",
      fulfilled: "Not fulfilled"
    });
  };

  render() {
    return(
      <AddWishForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    )
  }
}

export default connect(null, {addWish})(AddWishFormContainer);
