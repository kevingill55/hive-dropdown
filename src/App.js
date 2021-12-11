import './App.css';
import React from 'react';
import Dropdown from './Dropdown';
import { menuItems } from './items';

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <h1>Hive Take-Home Challenge: Dropdown Menu</h1>
        <div style={{ padding: '12px' }}>Dropdown with Single Option</div>
        <Dropdown items={menuItems} />
        <div style={{ padding: '20px'}} />
        <div style={{ padding: '12px' }}>Dropdown with Multiple Options</div>
        <Dropdown items={menuItems} multiple/>
      </div>
    </div>
  );
};

export default App;
