import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../services/TodoService'

const ListTodoComponent = () => {  

    const [todos, setTodos] = useState([])

    useEffect(()=>{
        listTodos();
    }, [])

    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center' >List of Todos</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => 
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES': 'NO'}</td>
                                </tr>
                            )
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodoComponent