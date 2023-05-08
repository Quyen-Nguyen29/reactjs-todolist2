import TodoItem from './TodoItem';


export default function TodoList({todosUI, todos, handlingDeleteTodo, toogleTodoStatus, handlingOpenEditPopUp }) {

    return (

        <ul>
            {
                todosUI.map((todo, i) => {
                    return (
                        <TodoItem key={i} todo={todo}
                            handlingDeleteTodo={handlingDeleteTodo}
                            toogleTodoStatus={toogleTodoStatus}
                            handlingOpenEditPopUp={handlingOpenEditPopUp} />
                    )
                })
            }

        </ul>

    )

}