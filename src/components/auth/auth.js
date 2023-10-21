import Signin from "../signIn/SignIng";
import SignUp from "../sign-up/sign-up";
import "./auth.scss"
const Auth = () => {
    return (
        <div className="authentication-container">
            <Signin />
            <SignUp />
        </div>
    );
}

export default Auth;
