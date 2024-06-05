import "./Home.css"
import EntryCard from "./EntryCard.tsx";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Entry} from "../Entry.ts";
import axios from "axios";


function Home() {

    const[entry, setEntry] = useState<Entry>();
    const [singleEntry, setSingleEntry]=useState("");

    useEffect(() => {
        if (singleEntry) {
            axios.get(`api/${singleEntry}`)
                .then(response => {
                    setEntry(response.data);
                })
                .catch(error => {
                    console.error('Fehler beim Abrufen der Daten:', error);
                });
        }
    }, [singleEntry]);



            function handleSubmit(event: FormEvent<HTMLFormElement>) {
                // event.preventDefault(); // Wichtig, damit sich die Seite nicht refresht
                console.log(event);
            }

            function handleSearch(event :ChangeEvent<HTMLInputElement>) {
                console.log(event.target.value);
                setSingleEntry(event.target.value);


        }

    return (
        <>

            <div className="top">
                <h1>Albanisch ↔️ Deutsch </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Suche nach einem Wort/Kërko për një fjalë"
                        value={singleEntry}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </form>
            </div>


            <div className="titles-container">


                {


                    entry && (

                        <div>
                            <h3>Dein Treffer:</h3>
                            <EntryCard entry={entry}/>
                        </div>
                    )

                }

            </div>




        </>
    );
}

export default Home;