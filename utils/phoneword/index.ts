interface PhonewordDigitMap {
  [key: string]: string[];
}

export const isValidNumString = (numString: string) =>
  /^[2-9]+$/.test(numString);

export const PHONE_WORD_DIGIT_MAP: PhonewordDigitMap = {
  "2": ["A", "B", "C"],
  "3": ["D", "E", "F"],
  "4": ["G", "H", "I"],
  "5": ["J", "K", "L"],
  "6": ["M", "N", "O"],
  "7": ["P", "Q", "R", "S"],
  "8": ["T", "U", "V"],
  "9": ["W", "X", "Y", "Z"],
};

interface IFilters {
  [key: string]: string;
}

export const FILTERS: IFilters = {
  all: "All",
  dictionary: "In Dictionary",
};
