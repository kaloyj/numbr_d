import styled from "@emotion/styled";
import { css } from "@emotion/react";
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
    padding: 1rem 2rem;
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
      background-color: var(--black) !important;
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

const MaxLengthInput = css`
  &:before {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 120%);
    content: "Max length reached";
    color: var(--accent);
    font-size: 0.8rem;
  }
`;

export const InputString = styled.p`
  background: var(--black);
  color: var(--white);
  border: none;
  font-size: 1.5rem;
  margin: 0;
  flex-basis: 95%;
  overflow-wrap: break-word;
  min-width: 0;
  padding: 0.5rem 0.5rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  text-align: center;
  color: var(--red);
  font-weight: 700;
  font-size: 0.7rem;
  flex: 0 0 60%;
`;

export const InputInfoMessage = styled.p`
  margin: 0;
  color: var(--accent);
  text-align: center;
  flex: 0 0 60%;
  font-size: 0.8rem;
`;
