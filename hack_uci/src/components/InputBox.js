import './InputBox.css'

function InputBox(props) {

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