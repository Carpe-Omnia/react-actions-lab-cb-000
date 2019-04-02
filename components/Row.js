'use strict';

import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  var cells = props.row.map(function(cell, index){return (<Cell columnIndex={index} key={index} cell={cell} doChange={props.doChange} doFocus={props.doFocus} />)})
  return(
    <tr className="row">
      {cells}
    </tr>
  )
}

export default Row
