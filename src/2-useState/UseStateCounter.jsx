import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDec = () => {
    if (count <= 0) {
      alert("count can not be less than 0");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>USE STATE HOOK</h2>
      <h1>Count:{count}</h1>
      <button onClick={handleInc}>INC</button>
      <button onDoubleClick={() => setCount(0)}>CLR</button>

      <button onClick={handleDec}>DEC</button>
    </div>
  );
};

export default UseStateCounter;
