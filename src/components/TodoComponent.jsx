import React from 'react'
import { useState } from 'react'
import { saveTodo } from '../services/TodoService'
import { useNavigate, useParams } from 'react-router-dom'

const TodoComponent = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState()
  const [completed, setCompleted] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  function saveOrUpdateTodo(e) {
    e.preventDefault()
    const todo = { title, description, completed }
    console.log(todo)
    saveTodo(todo).then((response) =>{
      console.log(response.data)
      navigate('/todos')
    }).catch(error => {
      console.error(error);
    })
  }
  
  function pageTitle(){
    if(id){
      return <h2 className='text-center'>Update Todo</h2>
    }else{
      return <h2 className='text-center'>Add Todo</h2>
    }
  }

  return (
    <div className='container'>
      <div style={{paddingTop: "40px"}} className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form action="">
              <div className='form-group mb-2'>
                <label className='form-label'>Todo Title:</label>
                <input type="text"
                  className='form-control'
                  placeholder='Enter Todo Title'
                  name='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />

                <label className='form-label'>Todo Description</label>
                <input type="text"
                  className='form-control'
                  placeholder='Enter Todo Description'
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} />

                <div className='form-group mb-2'>
                  <label className='form-label'>Todo Completed</label>
                  <select className='form-control'
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value)}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
              </div>

              <button className='btn btn-success' onClick={(e)=>saveOrUpdateTodo(e)}>Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TodoComponent