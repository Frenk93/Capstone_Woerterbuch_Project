import {Entry} from "../Entry.ts";
import "./EntryCard.css"

type Props ={
    entry : Entry,
}

function EntryCard(props: Props ) {
    return (

        <div className="card">
            <h2>{props.entry.word.input}</h2>
            <div>
                <label>Translation:</label>
                <h3>{props.entry.word.translatedWord +" ," + props.entry.word.wortart}</h3>
                <label>Genus:</label>
                <h3>{props.entry?.word.genus}</h3>
                <label>Pluralform/Shumtes:</label>
                <h3>{props.entry?.word.pluralform}</h3>
            </div>

            <label>Beispielsatz:</label>
            <p>{props.entry.beispielsatz}</p>

            <label>Synonyme:</label>
            <p>{props.entry.synonyme}</p>

        </div>
    )
}

export default EntryCard;