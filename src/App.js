import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/firstapp/Footer/Footer';
import Customs from './components/customs/Customs';
import Section from './components/Section/Section';
import Counter from './components/Counter/Counter';


let age = 20;
let greetings = "Hola!"
let info = "this is the content of section and it will be displayed on the react app ";


function App() {

  

  return (
    <div className="App">
      <Header />
      
        <div id='content'>
        <Counter/>
        </div>
  
      <div className='cards'>
        <div className='card card-1'>
        <Customs name= "Zeel" greetings={greetings} age={age}/> 
        </div>

        <div className='card card-2'>
        <Section info={info} /> 
        </div>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;

