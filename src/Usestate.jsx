import { useState, useEffect } from "react";

function Usestate() {
  let [count, setCount] = useState(0);
  let [name,setName]=useState(" ");

  useEffect(() => {
    console.log("Value updated");
  }, [count]);

  return (
    <>
      <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>
        <h1>Enter Something :{name}</h1>
        <textarea onChange={(e) => setName(e.target.value)}></textarea>

      </div>
    </>
  );
}

export default Usestate;
