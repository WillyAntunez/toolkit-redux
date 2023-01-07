import { useState } from "react";

// import { useGetTodosQuery } from "./store/apis"
import { useGetTodoQuery } from "./store/apis"

export const TodoApp = () => {

    // const {data: todos = [], isLoading} = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId(id => id + 1)
    }

    const prevTodo = () => {
        if(todoId === 1) return;

        setTodoId(id => id - 1)
    }


    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={prevTodo}>
                Prev Todo
            </button>

            <button onClick={nextTodo}>
                Next Todo
            </button>

            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed? 'DONE: ': 'PENDING: '}</strong>
                        {todo.title}
                    </li>
                ))}
            </ul> */}
        </>
    )
}
