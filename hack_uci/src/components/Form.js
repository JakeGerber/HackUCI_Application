import './Form.css'
import { useState } from "react";
import InputBox from './InputBox';

function Form() {

    //handles the name, email, and funfact for the corresponding input boxes.
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [funfact, setFunfact] = useState("")

    //Input boxes and headers.
    return (
        <div>
        <div className="main-container mobile">
            
            <form>
            <div id="title">Hack UCI Application</div>

            <h1>Name</h1>                
            <InputBox name="Name" class = "input-field" val = {name} fval = {setName}/>

            <h1>Email</h1>
            <InputBox name="Email" class = "input-field" val = {email} fval={setEmail}/>

            <h1>Fun Fact</h1>
            <InputBox name="Fun Fact" class = "other-input-field" val = {funfact} fval={setFunfact}/>
            <button type="button" id="button" onClick={submitForm}>Submit</button>
                
            </form>

            

        </div>
        
        </div>
    )

    //Pattern Matching to See if an Email is Valid
    function patternMatch(val){
        const emailRegex = new RegExp("^([A-Za-z]|[0-9]|[-_.])+@(([A-Za-z]|[0-9]|[-_]))+.(([A-Za-z]|[0-9]|[-_]))+$")
        return (val.match(emailRegex) != null)
    }
    
    //Clear variables on send alert on successful pattern match.
    async function submitForm() {
        if (patternMatch(email)) {
            alert("Form Submitted!");
            setName("");
            setEmail("");
            setFunfact("")
            const url = `https://hack-tech-app-endpoint.herokuapp.com/test?name=${name}&email=${email}&funfact=${funfact}`
            const submittedResponse = await fetch(url)
            const resJSON = await submittedResponse.json()
            console.log(resJSON)
        }
        else {
            alert("Not a Valid Email!")
        }
    }
}

export default Form