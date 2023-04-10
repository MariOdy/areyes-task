import { useState, useCallback } from "react";

/** Helper hook to toggle between on/off boolean ƒstates */
const useToggle = (initial = false) => {
  const [state, setState] = useState<boolean>(initial);

  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle, setState] as const;
};

export default useToggle;
