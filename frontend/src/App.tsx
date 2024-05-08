
import "./singleWord"
import './App.css'
import {useEffect, useState} from "react";
import EntryCard from "./components/EntryCard";
import {Entry} from "./Entry.ts";
import axios from "axios";

function App() {
const [entry , setEntry] = useState<Entry[]>([])

useEffect(
    () => {
      axios.get("/api")
          .then(response  =>{
            setEntry(response.data)
      })
    }, []
);
  const demoentry: Entry = {
  word: {input: "", translatedWord: "", wortart: "", genus: "", pluralform: ""},
    synonyme : [""],
    beispielsatz: "",

  }

  if(!entry){
    return <EntryCard entry={demoentry}/>
  }


  return <>

    <h1>Frenks Wörterbuch: </h1>
    {
      entry.map(element  => <EntryCard entry = {element}/>)
    }
    </>
}

export default App
