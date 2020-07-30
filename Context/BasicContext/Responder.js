import React from 'react';
import { Ask } from './App';
import Profile from './Profile';
function Responder() {
  return (
    <div>
      <div>
        <Ask>
          <Profile />
        </Ask>
      </div>
    </div>
  );
}

export default Responder;
