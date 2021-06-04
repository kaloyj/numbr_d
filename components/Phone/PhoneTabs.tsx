import { Dispatch } from "react";
import styled from "@emotion/styled";

enum tabKeys {
  CONTACTS = "contacts",
  KEYPAD = "keypad",
  RESULTS = "results",
}

type ITabViews = {
  [key in tabKeys]: string;
};

export const PHONE_TAB_VIEWS: ITabViews = {
  contacts: "Contact",
  keypad: "Keypad",
  results: "Results",
};

const PhoneTabsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.5rem;
  background-color: var(--black);
  display: flex;
  flex-flow: row wrap;
`;

interface PhoneTabProps {
  isSelected: boolean;
}

const PhoneTab = styled.button<PhoneTabProps>`
  flex-basis: 33.33%;
  background: none;
  border: none;
  color: ${(props) =>
    props.isSelected ? "var(--accent)" : "var(--inactive-gray)"};
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

  span {
    flex-basis: 80%;
    text-align: center;
    font-size: 0.6rem;
    font-weight: 700;
  }

  svg path {
    fill: ${(props) =>
      props.isSelected ? "var(--accent)" : "var(--inactive-gray)"};
  }
`;

const PhoneTabSVG = styled.svg`
  width: 16px;
  height: 16px;
  margin-bottom: 0.2rem;
  path {
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
`;

interface IPhoneTabs {
  visibleTab: string;
  setVisibleTab: Dispatch<string>;
}

const PhoneTabs = ({ visibleTab, setVisibleTab }: IPhoneTabs) => {
  return (
    <PhoneTabsContainer>
      <PhoneTab
        isSelected={visibleTab === PHONE_TAB_VIEWS.contacts}
        onClick={() => setVisibleTab(PHONE_TAB_VIEWS.contacts)}
      >
        {/* svgs from https://github.com/tailwindlabs/heroicons */}
        <PhoneTabSVG
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" />
        </PhoneTabSVG>
        <span>{PHONE_TAB_VIEWS.contacts}</span>
      </PhoneTab>
      <PhoneTab
        isSelected={visibleTab === PHONE_TAB_VIEWS.keypad}
        onClick={() => setVisibleTab(PHONE_TAB_VIEWS.keypad)}
      >
        <PhoneTabSVG
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z" />
          <path d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z" />
          <path d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z" />
          <path d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z" />
        </PhoneTabSVG>
        <span>{PHONE_TAB_VIEWS.keypad}</span>
      </PhoneTab>
      <PhoneTab
        isSelected={visibleTab === PHONE_TAB_VIEWS.results}
        onClick={() => setVisibleTab(PHONE_TAB_VIEWS.results)}
      >
        <PhoneTabSVG
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H4C3.44772 5 3 4.55228 3 4ZM3 8C3 7.44772 3.44772 7 4 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H4C3.44772 9 3 8.55228 3 8ZM3 12C3 11.4477 3.44772 11 4 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H4C3.44772 13 3 12.5523 3 12ZM3 16C3 15.4477 3.44772 15 4 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16Z" />
        </PhoneTabSVG>
        <span>{PHONE_TAB_VIEWS.results}</span>
      </PhoneTab>
    </PhoneTabsContainer>
  );
};

export default PhoneTabs;
