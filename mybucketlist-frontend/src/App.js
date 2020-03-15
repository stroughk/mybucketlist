import React from "react";
import  {connect} from 'react-redux';
import {fetchCategories} from './actions/fetchCategories'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchCategories({type: 'FETCH_CATEGORIES', payload: {name: 'Travel'}})
  }

render() {
    return <div className="App">App</div>;
  }
}

export default connect(null, {fetchCategories})(App);
