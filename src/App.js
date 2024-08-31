import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import UserDetail from './UserDetail';
import UserList from './UserList';
import './App.css';


function App() {
  return (
  <Router>
<Routes>
<Route path='/' element = {<UserList/>} />
<Route path='user/:id' element = { <UserDetail/>}/>
 
</Routes>

  </Router>
  );
}

export default App;
