import { Dispatch, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { GenerateApiResult, isErrorData } from "../../../types/generate-api";
import { PhoneScreen } from "../PhoneContacts";
import PhoneKeypadButton, { KeypadBtnContainer } from "./PhoneKeypadButton";

const KeypadPhoneScreen = styled(PhoneScreen)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
`;

const KeypadContainer = styled.div`
  flex: 0 0 90%;
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.8rem;
  align-items: center;
`;

const SubmitBtnContainer = styled(KeypadBtnContainer)`
  margin-left: 36%;
  margin-bottom: 0;

  button {
    background-color: var(--green);
    font-weight: 700;
  }
`;

const BackspaceBtn = styled.button`
  flex-basis: 28%;
  margin-left: 4%;
  background-color: var(--black);
  border: none;
  height: 40px;
  width: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  path {
    fill: var(--white);
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
`;

const InputField = styled.input`
  background: var(--black);
  color: var(--white);
  border: none;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.75rem 0 0;
  flex-basis: 90%;
  min-width: 0;
  height: 3rem;
  padding: 0 1rem;
`;

const ErrorMessage = styled.p`
  margin: 0;
  text-align: center;
  color: var(--red);
  font-weight: 700;
  font-size: 0.7rem;
  flex: 0 0 60%;
`;

const KEYPAD_DIGITS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "0",
  "#",
];

interface IPhoneKeypad {
  setPhonewords: Dispatch<string[]>;
  setQuery: Dispatch<string>;
}

const PhoneKeypad = ({ setPhonewords, setQuery }: IPhoneKeypad) => {
  const [numStr, setNumStr] = useState("");
  const [error, setError] = useState("");

  const handleChangeNumStr = useCallback((e) => {
    setError("");
    setNumStr(e.target.value);
  }, []);
  const handleKeypadClick = useCallback((digit: string) => {
    setError("");
    setNumStr((currentNumStr) => `${currentNumStr}${digit}`);
  }, []);
  const handleBackspace = useCallback(() => {
    setError("");
    setNumStr((currentNumStr) => currentNumStr.slice(0, -1));
  }, []);
  const handleSubmit = useCallback(async () => {
    setError("");
    const result: GenerateApiResult = await fetch("/api/generate", {
      method: "POST",
      body: numStr,
    }).then((res) => res.json());

    if (isErrorData(result)) setError(result.message);
    else {
      setQuery(numStr);
      setPhonewords(result.phonewords);
    }
  }, [numStr]);

  return (
    <KeypadPhoneScreen>
      <InputField
        type="text"
        value={numStr}
        onChange={handleChangeNumStr}
        aria-label="Number to generate phonewords"
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <KeypadContainer>
        {KEYPAD_DIGITS.map((digit) => (
          <PhoneKeypadButton
            key={digit}
            keypadDigit={digit}
            onClick={handleKeypadClick}
          />
        ))}

        <SubmitBtnContainer>
          <button onClick={handleSubmit} disabled={numStr.length === 0}>
            Go
          </button>
        </SubmitBtnContainer>
        {numStr.length > 0 && (
          <BackspaceBtn onClick={handleBackspace}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.70711 4.87868C7.26972 4.31607 8.03278 4 8.82843 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H8.82843C8.03278 16 7.26972 15.6839 6.70711 15.1213L2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289L6.70711 4.87868ZM10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289C8.90237 7.68342 8.90237 8.31658 9.29289 8.70711L10.5858 10L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L12 11.4142L13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L13.4142 10L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L12 8.58579L10.7071 7.29289Z" />
            </svg>
          </BackspaceBtn>
        )}
      </KeypadContainer>
    </KeypadPhoneScreen>
  );
};

export default PhoneKeypad;
