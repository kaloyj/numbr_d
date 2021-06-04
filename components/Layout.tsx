import { ReactNode } from "react";
import Head from "next/head";
import styled from "@emotion/styled";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0.5rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

interface ILayout {
  title?: string;
  description?: string;
  children: ReactNode;
}

const DEFAULT_META = {
  title: "numbr_d",
  description:
    "A simple phonewords generator. Simply enter a number string and generate. ✏️",
};

const Layout = ({
  title = DEFAULT_META.title,
  description = DEFAULT_META.description,
  children,
}: ILayout) => {
  return (
    <>
      <Head>
        {/* favicon code by https://css-tricks.com/emojis-as-favicons/ */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
