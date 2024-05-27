import {Entry} from "../Entry.ts";
import "./EntryCard.css"

type Props ={
    entry : Entry,
}

function EntryCard(props: Props ) {
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
            <p>{props.entry.beispielsatz}</p>

            <label className="underline">Synonyme:</label>
            <p>{props.entry.synonyme}</p>
            <button className="mybutton">⇪ Hinzufügen </button>


        </div>
    )
}

export default EntryCard;