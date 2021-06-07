import React, { createContext } from "react";
import { Action, defState, State } from "../../reducer";


type Reducer = [State, React.Dispatch<Action>]


const red: Reducer = [defState, () => undefined];

const DeathNoteContext = createContext(red);

export { DeathNoteContext }