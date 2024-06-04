import axios from "axios";
import {useEffect, useState} from "react";
import {Entry} from "../Entry.ts";
import "./Flashcards.css"




function Flashcards() {
const [cards, setCards] = useState<Entry[]>([]);
const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        axios.get("api/flashcards")
            .then(response => {
                console.log(response.data)
                setCards(response.data)
            })
    }, [refresh]);

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
    function refreshCards(){
        setRefresh(true);
    }

    function handleDeleteFlashcard(){
        console.log(cards[elementNumber].word.input)
        axios.delete(`api/flashcards/${cards[elementNumber]._id}`).then(handleChange).then(refreshCards)
            .catch((error) => console.log(error.message))
        alert("Löschung war erfolgreich")
    }

    return (
        <div className="flashcard-container">
            {elementNumber >= 0 ? (
                <div className="question-card">
                    {showQuestion ? (
                        <>
                            <h2>Lerne die Wörter! Meso fjalet!</h2>
                            <label className="firstword">Lernkarte:</label>
                            <h3 className="firstword">{cards[elementNumber]?.word.input}</h3>
                            <br/>
                        </>
                    ) : (
                        <>
                            <button type="button" className="delete-button" onClick={handleDeleteFlashcard}>❌</button>
                            <h2 className="firstword">{cards[elementNumber].word.input} </h2>
                            <label className="underline">Übersetzung/Përkthimi:</label>
                            <h3>{cards[elementNumber].word.translatedWord + ", " + cards[elementNumber].word.wortart}</h3>
                            <label className="underline">Genus/Gjinia gramatikore:</label>
                            <h3>{cards[elementNumber].word.genus}</h3>
                            <label className="underline">Pluralform/Shumes:</label>
                            <h3>{cards[elementNumber].word.pluralform}</h3>
                            <label className="underline">Beispielsatz/Fjalitë shembull :</label>
                            <p>{cards[elementNumber].beispielsatz.replace(".", '.\n')}</p>
                            <label className="underline">Synonyme/Sinonime:</label>
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
                    <div className="button-container">
                        <button onClick={handleChange}>
                            {showQuestion ? 'Zeige Antwort' : 'Zurück zur Frage'}
                        </button>
                        <button onClick={handleKnewIt}>Ich wusste es/E dija une</button>
                        <br/>
                    </div>

                )}
                <label className="count">Flashcard: {elementNumber}/{number}</label>
            </div>
        </div>

    );
}

export default Flashcards;
