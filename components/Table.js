'use strict';

import React from 'react';
import Row from './Row';

const Table = (props) => {
  var rows = {
      props.cells.map(function(row){
        <Row row={row} onChange={.props.onChange} onFocus={props.onFocus} />
      })
  }
  return (
    <table className='table' onBlur={props.onBlur}>
      <tbody>
        {rows()}
      </tbody>
    </table>
  )
}
