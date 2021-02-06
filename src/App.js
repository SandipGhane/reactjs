import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css'
import MyProvider from './MyProvider';
// import MyProvider from './MyProvider';
import ProductList from './ProductList';
// import Middle from './Middle';
import EmailRef from './forwordRef';
import PlayVideo from './PlayVideo';
class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MyProvider>
          <div className="App">
            <PlayVideo />
          </div>
        </MyProvider>

      </ErrorBoundary>
    );
  }
}
export default App;
