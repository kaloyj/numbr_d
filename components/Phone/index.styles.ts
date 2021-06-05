import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "../../utils/breakpoints";

export const SCREEN_WIDTH = {
  mobile: 275,
  tablet: 350,
};

export const PhoneContainer = styled.div`
  margin: 1rem;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  background-color: var(--black);
`;

export const ConnectedScreens = styled(motion.div)`
  height: 450px;
  width: ${SCREEN_WIDTH.mobile}px;
  position: relative;
  background-color: var(--black);
  color: var(--white);
  border-radius: 15px;
  display: flex;
  flex-flow: row nowrap;

  @media (min-width: ${breakpoints.tablet}px) {
    width: ${SCREEN_WIDTH.tablet}px;
    height: 500px;
  }
`;
