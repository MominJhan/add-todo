import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Addtodo = () => {
  const [addtask, setaddtask] = useState("");
  const [cookies, setCookie] = useCookies([]);

  const handle = () => {
    setCookie("addtask", addtask, { path: "/" });
  };

  return (
    <div classaddtask="App">
      <h1>addtask of the user:</h1>
      <input
        placeholder="add task"
        value={addtask}
        onChange={(e) => setaddtask(e.target.value)}
      />
      <button onClick={handle}>Add</button>
    </div>
  );
};
export default Addtodo;
