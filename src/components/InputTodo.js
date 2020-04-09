import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import Action from '../actions/index'

const InputTodo = (props) => {
  console.log('input')
  const [description, setDescription] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();
    props.addTodo({ description })
    setDescription("")
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (req) => dispatch(Action.addTodo(req)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);

// export default React.memo(InputTodo);
