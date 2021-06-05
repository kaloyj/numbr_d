import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { PhoneScreen } from "../../../styles/shared";
import { KeypadBtnContainer } from "./PhoneKeypadButton.styles";
import { breakpoints } from "../../../utils/breakpoints";

export const KeypadPhoneScreen = styled(PhoneScreen)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 1rem;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 2rem;
  }
`;

export const KeypadContainer = styled.div`
  flex: 0 0 90%;
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.8rem;
  align-items: center;
`;

export const SubmitBtnContainer = styled(KeypadBtnContainer)`
  margin-left: 36%;
  margin-bottom: 0;

  button {
    background-color: var(--green);
    font-weight: 700;
    transition: background-color 0.3s ease;

    &:disabled {
      background-color: var(--black);
      color: var(--inactive-gray);
    }
  }
`;

export const BackspaceBtn = styled(motion.button)`
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

export const InputString = styled.p`
  background: var(--black);
  color: var(--white);
  border: none;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.75rem 0 0;
  flex-basis: 95%;
  overflow-wrap: break-word;
  min-width: 0;
  height: 3rem;
  padding: 0 0.5rem;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  text-align: center;
  color: var(--red);
  font-weight: 700;
  font-size: 0.7rem;
  flex: 0 0 60%;
`;
