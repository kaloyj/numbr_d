import styled from "@emotion/styled";
import Phone from "../components/Phone";
import Layout from "../components/Layout";
import { breakpoints } from "../utils/breakpoints";

const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  margin: 0;
  flex-basis: 70%;
  font-size: 0.9rem;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    flex-basis: 100%;
  }
`;

export default function Home() {
  return (
    <Layout>
      <HeaderTitle>numbr_d</HeaderTitle>
      <Description>generate phonewords from any number</Description>
      <Phone></Phone>
    </Layout>
  );
}
