import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PhoneContacts from "./PhoneContacts";
import PhoneKeypad from "./PhoneKeypad";
import PhonewordsList from "./PhonewordsList";
import PhoneTabs, { PHONE_TAB_VIEWS } from "./PhoneTabs";
import { breakpoints } from "../../utils/breakpoints";
import { VisibleTabContext } from "./useVisibleTab";
import { SCREEN_WIDTH, PhoneContainer, ConnectedScreens } from "./index.styles";
import { FILTERS } from "../../utils/phoneword";

const getScreenMargin = (
  visibleTab: string,
  defaultWidth = SCREEN_WIDTH.mobile
) => {
  switch (visibleTab) {
    case PHONE_TAB_VIEWS.keypad:
      return -defaultWidth;
    case PHONE_TAB_VIEWS.contacts:
      return 0;
    default:
      return -defaultWidth * 2;
  }
};

const Phone = () => {
  const [visibleTab, setVisibleTab] = useState(PHONE_TAB_VIEWS.keypad);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(FILTERS.all);
  const [phonewords, setPhonewords] = useState<string[]>([]);
  const isTabletUp = useMediaQuery({ minWidth: breakpoints.tablet });
  const handlePhonewordsQuery = useCallback(() => {
    setVisibleTab(PHONE_TAB_VIEWS.results);
    setFilter(FILTERS.all);
  }, []);

  return (
    <PhoneContainer>
      <ConnectedScreens
        animate={{
          x: getScreenMargin(
            visibleTab,
            isTabletUp ? SCREEN_WIDTH.tablet : SCREEN_WIDTH.mobile
          ),
        }}
        transition={{ stiffness: 20 }}
      >
        <VisibleTabContext.Provider value={visibleTab}>
          <PhoneContacts></PhoneContacts>
          <PhoneKeypad
            setPhonewords={setPhonewords}
            setQuery={setQuery}
            onSearch={handlePhonewordsQuery}
          ></PhoneKeypad>
          <PhonewordsList
            phonewords={phonewords}
            query={query}
            setPhonewords={setPhonewords}
            filter={filter}
            setFilter={setFilter}
          ></PhonewordsList>
        </VisibleTabContext.Provider>
      </ConnectedScreens>

      <PhoneTabs
        visibleTab={visibleTab}
        setVisibleTab={setVisibleTab}
      ></PhoneTabs>
    </PhoneContainer>
  );
};

export default Phone;
