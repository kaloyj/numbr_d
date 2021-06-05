import { createContext, useContext } from "react";
import { PHONE_TAB_VIEWS } from "./PhoneTabs";

export const VisibleTabContext = createContext(PHONE_TAB_VIEWS.keypad);

export const useVisibleTab = () => useContext(VisibleTabContext);
