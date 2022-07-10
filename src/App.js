import { useState } from "react";
import data from './assets/data';
import List from "./components/List";
import './App.css';

function App() {

  const[people, setPeople] = useState(data)

  return (
  <>
  <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
    <List title="Today it's your day!" people={people}/>
    <button onClick={()=> setPeople([])}>Clear all</button>
    </section>
  </main>
   
  </>
   
  );
}

export default App;
