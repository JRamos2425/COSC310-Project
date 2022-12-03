import "../scss/sidebar.scss"
import {BiErrorCircle} from "react-icons/bi"

function Input({value, onChange, type, name, label, error}) {
  
  return (
    <div className={`fit-content-v ${error ? "error" : ""}`}>
      <div className="input-data">
        <input value={value} onChange={onChange} type={type} name={name} required/>
        <div className="underline"></div>
        <label>{label}</label>
        <BiErrorCircle className="error-icon"></BiErrorCircle>
      </div>
      <h5 className="error-msg">{error}</h5>
    </div>
  );
}

export default Input;
