import { completed, unCompleted } from '../variables/variable'


export default function TodoItem({ todo, handlingDeleteTodo, toogleTodoStatus, handlingOpenEditPopUp }) {

  return (

    <li className={`list-group-item ${todo.status === completed ? "completed" : ""}`}>{todo.text}
      <span>
        <img onClick={() => toogleTodoStatus(todo.id)} src="../assets/images/icon-complete.png" alt="icon complete" />
        <img onClick={() => handlingDeleteTodo(todo.id)} src="../assets/images/icon-delete.png" alt="icon delete" />
        <span onClick={()=> handlingOpenEditPopUp(todo)}>Edit</span>
      </span>
    </li>



  )

}