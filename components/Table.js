'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  var rows = this.props.cells.map((row) =>{
      <Row row={row} onChange={this.props.onChange} onFocus={this.props.onFocus} />
  }
  render () {
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
