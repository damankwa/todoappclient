import React from 'react';
import { Button, ButtonToolbar} from 'react-bootstrap';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed,onCompletedPressed }) => (
    <div className="todo-item-container">
        <p>{todo.text}</p>
        <div className="buttons-container">
            {todo.isCompleted
                ? null
                : <Button variant="outline-secondary" className="ml-1"
                onClick={() => onCompletedPressed(todo.id)}
                className="completed-button">Mark As Completed</Button>}
            <Button variant="outline-secondary"
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">Remove</Button>
        </div>
    </div>
);


export default TodoListItem;

