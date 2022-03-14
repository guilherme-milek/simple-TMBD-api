import { InputsProvider } from "./inputs";
import { ResponseProvider } from "./response";
import { ActiveTabProvider } from "./activeTab";
import { PageSwitchDetectorProvider } from "./pageSwitchDetector";

export const Providers = ({ children }) => {
  return (
    <ResponseProvider>
      <InputsProvider>
        <ActiveTabProvider>
          <PageSwitchDetectorProvider>{children}</PageSwitchDetectorProvider>
        </ActiveTabProvider>
      </InputsProvider>
    </ResponseProvider>
  );
};
