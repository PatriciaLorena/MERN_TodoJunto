import React from 'react';
import './App.css';
import Header from './assets/Components/Header';
import Navigation from './assets/Components/Navigation';
import Main from './assets/Components/Main';
import SubContents from './assets/Components/SubContents';
import Advertisement from './assets/Components/Advertisement';
 
                

function App() {
  return (
    <div className="app">
      <Header/>
      <Navigation/>
      <div>
      <Main>
        <div className='main-content'>
        <SubContents />
        <SubContents />
        <SubContents />
        </div>
        <Advertisement/>
      </Main>
      </div>
    </div>
  );
}
                
export default App;