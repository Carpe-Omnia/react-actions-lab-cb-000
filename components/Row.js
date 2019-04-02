'use strict';

import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  var cells = props.row.map(function(cell, index){return (<Cell key={index} cell={cell} onChange={props.onChange} onFocus={props.onFocus} />)})
  return(
    <tr className="row">
      {cells}
    </tr>
  )
}

export default Row
