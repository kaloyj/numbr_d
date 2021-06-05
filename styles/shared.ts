import styled from "@emotion/styled";
import { breakpoints } from "../utils/breakpoints";

export const PhoneScreen = styled.div`
  height: calc(100% - 2.75rem);
  width: 100%;
  flex-shrink: 0;
  overflow: auto;
  position: relative;
  padding-top: 2.6rem;
`;

export const PhoneScreenHeader = styled.h3`
  width: 100%;
  background-color: var(--light-black);
  height: 2.5rem;
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: ${breakpoints.tablet}px) {
    height: 3.5rem;
    font-size: 1rem;
  }
`;
