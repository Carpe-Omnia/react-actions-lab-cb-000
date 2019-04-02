'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          this.props.cells.map((row, index) =>
                <Row onChange={this.props.onChange} onFocus={this.props.onFocus.bind(null, index)} />
          )
        </tbody>
      </table>
    )
  }
}
