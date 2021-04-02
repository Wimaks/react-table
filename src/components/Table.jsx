import React from 'react';
import students from '../students.json';
import '../App.css';

export default class Table extends React.Component {
    constructor(props) {
      super(props)
      this.state = students;
    }
  
    renderTableHeader() {
        // let header = Object.keys(this.state.students[0])  
        // console.log(header);
        return this.students.map((student, index) => {
        return (
            <th key={index}>{student}</th>
        )
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
                <td><button onClick={() => this.remove(students.id)}>Удалить строку</button></td>
            </tr>
        )
        })
        )
    }
  
    remove = (rowId) => {
        // Array.prototype.filter returns new array
        // so we aren't mutating state here
        const arrayCopy = this.state.students.filter((row) => row.id !== rowId);
        this.setState({ students: arrayCopy });
    };
    
    AddRow() {
        this.state.students.push({id: 5 , name: "Misha", age: 20, email: "none", hobby: "Fifa"});
        this.setState({students: this.state.students});
        }
    
    render() {
    //     const rows = this.state.students.map((rowData) => (
    //     <renderTableBody remove={this.remove} {...rowData} />
    //     ));
    
    return (
        <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
            <tbody>
            <tr>{this.renderTableHeader()}</tr>
                {this.renderTableBody()}
            </tbody>
            </table>
            <button onClick= { this.AddRow() } >Добавить строку</button>
            {/* <button onClick= { addRow('students') } >Добавить строку</button> */}
        </div>
        )   
    } 
}
  