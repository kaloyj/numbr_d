import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import PhoneContacts from "./PhoneContacts";
import PhoneKeypad from "./PhoneKeypad";
import PhonewordsList from "./PhonewordsList";
import PhoneTabs, { PHONE_TAB_VIEWS } from "./PhoneTabs";
import { breakpoints } from "../../utils/breakpoints";

const SCREEN_WIDTH = {
  mobile: 275,
  tablet: 350,
};

const PhoneContainer = styled.div`
  margin: 1rem;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  background-color: var(--black);
`;

const ConnectedScreens = styled(motion.div)`
  height: 450px;
  width: ${SCREEN_WIDTH.mobile}px;
  position: relative;
  background-color: var(--black);
  color: var(--white);
  border-radius: 15px;
  display: flex;
  flex-flow: row nowrap;

  @media (min-width: ${breakpoints.tablet}px) {
    width: ${SCREEN_WIDTH.tablet}px;
    height: 500px;
  }
`;

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
  const [phonewords, setPhonewords] = useState<string[]>([]);
  const isTabletUp = useMediaQuery({ minWidth: breakpoints.tablet });
  const handlePhonewordsQuery = useCallback(
    () => setVisibleTab(PHONE_TAB_VIEWS.results),
    []
  );

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
        <PhoneContacts></PhoneContacts>
        <PhoneKeypad
          setPhonewords={setPhonewords}
          setQuery={setQuery}
          onSearch={handlePhonewordsQuery}
        ></PhoneKeypad>
        <PhonewordsList phonewords={phonewords} query={query}></PhonewordsList>
      </ConnectedScreens>

      <PhoneTabs
        visibleTab={visibleTab}
        setVisibleTab={setVisibleTab}
      ></PhoneTabs>
    </PhoneContainer>
  );
};

export default Phone;
