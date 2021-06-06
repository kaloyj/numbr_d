import styled from "@emotion/styled";
import { breakpoints } from "../../../utils/breakpoints";
import { PhoneScreen } from "../../../styles/shared";

export const PhonewordsListContainer = styled(PhoneScreen)`
  padding-bottom: 2.5rem;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 2rem 1.5rem;
  }
`;

export const ResultsLabel = styled.p`
  margin: 0;
  font-family: var(--font-light);
  font-size: 0.8rem;

  span {
    font-family: var(--font-bold);
  }
`;

export const ResultsListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;

  li {
    border: 1px solid var(--accent);
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const NumberString = styled.h3`
  margin: 0.25rem 0;
  flex-basis: 100%;
  font-size: 1.75rem;
  overflow-wrap: break-word;
  min-width: 50%;
`;

export const FiltersContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 1rem;

  p {
    margin: 0;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
`;

interface IFilterButton {
  isSelected: boolean;
}

export const FilterButton = styled.button<IFilterButton>`
  border: none;
  color: var(--white);
  background-color: ${(props) =>
    props.isSelected ? "var(--accent)" : "var(--light-black)"};
  margin-right: 0.5rem;
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-weight: ${(props) => (props.isSelected ? "700" : "400")};
`;
