import { useEffect } from "react";

interface Props {
  onKeyDown: () => void;
  target: string;
}

export const useKeyDown = ({ target, onKeyDown }: Props) => {
  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      console.log("keyyyy", { key });
      if (key === target) onKeyDown();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onKeyDown, target]);
};
