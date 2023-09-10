import React, { useState } from 'react'

const ListTodoComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "title": "Learn core Java With Examples",
            "description": "Learn core java",
            "completed": false
        },

        {
            "id": 2,
            "title": "Learn core Java With Examples 2",
            "description": "Learn core java 2",
            "completed": true
        },
    ]

    const [todos, setTodos] = useState(dummyData)

    return (
        <div className='container'>
            <h2 className='text-center' >List of Todos</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => 
                                <tr key={todo.id}>
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