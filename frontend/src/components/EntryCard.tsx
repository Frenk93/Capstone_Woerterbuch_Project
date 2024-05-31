import {Entry} from "../Entry.ts";
import "./EntryCard.css"
import axios from "axios";
import "./Flashcards.tsx";
//import {useState} from "react";

type Props ={
    entry : Entry,
}



function EntryCard(props: Props ) {

   // const [card, setCard] = useState<Entry>()


    function handleFlash () {

        axios.post("api/flashcards", props.entry).then(response => console.log(response.data))
        alert("Die Daten wurden erfolgreich übermittelt")
    }





    return (


        <div className="card">

            <h2 className="firstword">{props.entry.word.input} </h2>

                <label className="underline">Übersetzung:</label>
                <h3>{props.entry.word.translatedWord +", " + props.entry.word.wortart}</h3>
                <label className="underline">Genus:</label>
                <h3>{props.entry?.word.genus}</h3>
                <label className="underline">Pluralform/Shumes:</label>
                <h3>{props.entry?.word.pluralform}</h3>


            <label className= "underline">Beispielsatz:</label>
            <p>{props.entry.beispielsatz.replace(".", '.\n')}</p>

            <label className="underline">Synonyme:</label>
            <p>{props.entry.synonyme +" "}</p>
            <button className="mybutton" type="button" onClick={handleFlash}>⇪ Hinzufügen </button>


        </div>
    )
}

export default EntryCard;