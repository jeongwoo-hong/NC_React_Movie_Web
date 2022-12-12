import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App2() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
      setKeyword(event.target.value);
  }
  console.log("I run all the time")
  useEffect(() => {
      console.log("I run only once")
  }, []);
  useEffect(() => {
      console.log("I run when 'keyword' changes.")
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.")
}, [counter]);
useEffect(() => {
    console.log("I run when 'keyword' and 'counter' changes.")
}, [keyword, counter]);
  useEffect(() => {
      if(keyword !=="" && keyword.length > 5 ){
        console.log("Serach For", keyword);
      }
  }, [keyword]);
  return (
    <div>
        <input value={keyword} type="text" placeholder="Search Here" onChange={onChange}/>
        <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App2;
