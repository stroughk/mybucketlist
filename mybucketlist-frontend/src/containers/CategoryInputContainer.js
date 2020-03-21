import React from 'react';
import { connect } from 'react-redux'

import CategoryInput from '../components/CategoryInput';
import { createCategory } from '../actions/createCategory';

class CategoryInputContainer extends React.Component {
  state = { categoryName: "" };

  handleChange = event => this.setState({ categoryName: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    const { categoryName } = this.state;
    const { createCategory } = this.props;

    createCategory(categoryName);
    this.setState({ categoryName: "" });
  };

  render() {
    return(
      <CategoryInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}

export default connect(null, { createCategory })(CategoryInputContainer);
