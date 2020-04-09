import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Action from '../actions/index'
import EditTodo from "./EditTodo";

const ListTodos = (props) => {
  // const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('list, use effect')
    props.getListTodo();
  }, []);

  console.log('list', 'rerender')

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {props.StoreTodo.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
              <Link to={`/detail/${todo.todo_id}`}>
                  <button
                    type="button"
                    className="btn btn-warning">
                    Edit
                  </button>
              </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => props.deleteTodo({ id: todo.todo_id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { StoreTodo: state.StoreTodo.list };
}

const mapDispatchToProps = dispatch => {
  return {
    getListTodo: () => dispatch(Action.getListTodo()),
    deleteTodo: (req) => dispatch(Action.deleteTodo(req))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);

// export default ListTodos;
