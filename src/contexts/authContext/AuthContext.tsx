import {createContext} from "react"


export type authContextValue={
    isAuthorized : boolean
}

export const authContext=createContext<authContextValue>({isAuthorized:true})