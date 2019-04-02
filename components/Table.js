'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          this.props.cells.map(function(row){
                <Row row={row} onChange={this.props.onChange} onFocus={this.props.onFocus} />
              }, this)
        </tbody>
      </table>
    )
  }
}
