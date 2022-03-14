import { useContext, createContext, useState } from "react";

export const PageSwitchDetectorContext = createContext();

export const PageSwitchDetectorProvider = ({ children }) => {
  const [pageChanged, setPageChanged] = useState(false);

  const updatePageChanged = () => {
    setPageChanged(!pageChanged);
  };

  return (
    <PageSwitchDetectorContext.Provider
      value={{ pageChanged, updatePageChanged }}
    >
      {children}
    </PageSwitchDetectorContext.Provider>
  );
};

export default function usePageSwitchDetector() {
  return useContext(PageSwitchDetectorContext);
}
