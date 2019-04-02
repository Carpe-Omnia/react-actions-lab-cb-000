'use strict';

import React from 'react';

export default class Cell extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
      <td className='cell'>
        <input value={this.props.cell} onFocus={this.props.doFocus} onChange={event => this.props.doChange(event)} />
      </td>
    )
  }
}
