import fs from "fs";

interface PhonewordMap {
  [key: string]: string[];
}

export const getPhonewordsMemo = () => {
  let memo: PhonewordMap = {};

  try {
    const rawPhonewords = fs.readFileSync("phonewords-memo.json");
    memo = JSON.parse(rawPhonewords.toString());
  } catch (e) {
    // no existing memo yet, do nothing
    // proceeding ...
  }

  return memo;
};

export const savePhoneWordsMemo = (numStr: string, phonewords: string[]) => {
  const currentPhonewords = getPhonewordsMemo();

  fs.writeFile(
    "phonewords-memo.json",
    JSON.stringify({ ...currentPhonewords, [numStr]: phonewords }, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Write successful");
    }
  );
};
