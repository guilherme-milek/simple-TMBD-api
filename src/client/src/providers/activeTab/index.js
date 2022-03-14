import { useContext, createContext, useState } from "react";

export const ActiveTabContext = createContext();

export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(true);

  const resetAtiveTab = () => {
    setActiveTab(true);
  };

  const switchActiveTab = (value = true) => {
    setActiveTab(value);
  };

  return (
    <ActiveTabContext.Provider
      value={{ activeTab, resetAtiveTab, switchActiveTab }}
    >
      {children}
    </ActiveTabContext.Provider>
  );
};

export default function useActiveTab() {
  return useContext(ActiveTabContext);
}
