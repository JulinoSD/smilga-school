import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeolpe] = useState(data)
  return (
  <main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={()=> setPeolpe([])}>Clear all</button>
    </section>
  </main>
  )
}

export default App;
