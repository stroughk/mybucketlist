import React from "react";
import  {connect} from 'react-redux';
import CategoriesContainer from './containers/CategoriesContainer';

class App extends React.Component {

render() {
    return (
    <div className="ui container">
       <CategoriesContainer />
      </div>
    )
  }
}

export default App
