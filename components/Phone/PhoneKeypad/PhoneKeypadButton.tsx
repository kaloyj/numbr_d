import { useCallback } from "react";
import { motion } from "framer-motion";
import { PHONE_WORD_DIGIT_MAP } from "../../../utils/phoneword";
import { useKeyDown } from "./useKeyDown";
import { useVisibleTab } from "../useVisibleTab";
import { PHONE_TAB_VIEWS } from "../PhoneTabs";
import {
  KeypadBtnContainer,
  InactiveKeypadBtn,
} from "./PhoneKeypadButton.styles";

interface IPhoneKeypadButton {
  keypadDigit: string;
  onClick: (digit: string) => void;
}
const PhoneKeypadButton = ({ keypadDigit, onClick }: IPhoneKeypadButton) => {
  const visibleTab = useVisibleTab();
  const isActive = Boolean(PHONE_WORD_DIGIT_MAP[keypadDigit]);
  const handleClick = useCallback(
    () => onClick(keypadDigit),
    [onClick, keypadDigit]
  );
  const handleKeyDown = useCallback(() => {
    if (isActive && visibleTab === PHONE_TAB_VIEWS.keypad) handleClick();
  }, [isActive, handleClick, visibleTab]);

  useKeyDown({ target: keypadDigit, onKeyDown: handleKeyDown });

  return (
    <KeypadBtnContainer>
      {isActive ? (
        <motion.button
          type="button"
          onClick={handleClick}
          whileTap={{ scale: 0.9, backgroundColor: "var(--tapped-black)" }}
        >
          <p>{keypadDigit}</p>
          {PHONE_WORD_DIGIT_MAP[keypadDigit].map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </motion.button>
      ) : (
        <InactiveKeypadBtn>
          <p>{keypadDigit}</p>
        </InactiveKeypadBtn>
      )}
    </KeypadBtnContainer>
  );
};

export default PhoneKeypadButton;
