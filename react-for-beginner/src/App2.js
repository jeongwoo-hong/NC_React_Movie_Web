import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
      setKeyword(event.target.value);
  }
  console.log("I run all the time")
  useEffect(() => {
      console.log("Call the API...")
  }, []);
  useEffect(() => {
      console.log("Serach For", keyword);
  }, [keyword]);
  return (
    <div>
        <input value={keyword} type="text" placeholder="Search Here" onChange={onChange}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
