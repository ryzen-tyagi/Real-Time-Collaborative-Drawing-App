import React from 'react';
import { ReactTogether } from 'react-together';
import ToDoApp from './ToDoApp';

function App() {
  return (
    <ReactTogether appId="your-app-id" apiKey="your-api-key">
      <ToDoApp />
    </ReactTogether>
  );
}

export default App;
