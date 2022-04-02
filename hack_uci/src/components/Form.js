import './Form.css'
import { useState } from "react";

function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [funfact, setFunfact] = useState("")

    return (
        <div id="main-container">
            <form>
                Wowza
                <input 
                    type="text" 
                    autocomplete="off" 
                    placeholder="Name" 
                    className='input-field'
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    autocomplete="off" 
                    placeholder="Email" 
                    className='input-field'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="text" 
                    autocomplete="off" 
                    placeholder="Fun Fact" 
                    className='input-field'
                    onChange={(e) => setFunfact(e.target.value)}
                />
                <button type="button">Submit</button>
            </form>
        </div>
    )
}

export default Form