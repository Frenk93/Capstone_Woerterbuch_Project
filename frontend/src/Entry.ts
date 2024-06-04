import {singleWord} from "./singleWord.ts";

export type Entry ={
    _id : string,
    word : singleWord,
    synonyme : string[],
    beispielsatz : string,
}