import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Dashboard />
        </div>
      </div>
    </Router>
  );
}

export default App;