
export default function Form({ getInputValue, handlingAddItem, inputText }) {

    const handlingClickSubmit = (e) => {
        e.preventDefault();
        handlingAddItem(inputText)
    }

    return (

        <form>
            <input type="text" value={inputText} placeholder="Please insert your todo" onChange={(e) => getInputValue(e)} />
            <button type="submit" onClick={(e) => handlingClickSubmit(e)}> Add </button>
        </form>

    )

}