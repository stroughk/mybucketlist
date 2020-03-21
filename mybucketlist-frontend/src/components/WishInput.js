import React from "react";
import { connect } from "react-redux";
import { addWish } from "../actions/addWish";

class WishInput extends React.Component {
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Wish Fulfilled</label>
          <select
            name="fulfilled"
            value={this.state.fulfilled}
            onChange={this.handleChange}
          >
            <option>Fulfilled</option>
            <option>Not fulfilled</option>
          </select>
          <label>Add a wish</label>
          <input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, {addWish})(WishInput);
