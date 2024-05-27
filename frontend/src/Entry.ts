import {singleWord} from "./singleWord.ts";

export type Entry ={
    id : string,
    word : singleWord,
    synonyme : string[],
    beispielsatz : string,
}