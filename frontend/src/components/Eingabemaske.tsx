import {useState} from "react";
//import {singleWord} from "../singleWord.ts";
import {Entry} from "../Entry.ts";
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const entry: Entry = {
            word: {
                input: input,
                translatedWord: translatedWord,
                wortart: wortart,
                genus: genus,
                pluralform: plural
            },
            beispielsatz: beispielsatz,
            synonyme: synonyme
        };

        try {
            axios.post("api", {entry})
                .then(response =>
                    console.log("Die Daten wurden erfolgreich übermittelt: ", response.data));

        } catch (error){
            console.error('Fehler beim Senden der Daten:', error);
        }


    }

    const addSynonymField = () => {
        setSynonyme([...synonyme,""]);
    };

    const handleSynonymeChange = (index:number, value:string)=>{
        const updateSynonyme = [...synonyme];
        updateSynonyme[index] = value;
        setSynonyme(updateSynonyme);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Wort:
                <label>
                    Input:
                    <input
                        type="text"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <label>
                    Übersetzung:
                    <input type="text"
                           value={translatedWord}
                           onChange={(e)=>setTranslatedWord(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Wortart:
                    <input type="text"
                           value={wortart}
                           onChange={(e)=>setWortart(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Genus:
                    <input type="text"
                           value={genus}
                           onChange={(e)=>setGenus(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Plural:
                    <input type="text"
                           value={plural}
                           onChange={(e)=>setPlural(e.target.value)}
                           required
                    />
                </label>
                <br/>
                <label>
                    Beispielsatz:
                </label>
                <textarea>
                    <input type="text"
                           value={beispielsatz}
                           onChange={(e)=>setBeispielsatz(e.target.value)}
                           required
                    />
                </textarea>
                <br/>
                <label>
                    Synonyme:

                {
                    synonyme.map((element, index)=>(
                        <input key={index}
                               type="text"
                               value={element}
                               onChange={(e)=> handleSynonymeChange(index, e.target.value)}
                        />
                    ))
                };

                <button type="button"
                        onClick={addSynonymField}> Weiteres Synonym einfügen
                </button>
                </label>
                <br/>
                <button type="submit"
                        onClick={handleSubmit}>Submit</button>


            </form>
        </div>
    );
}

export default Eingabemaske;