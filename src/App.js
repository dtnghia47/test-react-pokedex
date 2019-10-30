import React, { Component } from 'react'
import { Provider } from 'react-redux';

import PokedexList from './container/PokedexList'
import withReduxStore from './store';

import './style/main.scss';

class App extends Component {

  render() {
    const { reduxStore = {} } = this.props;
    return (
      <Provider store={reduxStore}>
        <div className="App">
          <PokedexList />
        </div>
      </Provider>
    )
  }
}

export default withReduxStore(App)
