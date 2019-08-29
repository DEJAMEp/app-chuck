import React from 'react';
import './App.css';

import Card from './components/Card'

let estudiantes = [{
  nombre: 'Pablo Vilanueva',
  img:'https://i.imgur.com/RvaCpIb.png',
  rol:'Estudiante',
}, {
  nombre: 'Nadia Iraola',
  img:'https://i.imgur.com/kcStGw4.png',
  rol:'Estudiante',
}, {
  nombre: 'Sebastian Pi',
  img:'https://i.imgur.com/RvaCpIb.png',
  rol:'Estudiante',
}];

function App() {
  return (
    <div className="app">
      <div className='container'>
        <div className='row'>
          <Card nombre="Pablo Villanueva"></Card>
          <Card nombre="Nadia Iraola"></Card>
          <Card nombre="Sebastian Pi"></Card>
         <div imagen='Nadia Iraola'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
