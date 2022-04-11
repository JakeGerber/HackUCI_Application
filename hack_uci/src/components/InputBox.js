import './InputBox.css'

function InputBox(props) {
    //Pass in placeholder name, css classname, and value as props,
    //along with fval for when there is a change to the textbox.
    return (
        <input 
        type="text" 
        autocomplete="off" 
        placeholder={props.name}
        className={props.class}
        value = {props.val}
        onChange={(e) => {props.fval(e.target.value)}}
    />

    )
    }

export default InputBox