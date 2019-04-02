'use strict';

import React from 'react';
import Row from './Row';

const Table = (props) => {
  var rows = {
      this.props.cells.map(function(row){
        <Row row={row} onChange={this.props.onChange} onFocus={this.props.onFocus} />
      }, this)
  }
  return (
    <table className='table' onBlur={this.props.onBlur}>
      <tbody>
        {rows()}
      </tbody>
    </table>
  )
}
