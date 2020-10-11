import React from 'react';
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
