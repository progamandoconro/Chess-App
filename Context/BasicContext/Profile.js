import React, { useContext } from 'react';
import { FileContext } from './App';

export default function Profile(props) {
  const message = useContext(FileContext);
  return <h1>{message}</h1>;
}
