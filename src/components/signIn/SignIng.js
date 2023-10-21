import { useState , useContext} from "react"
import {popup,} from "../../utils/firebase/firebase.js";
import { createUserDocumentFromAuth , SignInAuthWithEmailAndPassword} from "../../utils/firebase/firebase.js";
import FormInput from "../form-input/form-input.js";
import "./sign-in.scss";
import Button from '../button/button.js';
import { UserContext } from "../../context/context.js";

const defaultFormFields = {
    email: '',
    password: "",
}






const SignIn = () => {
    let [formFields, setFormFields] = useState(defaultFormFields);
    let {email, password} = formFields;



    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
        console.log(formFields)
    }
    
    


    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
            await SignInAuthWithEmailAndPassword(email, password);

            let inpuFields = document.querySelectorAll("input");
            for (let i = 0; i < inpuFields.length; i++) {
             inpuFields[i].value = "";
            }
            
        } catch (error) {
            if(error.code === "auth/user-not-found") {
                alert("user not found")
            } else if (error.code === "auth/wrong-password"){
                alert("Wrong Password")
            }
                
        }

    }
    const logGoogleUser = async () => {
        const {user} = await popup();
        createUserDocumentFromAuth(user);
    };
    

    return (
        <div className="sign-up-container">
            <h2>Already Have an account?</h2>
            <span>Sign in</span>

            <form onSubmit={handleSubmit}>

            <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} className="form-input"/>
            <FormInput label="Password"   required type="password" onChange={handleChange} name="password" value={password} className="form-input"/>

            
           <div className="buttons-container">
           <Button children="sign in" buttonType={"inverted"}  type="submit"/>
            <Button children="sign in with Google" buttonType="google" onClick={logGoogleUser} />
           </div>
        </form>
        </div>
    );
}

export default SignIn;
