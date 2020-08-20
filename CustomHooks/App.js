// We can use custom hooks to share the state between components. 
// Just remember to define them with the prefix 'use', as in useMyState.

import { useState, useEffect } from 'react';

const useMyState = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(props);
  }, []);

  return state;
};

export default function App() {
  return useMyState('hola');
};
