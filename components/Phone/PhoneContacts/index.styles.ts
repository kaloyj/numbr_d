import styled from "@emotion/styled";
import { breakpoints } from "../../../utils/breakpoints";

export const ContactProfile = styled.div`
  width: 100%;
  padding: 0.9rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 2rem 1.4rem;
  }
`;

export const ContactProfileInfoName = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-bold);
  margin: 0;
`;

export const ContactProfileInfoDesc = styled.p`
  font-size: 0.7rem;
  font-family: var(--font-light);
  margin: 0 0 0 0.05rem;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ContactItemHeader = styled.div`
  flex-basis: 100%;
  padding: 0.25rem 1rem;
  font-family: var(--font-bold);
  background-color: var(--light-black);
  height: 1.75rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 0.5rem 1.5rem;
  }
`;

export const ContactItemLink = styled.a`
  flex-basis: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: auto;
  color: var(--accent);

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 0.5rem 1.5rem;
  }
`;
