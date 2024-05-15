
import "./singleWord"
import './App.css'
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import EntryCard from "./components/EntryCard";
import {Entry} from "./Entry.ts";
import axios from "axios";
import Menubar from "./components/Menubar.tsx";

function App() {
//const [entry , setEntry] = useState<Entry[]>([]);
const[entry, setEntry] = useState<Entry>();
const [singleEntry, setSingleEntry]=useState("");

    useEffect(() => {
            if (singleEntry) {
                axios.get(`api/${singleEntry}`)
                    .then(response => {
                        setEntry(response.data);
                    })
                    .catch(error => {
                        console.error('Fehler beim Abrufen der Daten:', error);
                    });
            }
        }, [singleEntry]);



    function handleSearch(event :ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setSingleEntry(event.target.value);


}

function handleSubmit(event: FormEvent<HTMLFormElement>){
   // event.preventDefault(); // Wichtig, damit sich die Seite nicht refresht
    console.log(event);


}



  return(

<div>
      <body className="container">
      <div className="nav">
          <Menubar/>

      </div>

      <div className="header">

      <h1>Wörterbuch</h1>
              <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      placeholder="Suche nach einem Wort..."
                      value={singleEntry}
                      onChange={handleSearch}
                      className="search-input"
                  />
              </form>


          </div>
      <div className="content">

      <div className="tiles-container">

          Dein Treffer:
          {

              entry && (
                  <div>
                      <EntryCard entry={entry}/>
                  </div>
              )

          }
      </div>

      </div>

      </body>

      <footer>
          <div>
              <p className="rights">©2024 All Rights reserved Frenk Shabani </p>
          </div>
      </footer>

  </div>
  )
}

export default App
