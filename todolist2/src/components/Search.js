
export default function Search({ gettingSearchTodoValue }) {


    return (

        <form>
           <input type="text"  placeholder="Please input your search"  onKeyUp={(e)=>gettingSearchTodoValue(e.target.value)} />
        </form>

    )

}