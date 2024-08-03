import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handlChange = (e) => {
    if (e.target.value.includes("<script>")) {
      setWarningText("No script tag allowed");
      e.target.value = e.target.value.replace("<script>", "");
    } else if (e.target.value.includes("@")) {
      setWarningText("No @ tag allowed");
      e.target.value = e.target.value.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(e.target.value);
  };
  return (
    <div className="textarea">
      <textarea
        onChange={handlChange}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
      />
      {warningText !== null && <Warning warningText={warningText} />}
    </div>
  );
}
