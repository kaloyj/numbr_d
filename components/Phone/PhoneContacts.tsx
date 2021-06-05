import styled from "@emotion/styled";
import { breakpoints } from "../../utils/breakpoints";

export const PhoneScreen = styled.div`
  height: calc(100% - 2.75rem);
  width: 100%;
  flex-shrink: 0;
  overflow: auto;
  position: relative;
  padding-top: 2.6rem;
`;

export const PhoneScreenHeader = styled.h3`
  width: 100%;
  background-color: var(--light-black);
  height: 2.5rem;
  margin: 0;
  font-size: 0.8rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: ${breakpoints.tablet}px) {
    height: 3.5rem;
    font-size: 1rem;
  }
`;

const ContactProfile = styled.div`
  width: 100%;
  padding: 0.9rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 2rem 1.4rem;
  }
`;

const ContactProfileInfoName = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-bold);
  margin: 0;
`;

const ContactProfileInfoDesc = styled.p`
  font-size: 0.7rem;
  font-family: var(--font-light);
  margin: 0 0 0 0.05rem;
`;

const ContactItem = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ContactItemHeader = styled.div`
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

const ContactItemLink = styled.a`
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

const CONTACTS = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/carlo-janea-2880a2132/",
  },
  {
    title: "Portfolio",
    link: "https://carlojanea.com/",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/carlojanea/",
  },
];

const PhoneContacts = () => {
  return (
    <PhoneScreen data-cy="PhoneContactsScreen">
      <PhoneScreenHeader>Contacts</PhoneScreenHeader>

      <ContactProfile>
        {/* svg from https://boringavatars.com/ */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
        >
          <mask
            id="mask__beam"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" rx="20" fill="white"></rect>
          </mask>
          <g mask="url(#mask__beam)" fill="transparent">
            <rect width="36" height="36" rx="20" fill="#147efb"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(4 4) rotate(350 18 18) scale(1.2)"
              fill="#1b325f"
              rx="6"
            ></rect>
            <g transform="translate(6 -2) rotate(0 18 18)">
              <path
                d="M15 21c2 1 4 1 6 0"
                stroke="white"
                fill="none"
                strokeLinecap="round"
              ></path>
              <rect
                x="14"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="white"
              ></rect>
              <rect
                x="20"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="white"
              ></rect>
            </g>
          </g>
        </svg>

        <div className="ml-1">
          <ContactProfileInfoName>Carlo Janea</ContactProfileInfoName>
          <ContactProfileInfoDesc>Carlo's contacts</ContactProfileInfoDesc>
        </div>
      </ContactProfile>

      {CONTACTS.map(({ title, link }) => (
        <ContactItem key={title}>
          <ContactItemHeader>{title.charAt(0)}</ContactItemHeader>
          <ContactItemLink
            data-cy="ContactItemLink"
            target="_blank"
            href={link}
            rel="noreferrer noopener"
          >
            {title}
          </ContactItemLink>
        </ContactItem>
      ))}
    </PhoneScreen>
  );
};

export default PhoneContacts;
