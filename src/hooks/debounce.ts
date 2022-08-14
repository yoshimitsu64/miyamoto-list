import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 500): string {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    console.log("asdasda");
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
}
