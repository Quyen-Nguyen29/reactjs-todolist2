
import { completed, unCompleted, all } from '../variables/variable'

export default function Filter({ gettingFilterOptionValue }) {

   
   

    return (

        <form>
            <div className="select-wrapper">
                <select name="options" id="options" onChange={(e)=> gettingFilterOptionValue(e.target.value)}  >
                    <option value={all}>All</option>
                    <option value={completed}>Completed</option>
                    <option value={unCompleted}>Uncompleted</option>

                </select>

            </div>

        </form>

    )

}