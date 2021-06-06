import { useCallback, useState, Dispatch } from "react";
import { PhoneScreenHeader } from "../../../styles/shared";
import { Data } from "../../../types/generate-api";
import { FILTERS } from "../../../utils/phoneword";
import {
  PhonewordsListContainer,
  ListContainer,
  ResultsLabel,
  NumberString,
  ResultsListContainer,
  FiltersContainer,
  FilterButton,
} from "./index.styles";

interface IPhonewordsList {
  phonewords: string[];
  filter: string;
  query: string;
  setPhonewords: Dispatch<string[]>;
  setFilter: Dispatch<string>;
}

const PhonewordsList = ({
  phonewords,
  filter,
  query,
  setPhonewords,
  setFilter,
}: IPhonewordsList) => {
  const handleFilterResult = useCallback(
    async (filterValue: string) => {
      setFilter(filterValue);
      // we expect the request to be valid
      // since we only call this cb
      // when a valid request has been generated
      const result: Data = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ numStr: query, filter: filterValue }),
      }).then((res) => res.json());

      setPhonewords(result.phonewords);
    },
    [query]
  );

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
            <FiltersContainer data-cy="FiltersContainer">
              <p>Filters:</p>
              {Object.keys(FILTERS).map((filterType) => {
                const isSelected = filter === FILTERS[filterType];
                return (
                  <FilterButton
                    isSelected={isSelected}
                    key={filterType}
                    disabled={isSelected}
                    onClick={() => handleFilterResult(FILTERS[filterType])}
                  >
                    {FILTERS[filterType]}
                  </FilterButton>
                );
              })}
            </FiltersContainer>

            {phonewords.length === 0 ? (
              <div>No results found.</div>
            ) : (
              <ResultsListContainer data-cy="PhonewordsList">
                {phonewords.map((phoneword) => (
                  <li key={phoneword}>{phoneword}</li>
                ))}
              </ResultsListContainer>
            )}
          </>
        ) : (
          <div>No searched query, yet.</div>
        )}
      </ListContainer>
    </PhonewordsListContainer>
  );
};

export default PhonewordsList;
