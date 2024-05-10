import {Entry} from "../Entry.ts";


type Props ={
    entry : Entry,
}

function EntryCard(props: Props ) {
    return (

        <div>
            <h1>{props.entry.word.input}</h1>
            <div>
                <label>Translation:</label>
                <h3>{props.entry.word.translatedWord +" ," + props.entry.word.wortart}</h3>
                <label>GENUS:</label>
                <h3>{props.entry.word.genus}</h3>
                <label>Pluralform/Shumtes:</label>
                <h3>{props.entry.word.pluralform}</h3>
            </div>

            <label>Beispielsatz:</label>
            <p>{props.entry.beispielsatz}</p>

            <label>Synonyme:</label>
            <h3>{props.entry.synonyme}</h3>

        </div>
    )
}

export default EntryCard;