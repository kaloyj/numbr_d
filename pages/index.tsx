import styled from "@emotion/styled";
import Phone from "../components/Phone";
import Layout from "../components/Layout";

const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  flex-basis: 70%;
  font-size: 0.9rem;
  text-align: center;
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
