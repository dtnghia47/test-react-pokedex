import React, { Component } from 'react';
import { get, filter, findIndex } from 'lodash'
import { connect } from 'react-redux';

import { imgSearch } from '../const/common'
import Card from '../components/Card'

import * as PokedexlAction from '../action/pokedex'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dataShow: []
    };
  }

  componentDidMount() {
    const { data } = this.props
    let { dataShow, name } = this.state
    dataShow = [...data]
    if (name) {
      dataShow = filter(data, function (o) { return !o.check });
    }
    this.setState({ dataShow })
  }

  addData(dataAdd) {
    let { dataShow } = this.state
    let cloneData = { ...dataAdd }
    cloneData.check = true
    let index = findIndex(dataShow, { id: cloneData.id });
    dataShow.splice(index, 1);
    // update UI search modal
    this.setState({ dataShow })
    // update data added
    this.props.dispatch(PokedexlAction.updateData(cloneData))
  }

  render() {
    let { name, dataShow } = this.state
    if (name) {
      dataShow = filter(dataShow, function (o) { return o.name.indexOf(name) !== -1 });
    }
    return (
      <div className="modal-content-search">
        <div className="d-flex align-item-center search-box">
          <input
            className="flex-1 mr-20"
            placeholder="Find pokemon..."
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <img alt="search icon" className="btn-search-placeholder" src={imgSearch} />
        </div>
        {
          dataShow.map(item =>
            <Card key={item.id} data={item} onAdd={this.addData.bind(this)} />
          )
        }
      </div>
    );
  }
}

export default connect(state => {
  const pokedex = get(state, 'pokedex', {});
  return { ...pokedex };
})(Search)