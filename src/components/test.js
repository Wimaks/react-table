import React from 'react';
import students from '../students.json';
import './test.css';
/* 
   In this code we'll refactor the Table component 
   to use ES6 class & arrow syntax sugar. 
*/

const Row = ({ id, name, age, email, hobby, remove}) => (
    <div className="row">
      <div className="remove">
        <button onClick={() => remove(id)}>
          X
        </button>
      </div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
      <div>{hobby}</div>
    </div>
);
  
  export default class Table extends React.Component {
    state = students;
  
    /* 
       I like to write it this way to explicity state that a function is being returned
       But you could simplify this by using arrow syntax twice,
      
       compareBy = (key) => (a,b) => { ...... }
    */
    compareBy = (key) => {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    };
  
    sortBy = (key) => {
      let arrayCopy = [...this.state.students];
      arrayCopy.sort(this.compareBy(key));
      this.setState({ students: arrayCopy });
    };
  
    remove = (rowId) => {
      // Array.prototype.filter returns new array
      // so we aren't mutating state here
      const arrayCopy = this.state.students.filter((row) => row.id !== rowId);
      this.setState({ students: arrayCopy });
    };
  
    render() {
      const rows = this.state.students.map((rowData) => (
        <Row remove={this.remove} {...rowData} />
      ));
  
      return (
        <div className="table">
          <div className="header">
            <div className="remove"></div>
            <div onClick={() => this.sortBy("id")}>ID</div>
            <div onClick={() => this.sortBy("title")}>Title</div>
            <div onClick={() => this.sortBy("priority")}>Priority</div>
            <div onClick={() => this.sortBy("type")}>Issue Type</div>
            <div onClick={() => this.sortBy("complete")}>% Complete</div>
          </div>
          <div className="body">{rows}</div>
        </div>
      );
    }
  }
  