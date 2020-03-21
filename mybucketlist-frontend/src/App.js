import React from "react";

import CategoriesContainer from './containers/CategoriesContainer';
import MenuBar from './components/MenuBar';

class App extends React.Component {

render() {
    return (
    <div className="ui container">
      <MenuBar />
       <CategoriesContainer />
      </div>
    )
  }
}

export default App
