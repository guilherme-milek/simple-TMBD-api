import { useContext, createContext, useState } from "react";

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [response, setResponse] = useState({});

  const clearResponse = () => {
    setResponse({});
  };

  const addResponse = (response) => {
    setResponse(response);
  };

  return (
    <ResponseContext.Provider value={{ response, clearResponse, addResponse }}>
      {children}
    </ResponseContext.Provider>
  );
};

export default function useResponse() {
  return useContext(ResponseContext);
}
