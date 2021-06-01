import React, { useState } from 'react';
import data from './data';
import List from './List';
import Button from './Components/Button'
const App = () =>{

  const onClickClearBirthDays = () => console.log('Has Hecho click en el botón');

  return (
    
  <main>
    <section className= "container">
      <h3>0 birthdays today</h3>
      <List/>
      <Button onClick = {onClickClearBirthDays}/>

    </section>



  </main>

  

  ) 
}




export default App;
