import "./button.styles (1).scss"

const Button = ({children, buttonType, ...otherProps}) => {
    
    const buttonTypeClasses = {
        google: "google-sign-in",
        inverted: "inverted",
        
    }


    return (
            <button className={`button-container ${buttonTypeClasses[buttonType]}`} {...otherProps} >
            {children}
            </button>
    );
}

export default Button;
