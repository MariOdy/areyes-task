import { useState, useRef, useEffect } from "react";

/** Stores ref in the state and triggers a rerender whenever ref changes */
function useRefState<T extends HTMLElement>() {
  const [state, setState] = useState<T | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    setState(ref.current);
  }, []);

  return [ref, state] as const;
}

export default useRefState;
