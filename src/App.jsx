import { useState } from "react";
import Input from "./components/Input.jsx";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copy");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const passwordSize = showInput ? customSize : 8;

  function generete() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copy");
  }

  function copyToCliboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copied");
  }

  return (
    <div>
      <h1>Password generator</h1>
      <div>
        <label htmlFor="showInput">customize password length?</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="customSize">Size:</label>
          <Input customSize={customSize} setCustomSize={setCustomSize} />
        </div>
      )}

      <button onClick={generete}>
        Generate a {passwordSize} character password
      </button>
      <button onClick={copyToCliboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
