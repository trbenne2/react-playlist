var React = require('react');
require('./css/todoItem.css');

class TodoItem extends React.Component{

    render(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete">x</span>
                </div>
            </li>
        );
    }

     
};

module.exports = TodoItem;