var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// module required
var TodoItem = require('./todoItem');

//Create a component old
// var TodoComponent = React.createClass({
//     render: function(){
//         return(
//             <h1>Hellooooo</h1>
//         );
//     }
// });

// correct way
class TodoComponent extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        todos: ['wash up', 'eat some cheese', 'take a nap'],
        age: 30
      }
    }
    render() {
        var todos =  this.state.todos.map((item, index)=>{
            return(
                <TodoItem item={item} key={index} />
            );
        });
        
        var ager = setTimeout(() => {
            this.setState(()=>{
                return{
                    age: 35
                };
            });
        },5000);
      return(
        <div id="todo-list">
          <p>
            The busiest people have the most leisure...
          </p>
          <p>{this.state.age}</p>
          <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
          </ul>

          <br></br>
          <p>Way to loop through</p>
          <ul>{todos}</ul>
        </div>
      );
    }// render
  };


var myCheese = {name: 'Comembert', smellFactor:'Extreme pong', price:'3.50' };
// passing properities into component
ReactDOM.render(<TodoComponent mssg="I Like cheese" cheese={myCheese}/>, document.getElementById('todo-wrapper'));