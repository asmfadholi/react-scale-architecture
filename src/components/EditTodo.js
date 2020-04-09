import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import Action from '../actions/index'

const EditTodo = ({ todo, editTodo, detailTodo }) => {
  console.log('edit')
  const history = useHistory()
  let { id } = useParams();

  const [description, setDescription] = useState('');
  const [show, setShow] = useState(true);

  
  const handleClose = () => {
    setShow(false)
    history.push('/')
  }

  const onSubmit = (req) => {
    editTodo({ id: req, description })
    handleClose();
  }

  useEffect(() => {
    detailTodo({ id: id })
  }, [detailTodo, id]);

  useEffect(() => {
    if (todo) {
      setDescription(todo.description)
    }
  }, [todo]);

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="modal-title">Edit Todo</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-warning"
            data-dismiss="modal"
            onClick={() => onSubmit(todo.todo_id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            data-dismiss="modal"
            onClick={() => handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { todo: state.StoreTodo.detail };
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (req) => dispatch(Action.editTodo(req)),
    detailTodo: (req) => dispatch(Action.detailTodo(req))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);