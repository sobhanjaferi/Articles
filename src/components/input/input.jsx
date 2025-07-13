import styled from "./input.module.css";

function Input(props) {
    return (
        <div className={styled.form}>
            <label>{props.title}</label>
            <input name={props.name} type="text" onChange={props.HandleChange} />
        </div>
    );
}

export default Input;