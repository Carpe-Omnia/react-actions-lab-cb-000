'use strict';

import React from 'react';
import Row from './Row';

const Table = (props) => {
  var rows = props.cells.map(function(row){ return (<Row row={row} doChange={props.doChange} doFocus={props.doFocus} />) })
  return (
    <table className='table' onBlur={props.doBlur}>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
export default Table
