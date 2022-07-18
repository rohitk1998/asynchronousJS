import * as type from "./actiontypes"


export function postUser(userData){
    console.log("action listing",userData);
    return{
        type : type.authTypes.REGISTER_USER,
        payload : userData
    }
}

export function saveUser(userData){
    return{
        type : type.authTypes.SAVE_USER,
        userpayload : userData
    }
}