'use strict';

function addColumn (ev) {
  console.log("adding column")

  var temp = this.state.table.map(function(row){
    return(
      ['', ...row]
    )
  })
  this.setState({
    table: temp
  })
  ev.preventDefault();
}

function addRow (ev) {
  //console.log("adding row")
  ev.preventDefault();
  var temp = this.state.table ;
  var times = temp[0].length ;
  if(times === 0){times = 1}
  //console.log(length) ;
  var temp2 = [] ;
  for(var i = 0; i < times; i++){
    temp2.push(' ')
  }
  //console.log(temp2) ;
  temp.push(temp2) ;
  //console.log(temp) ;
  this.setState({
    table: temp
  })
}

function changeCell (rowIndex, columnIndex, event) {
  /*var newTable = this.state.table ;
  newTable[rowIndex][columnIndex] += event.key ;
  this.setState({
    table: newTable
  })
  event.preventDefault();
  */

}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault();
  console.log("removing row") ;
  if(!this.state.table.length > 1){
    console.log("do not do that")
  }
  else{
    var temp = this.state.table
    temp.pop() ;
    this.setState({table: temp})
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if(!this.state.table[0].length > 1){
    console.log("do not do that")
  }
  else{
    var temp = this.state.table ;
    temp.forEach(function(row){
      row.pop() ;
    })
    this.setState({table: temp})
  }
}

export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
