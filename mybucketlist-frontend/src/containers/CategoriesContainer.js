import React from "react";
import  {connect} from 'react-redux';
import {Route} from 'react-router-dom'; 

import {fetchCategories} from '../actions/fetchCategories';
import Categories from "../components/Categories";
import CategoryShow from "../components/CategoryShow";
import CategoryInput from "../components/CategoryInput";

class CategoriesContainer extends React.Component {

componentDidMount() {
    this.props.fetchCategories()
}

  render() {
    return (
      <div>
        <Route path='/categories/new' component={CategoryInput} />
        <Route path='/categories/:id'render={(routerProps) => <CategoryShow {...routerProps} categories={this.props.categories}/>}/>
        <Route exact path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories}/>}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)
