import { PhoneScreen, PhoneScreenHeader } from "../../../styles/shared";
import {
  ContactProfile,
  ContactProfileInfoName,
  ContactProfileInfoDesc,
  ContactItem,
  ContactItemHeader,
  ContactItemLink,
} from "./index.styles";

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
