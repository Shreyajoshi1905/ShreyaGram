import { createAction, props } from "@ngrx/store";

export const addbook =  createAction('[Book] Add Book' , props)
export const deletebook = createAction('[Book] Delete Book' , props)
