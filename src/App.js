import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css'
import MyProvider from './MyProvider';
// import MyProvider from './MyProvider';
import ProductList from './ProductList';
// import Middle from './Middle';
import EmailRef from './forwordRef';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MyProvider>
          <div className="App">
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to my web store</h1>
            </header> */}
            <ProductList />
            <EmailRef />
          </div>
        </MyProvider>

      </ErrorBoundary>
    );
  }
}
export default App;
