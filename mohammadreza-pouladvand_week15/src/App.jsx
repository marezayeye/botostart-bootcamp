import { useState } from "react";

import Input from "./Input";
import cityList from "./constants/cities.js";

function App() {
  const [userInput, setUserInput] = useState("");
  const [hint, setHint] = useState("");
  const handleChange = (event) => {
    setUserInput(() => event.target.value);
    setHint(hintGenerator(event.target.value));
  };

  const hintGenerator = (searchValue) => {
    if (searchValue) {
      let res = "";
      cityList.forEach((city) => {
        if (city.toLowerCase().startsWith(searchValue.toLowerCase())) {
          res = city;
          return;
        }
      });
      return res;
    }
  };

  return (
    <>
      <Input
        handleChange={handleChange}
        hint={hint}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    </>
  );
}

export default App;
