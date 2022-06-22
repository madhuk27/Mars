import React, {useState} from "react";
import SignupForm from "./Assignment/SignupForm";
import Success from "./Assignment/Success";

const Form= () => {
    const[formIsSubmitted, setFormIsSubbmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubbmitted(true);
    }
    return <div>{!formIsSubmitted ? <SignupForm submitForm={submitForm}/>:<Success/>}</div>
}
export default Form;