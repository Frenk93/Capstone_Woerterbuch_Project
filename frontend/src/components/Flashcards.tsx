import axios from "axios";
import {useEffect, useState} from "react";
import {Entry} from "../Entry.ts";
import "./EntryCard.css"


function Flashcards() {
const [cards, setCards] = useState<Entry[]>([]);

    useEffect(() => {
        axios.get("api/flashcards")
            .then(response => {
                console.log(response.data)
                setCards(response.data)
            })
    }, []);

    const number : number = cards?.length;
    const [elementNumber, setElementNumber] = useState(number);
    const [showQuestion, setShowQuestion] = useState(true);

    const handleKnewIt = () => {
        if(number > 0){
            setShowQuestion(true);
            setElementNumber(elementNumber +1);

        }

    }


    function handleChange() {
        if(showQuestion)
        setShowQuestion(false);
        else
            setShowQuestion(true);


    }

    return (
        <div>
            {elementNumber >= 0 ? (
                <div className="card">
                    {showQuestion ? (
                        <>
                            <h2>Lerne die Wörter! Meso fjalet!</h2>
                            <label className="underline">Lernkarte:</label>
                            <h3>{cards[elementNumber]?.word.input}</h3>
                        </>
                    ) : (
                        <>
                            <h2 className="firstword">{cards[elementNumber].word.input} </h2>
                            <label className="underline">Übersetzung:</label>
                            <h3>{cards[elementNumber].word.translatedWord + ", " + cards[elementNumber].word.wortart}</h3>
                            <label className="underline">Genus:</label>
                            <h3>{cards[elementNumber].word.genus}</h3>
                            <label className="underline">Pluralform/Shumes:</label>
                            <h3>{cards[elementNumber].word.pluralform}</h3>
                            <label className="underline">Beispielsatz:</label>
                            <p>{cards[elementNumber].beispielsatz.replace(".", '.\n')}</p>
                            <label className="underline">Synonyme:</label>
                            <p>{cards[elementNumber].synonyme + " "}</p>
                        </>
                    )}
                </div>
            ) : (
                <div className="card">
                    <h2>Keine Karte mehr vorhanden</h2>
                </div>
            )}
            <div>
                {elementNumber >= 0 && (
                    <>
                        <button onClick={handleChange}>
                            {showQuestion ? 'Zeige Antwort' : 'Zurück zur Frage'}
                        </button>
                        <button onClick={handleKnewIt}>Ich wusste es</button>
                        <label>Verbleibende Karten: {elementNumber}/{number}</label>
                    </>
                )}
            </div>
        </div>

    );
}

export default Flashcards;
