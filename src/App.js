import React from 'react';
import students from './students.json'
import './App.css';

export default class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = students;
  }

renderTableHeader() {
  let header = Object.keys(this.state.students[0])  
  console.log(header);
  return header.map((key, index) => {
    return <th key={index}>{key}</th>
  })
}

renderTableData() {
  return (
    this.state.students.map((student, index) => {
    const { id, name, age, email, hobby } = student //destructuring
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td>{hobby}</td>
      </tr>
    )
  })
  )
}

AddRow() {
    let newRows = this.state.students;
    newRows.push({id: 5, name: "Misha", age: 20, email: "none", hobby: "Fifa"});
    this.setState({students: newRows});
  }

render() {
  return (
    <div>
      <h1 id='title'>React Dynamic Table</h1>
      <table id='students'>
        <tbody>
         <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
      <button onClick= { this.AddRow.bind(this) } >Добавить строку</button>
    </div>
  )
}
}

