import React,{createContext,useContext,useReducer} from "react"
//Prepare the datalayer
export const StateContext =createContext();
//Wwrap our app and provide the data layer 
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}

    </StateContext.Provider>   
);
//pull informtion from the data layer
  export const useStatevalue=  () => useContext(StateContext);  
