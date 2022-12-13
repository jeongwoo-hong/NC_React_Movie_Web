import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("i'm here!")
    }, [])
    return <h1>Hello</h1>
}

function App3() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App3;