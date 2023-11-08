// src/App.js
import  { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './Home';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx'
import Course from './Course.jsx'
import AcRecords from './AcRecords.jsx'
import Profile from './Dashboard.jsx'
import Feedback from './Feedback.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [page, setPage] = useState('home');

  function changePage(arg) {
    setPage(arg);
  }

  if(isLogin){
    return (
      <div className="App">
        <Navbar page={page} setPage={changePage}/>
        {page=='home' && (<MainContent />)}
        {page=='dashboard' && (<Dashboard />)}
        {page=='course' && (<Course />)}
        {page=='acrecords' && (<AcRecords />)}
        {page=='profile' && (<Profile />)}
        {page=='feedback' && (<Feedback />)}
        {page=='logout' && setIsLogin(false)}
      </div>
    );
  }
  else{
    return (
      <Login makeLogin={setIsLogin}/>
    );
  }
}

export default App;
