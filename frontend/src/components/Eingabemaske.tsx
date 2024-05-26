import {FormEvent, useState} from "react";
//import {singleWord} from "../singleWord.ts";
import axios from "axios";



function Eingabemaske() {
//const [word, setWord]= useState<singleWord>();
const [input, setInput]=useState("");
const [translatedWord, setTranslatedWord] = useState("");
const [wortart, setWortart] = useState("");
const [genus, setGenus] = useState("");
const [plural, setPlural] = useState("");
const [beispielsatz, setBeispielsatz] = useState("");
const [synonyme, setSynonyme] = useState<string[]>([]);


    const addSynonymField = () => {
        setSynonyme([...synonyme,""]);
    };

    const deleteSynonymField = (index: number) => {
        const newSynonyme = [...synonyme];
        newSynonyme.splice(index, 1);
        setSynonyme(newSynonyme);
    };

    function submit (e: FormEvent){
        e.preventDefault();
        axios.post(
            "api", {
                word: {
                    input: input,
                    translatedWord: translatedWord,
                    wortart: wortart,
                    genus: genus,
                    pluralform: plural
                },
                beispielsatz: beispielsatz,
                synonyme: synonyme
            }
        ) .then(response => console.log(response.data))
    }


    const handleSynonymeChange = (index:number, value:string)=>{
        const updateSynonyme = [...synonyme];
        updateSynonyme[index] = value;
        setSynonyme(updateSynonyme);
    }

    return (

        <body>



        <div className="entry-container">
            <h2>Entry-Eingabe</h2>
            <form onSubmit={submit}>
                <label>
                    Input:
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <label>
                    Übersetzung:
                    <input type="text"
                           value={translatedWord}
                           onChange={(e) => setTranslatedWord(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Wortart:
                    <input type="text"
                           value={wortart}
                           onChange={(e) => setWortart(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Genus:
                    <input type="text"
                           value={genus}
                           onChange={(e) => setGenus(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Plural:
                    <input type="text"
                           value={plural}
                           onChange={(e) => setPlural(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Beispielsatz:
                </label>
                <textarea
                    value={beispielsatz}
                    onChange={(e) => setBeispielsatz(e.target.value)}
                    required
                />
                <br/>
                <label className="synonym-input">
                    Synonyme:

                    {
                        synonyme.map((element, index) => (
                            <input key={index}
                                   type="text"
                                   value={element}
                                   onChange={(e) => handleSynonymeChange(index, e.target.value)}
                            />
                        ))
                    }

                    <button type="button"
                            onClick={addSynonymField}> Weiteres Synonym einfügen
                    </button>
                    <button type="button"
                            onClick={deleteSynonymField}> ❌
                    </button>
                </label>
                <br/>
                <button type="submit"
                        onClick={submit}>Submit
                </button>


            </form>
        </div>
        </body>
    );
}

export default Eingabemaske;