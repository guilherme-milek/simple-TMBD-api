import { useContext, createContext, useState } from "react";

export const InputsContext = createContext();

export const InputsProvider = ({ children }) => {
  const [inputs, setInputs] = useState({});

  const clearInputs = () => {
    setInputs({});
  };

  const addInput = (inputName, inputValue) => {
    const newInputs = { ...inputs };

    newInputs[inputName] = inputValue;

    setInputs(newInputs);
  };

  return (
    <InputsContext.Provider value={{ inputs, clearInputs, addInput }}>
      {children}
    </InputsContext.Provider>
  );
};

export default function useInputs() {
  return useContext(InputsContext);
}
