const Input = ({ handleChange, hint, setUserInput, userInput }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input type="text" id="input" onChange={handleChange} value={userInput} />
    </div>
  );
};

export default Input;
