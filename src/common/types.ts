import { Info } from "../features/characters/query/index.type";

export interface IResponseDto<T>{
    info : Info;
    results : T
}