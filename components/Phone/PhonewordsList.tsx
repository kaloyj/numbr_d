import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";
import { PhoneScreen, PhoneScreenHeader } from "./PhoneContacts";

const PhonewordsListContainer = styled(PhoneScreen)`
  padding-bottom: 2.5rem;
`;
const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 2rem 1.5rem;
  }
`;

const ResultsLabel = styled.p`
  margin: 0;
  font-family: var(--font-light);
  font-size: 0.8rem;

  span {
    font-family: var(--font-bold);
  }
`;

const ResultsListContainer = styled.ul`
  list-style-type: none;
  margin: 1rem 0 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;

  li {
    border: 1px solid var(--accent);
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
  }
`;

const NumberString = styled.h3`
  margin: 0.25rem 0;
  flex-basis: 100%;
  font-size: 1.75rem;
  overflow-wrap: break-word;
  min-width: 50%;
`;

interface IPhonewordsList {
  phonewords: string[];
  query: string;
}

const PhonewordsList = ({ phonewords, query }: IPhonewordsList) => {
  return (
    <PhonewordsListContainer>
      <PhoneScreenHeader>Results</PhoneScreenHeader>
      <ListContainer>
        {query ? (
          <>
            <ResultsLabel>
              Showing <span>{phonewords.length}</span> results for
            </ResultsLabel>
            <NumberString>{query}</NumberString>
            <ResultsListContainer data-cy="PhonewordsList">
              {phonewords.map((phoneword) => (
                <li key={phoneword}>{phoneword}</li>
              ))}
            </ResultsListContainer>
          </>
        ) : (
          <div>No searched query, yet.</div>
        )}
      </ListContainer>
    </PhonewordsListContainer>
  );
};

export default PhonewordsList;
