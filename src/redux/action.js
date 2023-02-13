import { ADD, DELETE, EDIT, FILTER } from "./actionTypes"



export const handelDelete=(MovieID)=>{
    return{
       type:DELETE ,
       payload : MovieID,
    }
    
}
export const addMovie=(newMovie)=>{

    return{
        type:ADD,
        payload:newMovie,
    }


}    
export const handelFilter=()=>{
    return{
        type:FILTER,
    }
}
export const movieEdit=(editMovie)=>{
    return{
        type:EDIT,
        payload:editMovie,
    }
}

