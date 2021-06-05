import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const buttonBase = css`
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

export const InactiveKeypadBtn = styled.div`
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
