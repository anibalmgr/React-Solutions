import React, { useState } from "react";

function InputForm(props) {

  const [input, setInput] = useState({
    key: "",
    id: "",
    text: "",
    number: props.number
  });

  function saveText(e) {
    const { name, value } = e.target;
    value >= 0 && setInput(prevText => {
      return {
        ...prevText,
        [name]: value
      };
    });
  }


  function preventDefault(e) {
    e.preventDefault();
  }

  let extraFStyle = props.fStyle ? props.fStyle : "";
  // let extraBStyle = props.bStyle ? props.bStyle : "";

  const formStyle = {
    minWidth: "150px",
    maxWidth: "10vw",
    display: "grid",
    gridTemplateColumns: "1fr",
    ...extraFStyle
  }

  const buttonStyle = {
    outline: "none",
    background: "lightgray",
    border: "violet solid 5px",
    opacity: "0.8"
  }

    return (
      <form style={formStyle} onSubmit={preventDefault}>
        {props.text && <input style={buttonStyle} name="text" placeholder="Text" value={input.text} onChange={saveText}/>}
        {(props.number || props.number === 0) && <input style={buttonStyle} name="number" value={input.number} onChange={saveText} type="number" />}
          <button style={buttonStyle} onClick={() => {
          props.onAdd(input);
          setInput({    text: "", number: input.number})
        }}
        >{props.buttonText}</button>

      </form>
        )
      }

export default InputForm;
