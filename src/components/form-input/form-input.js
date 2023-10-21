import './form-input.styles.scss'
const FormInput = ({label, ...props}) => {
    return (
        <div className="group">
            <input {...props} className="form-input"/>
            <label className={`${props.value.length ? "shrink":""} form-input-label`}>{label}</label>
        </div>
    );
}

export default FormInput;
