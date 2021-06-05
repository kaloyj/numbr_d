import styled from "@emotion/styled";

export const PhoneTabsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  background-color: var(--transparent-black);
  display: flex;
  flex-flow: row wrap;
`;

interface PhoneTabProps {
  isSelected: boolean;
}

export const PhoneTab = styled.button<PhoneTabProps>`
  flex-basis: 33.33%;
  background: none;
  border: none;
  color: ${(props) =>
    props.isSelected ? "var(--accent)" : "var(--inactive-gray)"};
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  padding-top: 0.3rem;

  span {
    flex-basis: 100%;
    text-align: center;
    font-size: 0.6rem;
    font-weight: 700;
  }

  svg path {
    fill: ${(props) =>
      props.isSelected ? "var(--accent)" : "var(--inactive-gray)"};
  }
`;

export const PhoneTabSVG = styled.svg`
  width: 16px;
  height: 16px;
  margin-bottom: 0.2rem;
  path {
    fill-rule: evenodd;
    clip-rule: evenodd;
  }
`;
