import {ChangeEvent, FormEvent, useEffect, useState} from "react";
//import {singleWord} from "../singleWord.ts";
import axios from "axios";
//import {Entry} from "../Entry.ts";


function Eingabemaske() {
//const [word, setWord]= useState<singleWord>();
    const [input, setInput] = useState("");
    const [translatedWord, setTranslatedWord] = useState("");
    const [wortart, setWortart] = useState("");
    const [genus, setGenus] = useState("");
    const [plural, setPlural] = useState("");
    const [beispielsatz, setBeispielsatz] = useState("");
    const [synonyme, setSynonyme] = useState<string[]>([]);
    //const [entry, setEntry] = useState<Entry>();
    const [singleEntry, setSingleEntry] = useState("");
    const [id, setID] = useState("")

    useEffect(() => {
        if (singleEntry) {
            axios.get(`api/${singleEntry}`)
                .then(response => {
                    setID(response.data.id)
                    setTranslatedWord(response.data.word.translatedWord)
                    setPlural(response.data.word.pluralform)
                    setInput(response.data.word.input)
                    setGenus(response.data.word.genus)
                    setWortart(response.data.word.wortart)
                    setSynonyme(response.data.synonyme)
                    setBeispielsatz(response.data.beispielsatz)
                })
                .catch(error => {
                    console.error('Fehler beim Abrufen der Daten:', error);
                });
        }
    }, [singleEntry]);


    const addSynonymField = () => {
        setSynonyme([...synonyme, ""]);
    };

    const deleteSynonymField = (index: number) => {
        const newSynonyme = [...synonyme];
        newSynonyme.splice(index, 1);
        setSynonyme(newSynonyme);
    };

    function submit(e: FormEvent) {
        e.preventDefault();
        if (input === "" && translatedWord === "" && beispielsatz === "") {
            alert("Bitte füllen Sie alle Felder aus!")
        } else {
            alert("Die Übersendung der Daten war erfolgreich!")

            axios.post(
                "api", {
                    id: id,
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
            ).then(response => console.log(response.data))
           resetFields()
        }
    }


    const handleSynonymeChange = (index: number, value: string) => {
        const updateSynonyme = [...synonyme];
        updateSynonyme[index] = value;
        setSynonyme(updateSynonyme);
    }


    function handleEdit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id === '' && input === '' && translatedWord === "" && beispielsatz === "") {
            alert('Bitte füllen Sie alle Felder aus.');
        } else {
            alert('Formular erfolgreich abgesendet!');

            if (input && translatedWord && id) {
                axios.put("api/update", {
                    id: id,
                    word: {
                        input: input,
                        translatedWord: translatedWord,
                        wortart: wortart,
                        genus: genus,
                        pluralform: plural
                    },
                    beispielsatz: beispielsatz,
                    synonyme: synonyme
                }).then(response => console.log(response.data))
                //unnötig ab hier
               resetFields()

            }
        }
    }

    function handleSearch(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setSingleEntry(event.target.value);

    }

    function handleDelete(){
        //e.preventDefault();
        if(input && translatedWord){
            axios.delete(`api/${input}`)
                .then(resetFields)
                .catch((error) => console.log(error.message))
            alert("Löschung war erfolgreich")
        } else {
            alert("Ungültiges Entry! Das von Ihnen angegeben Entry kann nicht gelöscht werden.")
        }
    }
    const resetFields = () => {
        setSynonyme([]);
        setPlural("");
        setGenus("");
        setBeispielsatz("");
        setWortart("");
        setTranslatedWord("");
        setInput("");
        setID("");
    };


    return (


        <body>


        <div>
            <form>
                <input
                    type="text"
                    placeholder="Suche nach einem Wort/Kërko për një fjalë"
                    value={singleEntry}
                    onChange={handleSearch}
                    className="search-input"
                />
            </form>


        </div>


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
                           value={ genus}
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
                    value={ beispielsatz}
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
                       >Submit
                </button>
                <button className="update-button" type="button"
                        onClick={handleEdit}> Update
                </button>
                <button className="delete-button" type="button"
                onClick={handleDelete}>Delete

                </button>


            </form>
        </div>
        </body>
    );
}

export default Eingabemaske;