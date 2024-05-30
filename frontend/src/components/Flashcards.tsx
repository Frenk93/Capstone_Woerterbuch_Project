import axios from "axios";
import {useEffect, useState} from "react";
import {Entry} from "../Entry.ts";
import "./EntryCard.css"


function Flashcards() {
const [cards, setCards] = useState<Entry[]>([
    {
        id: "",
        word: {
            input: "",
            translatedWord: "",
            wortart: "",
            genus: "",
            pluralform: ""
        },
        beispielsatz: "",
        synonyme: [""]
    }]);


    useEffect(() => {
        axios.get("api/flashcards")
            .then(response => {
                console.log(response.data)
                setCards(response.data)
            })
    }, []);


    const [elementNumber, setElementNumber] = useState(cards.length);
    const [showQuestion, setShowQuestion] = useState(true);

    const handleKnewIt = () => {
        if(elementNumber > 0){
            setElementNumber(elementNumber -1);
            setShowQuestion(showQuestion);


        }

    }


    function handleChange() {
        setShowQuestion(!showQuestion);
    }

    return (
        <div>
            {showQuestion && (
                <div className="card">
                    <h2>Lerne die Wörter! Meso fjalet!</h2>
                    <label className="underline">Lernkarte:</label>
                    <h3>{cards[elementNumber]?.word.input}</h3>

                </div>
            )}
            {!showQuestion && (
                <div className="card">
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

                </div>
            )}
            <button type="button" onClick={handleKnewIt}>✅</button>
            <button type="button" onClick={handleChange}>➡</button>


        </div>


    );
}

export default Flashcards;
