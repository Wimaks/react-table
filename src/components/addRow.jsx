import React from 'react';

// export default function addRow() {
//         return (
//         <tr>
//             <td><input></input></td>
//             <td><input></input></td>
//             <td><input></input></td>
//             <td><input></input></td>
//             <td><input></input></td>
//         </tr>
//         )
// }
export default function addRow(tableID) {
    // Get a reference to the table
    var tableRef = document.getElementById(tableID);
  
    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(0);
  
    // Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
  
    // Append a text node to the cell
    var newText = document.createTextNode('New top row');
    newCell.appendChild(newText);
  }

  const Table = ({ array }) => (<table><tbody>{array.map(generateRow)}</tbody></table>);
  const generateRow = rowData => (<tr>{rowData.map(generateCell)}</tr>);
  const generateCell = cellData => (<td>{cellData}</td>);

  Table();