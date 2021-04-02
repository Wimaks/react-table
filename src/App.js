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
  return header.map((key, index) => {
    return <th key={index}>{key}</th>
  })
}

renderTableBody() {
  return (
    this.state.students.map((student, index) => {
    return (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.email}</td>
        <td>{student.hobby}</td>
        <button onClick={() => this.remove(student.id)}>X</button>
      </tr>
    )
  })
  )
}

remove = (rowId) => {
  const arrayCopy = this.state.students.filter((row) => row.id !== rowId);
  this.setState({ students: arrayCopy });
};

AddRow() {
    this.state.students.push({id: 5 , name: "Misha", age: 20, email: "none", hobby: "Fifa"});
    this.setState({students: this.state.students});
  }

render() {
  return (
    <div>
      <h1 id='title'>React Dynamic Table</h1>
      <table id='students'>
        <tbody>
         <tr>{this.renderTableHeader()}</tr>
          {this.renderTableBody()}
        </tbody>
      </table>
      <button onClick= { this.AddRow.bind(this) } >Добавить строку</button>
    </div>
  )
}
}

