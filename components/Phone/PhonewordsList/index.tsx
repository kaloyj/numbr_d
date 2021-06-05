import { PhoneScreenHeader } from "../../../styles/shared";
import {
  PhonewordsListContainer,
  ListContainer,
  ResultsLabel,
  NumberString,
  ResultsListContainer,
} from "./index.styles";

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
