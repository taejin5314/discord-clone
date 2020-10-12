import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />
          {/* Chat */}
          <Chat />
        </>
      ) : (
          <>
            <Login />
          </>
        )}
    </div>
  );
}

export default App;
