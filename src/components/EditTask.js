import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux'
import { editDesc } from '../Redux/Actions/actions';
import { FiEdit } from "react-icons/fi";


const EditTask=({todo})=> {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(todo.description);
  const handleChange = (e) => setDesc(e.target.value);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const change =()=>{
    dispatch(editDesc({id :todo.id,description:desc}));

  }
  return (
    <>
      <FiEdit className='edit' onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task : {todo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={desc}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();change();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask