(this["webpackJsonpcrud-ui"]=this["webpackJsonpcrud-ui"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),i=a.n(r),c=a(3),s=a(4),u=a(7),o=a(6),d=a(5),m=(a(13),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state=d,n}return Object(s.a)(a,[{key:"renderTableHeader",value:function(){var e=Object.keys(this.state.students[0]);return console.log(e),e.map((function(e,t){return l.a.createElement("th",{key:t},e)}))}},{key:"renderTableData",value:function(){return this.state.students.map((function(e,t){var a=e.id,n=e.name,r=e.age,i=e.email,c=e.hobby;return l.a.createElement("tr",{key:a},l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,i),l.a.createElement("td",null,c))}))}},{key:"AddRow",value:function(){this.state.students.push({id:5,name:"Misha",age:20,email:"none",hobby:"Fifa"}),this.setState({students:this.state.students})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{id:"title"},"React Dynamic Table"),l.a.createElement("table",{id:"students"},l.a.createElement("tbody",null,l.a.createElement("tr",null,this.renderTableHeader()),this.renderTableData())),l.a.createElement("button",{onClick:this.AddRow.bind(this)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"))}}]),a}(l.a.Component));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"students":[{"id":1,"name":"Max","age":25,"email":"squ1rtle.mg@gmail.com","hobby":"football"},{"id":2,"name":"Ali","age":19,"email":"@email.com","hobby":"chess"},{"id":3,"name":"Saad","age":16,"email":"aseh@email.com","hobby":"hockey"},{"id":4,"name":"Asad","age":25,"email":"asad@email.com","hobby":"backetball"}]}')},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bf5579e3.chunk.js.map