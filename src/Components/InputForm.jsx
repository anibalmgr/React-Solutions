import React, { useState } from "react";

function InputForm(props) {

  const [input, setInput] = useState({
    key: "",
    id: "",
    text: "",
    number: 0
  });

  function saveText(e) {
    const { name, value } = e.target;

    setInput(prevText => {
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
  let extraBStyle = props.bStyle ? props.bStyle : "";

  const formStyle = {
    minWidth: "150px",
    maxWidth: "10vw",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "2px",
    ...extraFStyle
  }

  const buttonStyle = {
    outline: "none",
    background: "lightgray",
    borderTop: "1px solid black",
    border: "none",
    opacity: "0.8"
  }

    return (
      <form style={formStyle} onSubmit={preventDefault}>
        {props.text && <input style={buttonStyle} name="text" placeholder="Text" value={input.text} onChange={saveText}/>}
        {props.number && <input style={buttonStyle} name="number" value={input.number} onChange={saveText} type="number" />}
          <button style={buttonStyle} onClick={() => {
          props.onAdd(input);
          setInput({    text: "", number: ""})
        }}
        >Add</button>

      </form>
        )
      }

export default InputForm;
