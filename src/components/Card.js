import React, { Component } from 'react';

import ProgressBar from './ProgressBar'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick() {
    const { data, onRemove, onAdd } = this.props
    if (onRemove && data.check) {
      onRemove(data)
    } else {
      onAdd(data)
    }
  }

  render() {
    const { data } = this.props
    return (
      <div className="card d-flex justify-content-start">
        <img alt="pokedex img" src={data.imageUrl} />
        <div className="content flex-1">
          <div className="card-header d-flex justify-content-between ellipsis">
            <h3 className="ellipsis flex-1">{data.name}</h3>
            <button className="btn-action-card" onClick={() => this.handleClick()}>{data.check ? 'remove' : 'add'}</button>
          </div>
          {/* need more time */}
          <ProgressBar number={data.hp} label="HP" />
          <ProgressBar number={data.hp} label="STR" />
          <ProgressBar number={data.hp} label="WEAK" />
          <div className="">icon happy icon happy</div>
        </div>
      </div>
    );
  }
}

export default Card