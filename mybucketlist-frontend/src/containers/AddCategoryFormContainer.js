import React from 'react';
import { connect } from 'react-redux'

import AddCategoryForm from '../components/AddCategoryForm';
import { createCategory } from '../actions/createCategory';

class AddCategoryFormContainer extends React.Component {s
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
      <AddCategoryForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}

export default connect(null, { createCategory })(AddCategoryFormContainer);
