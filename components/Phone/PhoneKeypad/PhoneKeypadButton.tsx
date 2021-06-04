import { useCallback } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PHONE_WORD_DIGIT_MAP } from "../../../utils/phoneword";

const buttonBase = css`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: var(--white);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

  p {
    flex-basis: 100%;
    text-align: center;
    margin: 0 0 0.05rem;
    font-weight: 700;
    font-size: 1.25rem;
  }

  span {
    font-size: 0.5rem;
    margin: 0 0.05rem;
  }
`;

const InactiveKeypadBtn = styled.div`
  border: none;
  background-color: var(--black);
  ${buttonBase};
  color: var(--inactive-gray);
`;

export const KeypadBtnContainer = styled.div`
  flex-basis: 28%;
  margin: 0 0 0.8rem 4%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  button {
    border: none;
    background-color: var(--lightest-black);
    ${buttonBase};
  }
`;

interface IPhoneKeypadButton {
  keypadDigit: string;
  onClick: (digit: string) => void;
}
const PhoneKeypadButton = ({ keypadDigit, onClick }: IPhoneKeypadButton) => {
  const isActive = Boolean(PHONE_WORD_DIGIT_MAP[keypadDigit]);
  const handleClick = useCallback(
    () => onClick(keypadDigit),
    [onClick, keypadDigit]
  );

  return (
    <KeypadBtnContainer>
      {isActive ? (
        <button type="button" onClick={handleClick}>
          <p>{keypadDigit}</p>
          {PHONE_WORD_DIGIT_MAP[keypadDigit].map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </button>
      ) : (
        <InactiveKeypadBtn>
          <p>{keypadDigit}</p>
        </InactiveKeypadBtn>
      )}
    </KeypadBtnContainer>
  );
};

export default PhoneKeypadButton;
