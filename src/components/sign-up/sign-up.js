import { useState,useContext } from "react";
import {createAuthWithEmailAndPassword} from '../../utils/firebase/firebase.js';
import {createUserDocumentWithEmailAndPassword} from '../../utils/firebase/firebase.js';
import FormInput from "../form-input/form-input.js";
import { UserContext } from "../../context/context.js";
import "./sign-up.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: '',
    password: "",
    confirmPassword: '', 
}


const SignUp = () => {
    let [formFields, setFormFields] = useState(defaultFormFields);
    let {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    
    const { setCurrentUser } = useContext(UserContext)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("try match the passwords");
            return false;
        }
        try {
            const {user} = await createAuthWithEmailAndPassword(email,password);
            user.displayName = displayName;
            await createUserDocumentWithEmailAndPassword(user);

        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                alert("email is already use, try another one")
            }
            else {
                alert("write a good password");
                return false;
            }
        }
        let inpuFields = document.querySelectorAll("input");
           for (let i = 0; i < inpuFields.length; i++) {
            inpuFields[i].value = "";
           }
    }
    

    return (
        <div className="sign-up-container">
            <h2>Dont Have an account?</h2>
            <span>Sign up</span>

            <form onSubmit={handleSubmit}>

            <FormInput label="Email" id="email" required type="email" onChange={handleChange} name="email" value={email} className="form-input"/>

            <FormInput label="DisplayName" id="displayname"  required type="text" onChange={handleChange} name="displayName" value={displayName} className="form-input"/>

            <FormInput label="Password" id="password"  required type="password" onChange={handleChange} name="password" value={password} className="form-input"/>

            <FormInput label="confirmPassword" id="confirmPassword" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} className="form-input"/>
            
            <button className="button-container">submit</button>
        </form>
        </div>
    );
}

export default SignUp;
