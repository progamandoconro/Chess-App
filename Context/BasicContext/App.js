import React, { createContext, useState } from 'react';

const FileContext = createContext();
const { Provider } = FileContext;

function Ask({ children }) {
  const message = useState('que tal');

  return (
    <div>
      <Provider value={message}>{children} </Provider>
    </div>
  );
}

export { Ask, FileContext };
