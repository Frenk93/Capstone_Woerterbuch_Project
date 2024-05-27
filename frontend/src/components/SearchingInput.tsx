import {ChangeEvent, useEffect, useState} from "react";
import {Entry} from "../Entry.ts";
import axios from "axios";

type SearchingInputProps = {
    input : string,
    entry : Entry,
    onChange : (event: ChangeEvent<HTMLInputElement>) => void
}

function SearchingInput({input, entry, onChange} : SearchingInputProps) {
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




    function handleSearch(event :ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setSingleEntry(event.target.value);



    }

    return (
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
    );
}

export default SearchingInput;