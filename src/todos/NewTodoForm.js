import React, { useState } from 'react';
import {connect} from 'react-redux';
import { addTodoRequest } from './thunks';
import './NewTodoForm.css';

//connect ()() is a high order function
const NewTodoForm = ({todos,onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');//we defined this input value state variable to keep track of the value that's in our input box.

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here nowww!!"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button 
            //define an anonymous function which will call onCreate
            //we dont want duplicate todos
            //we want to clear the input value upon onclick
            onClick={() => {
                const isDuplicateText =
                    todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}
            className="new-todo-button">Create Todo</button>
        </div>
    );
};
//the properties of the object to be returned will be passed to our components as props
const mapStateToProps = state => ({
    todos: state.todos,
});
//the properties of the object to be returned will be passed to our components as props
//dispatch is a function that allows our components to trgieer actions that our redux store will respond to
//In our case, we want to trigger our Redux action when somebody clicks the create to do button of our new todo form
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),//create an action object
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);//by doing this newtodoform will automatically get props from the state

/*
nd then
we're going to pass these two functions,
 mapStateToProps and mapDispatchToProps to the first set of parentheses of connect, 
 mapStateToProps, mapDispatchToProps. So what do these two functions do exactly? 
 Well let's start with mapStateToProps. The state argument that gets passed to 
 mapStateToProps is an object that represents the entire Redux state. In our case,
  it'll only have a todos property so far, but in larger applications 
  it could contain a pretty large number of properties,
   representing different pieces of data in our application such as users, videos, 
   articles, and a lot of other things. Now the job of mapStateToProps is to 
   take this state object and return another object containing the pieces of 
   that state that our component needs access to. So in our case, we'll want our 
   NewTodoForm to have access to the todos in our state, which will look like this: return an object 
   with the property todos that's equal to state.todos, and the cool part here is that because we passed both mapStateToProps and our NewTodoForm component to this connect function, 
*/