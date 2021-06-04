import { useState } from "react";
import styled from "@emotion/styled";
import PhoneContacts from "./PhoneContacts";
import PhoneKeypad from "./PhoneKeypad";
import PhonewordsList from "./PhonewordsList";
import PhoneTabs, { PHONE_TAB_VIEWS } from "./PhoneTabs";

const PhoneContainer = styled.div`
  flex-basis: 100%;
  margin: 1rem;
  height: 450px;
  overflow: hidden;
  border: 1px solid black;
  position: relative;
  background-color: var(--black);
  color: var(--white);
  border-radius: 15px;
`;

const Phone = () => {
  const [visibleTab, setVisibleTab] = useState(PHONE_TAB_VIEWS.keypad);
  const [query, setQuery] = useState("");
  const [phonewords, setPhonewords] = useState<string[]>([]);
  return (
    <PhoneContainer>
      <PhoneContacts></PhoneContacts>
      <PhoneKeypad
        setPhonewords={setPhonewords}
        setQuery={setQuery}
      ></PhoneKeypad>
      <PhonewordsList phonewords={phonewords} query={query}></PhonewordsList>
      <PhoneTabs
        visibleTab={visibleTab}
        setVisibleTab={setVisibleTab}
      ></PhoneTabs>
    </PhoneContainer>
  );
};

export default Phone;
