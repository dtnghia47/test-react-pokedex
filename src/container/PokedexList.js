import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, filter } from 'lodash'

import Modal from '../components/Modal'
import Search from '../components/Search'
import Card from '../components/Card'

import * as PokedexlAction from '../action/pokedex'

class PokedexList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    this.props.dispatch(PokedexlAction.getList())
  }

  removeData(dataRemove) {
    let cloneData = { ...dataRemove }
    cloneData.check = false
    this.props.dispatch(PokedexlAction.updateData(cloneData))
  }

  openModalSearch() {
    const content = (<Search />)
    this.modal.setState({
      open: true,
      content: content
    })
  }

  render() {
    const { data } = this.props
    let dataShow = [...data]
    dataShow = filter(data, function (o) { return o.check });
    return (
      <div className="card">
        {
          dataShow.length > 0
            ? dataShow.map(item =>
              <Card key={item.id} data={item} onRemove={this.removeData.bind(this)} />
            )
            : <p className="text-center">please click Red Button</p>
        }
        <button className="btn-open-search" onClick={() => this.openModalSearch()}>
        </button>
        <Modal
          ref={modal => this.modal = modal}
        />
      </div>
    );
  }
}

export default connect(state => {
  const pokedex = get(state, 'pokedex', {});
  return { ...pokedex };
})(PokedexList)