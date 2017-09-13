import React, { Component, PropTypes } from 'react'
import ToDo from './ToDo'

export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map(todo =>
               <ToDo
                  key = {todo.id}
                  {...todo}
               />
            )}
         </ul>
      )
   }
}